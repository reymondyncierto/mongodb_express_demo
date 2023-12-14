// importing required libraries
const express = require('express');
const bodyParser = require('body-parser');

const app = express(); // creating an express app

// importing the database connection function and the jpads controller
const connectDb = require('./db');
const jpadsController = require('./controllers/jpads-controller');

app.use(bodyParser.json()); // using the body-parser middleware to parse the request body as JSON
app.use('/api/jpads', jpadsController); // using the jpads controller for all routes starting with /api/jpads endpoint

connectDb().then(() => { // connecting to the database and starting the server
  console.log('MongoDb connected');
  app.listen(3000, () => console.log('Server started'));// starting the server
}).catch(err => { // catching any errors that occur while connecting to the database
  console.log('MongoDb connection error: ', err);
});