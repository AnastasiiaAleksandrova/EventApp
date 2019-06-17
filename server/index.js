const express = require('express');
const app = express();
const port = 3001;
const axios = require('axios');


app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

function collectOptions(req) {
  return '?' + Object.keys(req.query).map(key => `${key}=${encodeURIComponent(req.query[key])}`).join('&')
}


app.get('/api/', (req, res) => {
  let options = collectOptions(req);
  console.log(options);
  axios.get('http://open-api.myhelsinki.fi/v1/events/' + options)
      .then(response => {
        let result = getNeededInfo(response.data.data);
        res.send(JSON.stringify(result))

      })
      .catch(err => console.log('All fucked up in server! ' + err));

})


app.get('/api/pins/', (req, res) => {
  let options = collectOptions(req);
  console.log(options);
  axios.get('http://open-api.myhelsinki.fi/v1/events/' + options)
      .then(response => {
        //console.log(response.data.data)
        let result = getPins(response.data.data);
        //console.log(result)
        res.send(JSON.stringify(result))

      })
      .catch(err => console.log('All fucked up in server! ' + err));

})

class Location {
  constructor(lat, lon) {
    this.lat = lat;
    this.lon = lon;
  }

  toString() {
    return `${this.lat} ${this.lon}`
  }
}


function getPins(arr) {
  let locationSet = new Set();

  return arr.map(el => new Location(el.location.lat, el.location.lon))
    .filter(elem => {
      if (!locationSet.has(elem.toString())) {
        locationSet.add(elem.toString())
        return true;
      } else {
        return false;
      }
    })
}



function getNeededInfo(arr) {
  let result = [];
        for (let i = 0; i < arr.length; i++) {
          let temp = {};
          temp.name = arr[i].name;
            if (arr[i].description.images.length == 0) {
            temp.img = 'https://ss.metronews.ru/userfiles/materials/125/1258933/858x540.jpg';

            } else {
              temp.img = arr[i].description.images[0].url;
            }

          temp.description = arr[i].description;
          temp.location = arr[i].location;
          temp.dates = arr[i].event_dates.starting_day;
          if (arr[i].info_url == 0 || arr[i].info_url == null) {
          temp.url = ' ';

          } else {
            temp.url = arr[i].info_url;
          }
          
          result.push(temp);

        }
        console.log(result.info_url);
        return result;
}


app.listen(port, () => console.log('Server running in port: ' + port));
