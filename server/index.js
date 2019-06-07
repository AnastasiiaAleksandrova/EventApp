const express = require('express');
const app = express();
const port = 3001;
const axios = require('axios');
//const flatted = require('flatted');

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



app.get('/api/', (req, res) => {
  console.log(req.query)

  let options = '?';
  for (let key in req.query) {
      if (options != '?') {
        options += '&'
      }
      options += `${key}=${encodeURIComponent(req.query[key])}`
      console.log(options);
  }



  axios.get('http://open-api.myhelsinki.fi/v1/events/' + options)
      .then(response => {
        let result = getNeededInfo(response.data.data);
        res.send(JSON.stringify(result))

      })
      .catch(err => console.log('All fucked up in server! ' + err));

})

function getNeededInfo(arr) {
  let result = [];
        for (let i = 0; i < arr.length; i++) {
          let temp = {};
          temp.name = arr[i].name;
          if (arr[i].description.images.length == 0) {
          temp.img = 'https://ss.metronews.ru/userfiles/materials/125/1258933/858x540.jpg';
            //temp.img = 'https://ss.metronews.ru/userfiles/materials/125/1258933/858x540.jpg';
              console.log(temp.img);
          } else {
            temp.img = arr[i].description.images[0].url;
            console.log(temp.img);
          }

          temp.description = arr[i].description;
          temp.location = arr[i].location;
          temp.dates = arr[i].event_dates;
          result.push(temp);

        }
        console.log(result.img);
        return result;
}


app.listen(port, () => console.log('Server running in port: ' + port));
