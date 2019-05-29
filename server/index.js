const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const app = express();



const axios = require('axios');
const flatted = require('flatted');



app.get('/api/greeting', async (req, res, next) => {
 try {
   const name = req.query.name;
   const getEvents = () => {
    try {
      return axios.get(`http://open-api.myhelsinki.fi/v1/events/${name}&limit=2`).then(response => flatted.stringify(response.data))
    }
    catch (error) {
      console.error('Axios error: ' + error)
    }
   }
   const events = await getEvents()
   res.header("Access-Control-Allow-Origin", "*");
   res.setHeader('Content-Type', 'application/json');


   res.send({ greeting: `${events}` });
   //res.json(JSON.parse(events));
 }
 catch (error) {
   next(error)
 }
});





app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);
/*
app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'Her';
  res.setHeader('Content-Type', 'application/json');
  res.header("Access-Control-Allow-Origin", "*");
  res.send({ greeting: `Hello ${name}!` });

  //res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});*/

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);
