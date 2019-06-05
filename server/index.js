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
          temp.name = arr[i].name.fi;
          // temp.img = arr[i].description.images[0].url;
          temp.description = arr[i].description.intro;
          temp.location = {lat: arr[i].location.lat, lon: arr[i].location.lon};
          result.push(temp);
        }
        console.log(result);
        return result;
}


app.listen(port, () => console.log('Server running in port: ' + port));
