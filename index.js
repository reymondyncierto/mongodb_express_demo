const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const connectDb = require('./db');
const jpadsController = require('./controllers/jpads-controller');

app.use(bodyParser.json());
app.use('/api/jpads', jpadsController);

connectDb().then(() => {
  console.log('MongoDb connected');
  app.listen(3000, () => console.log('Server started'));
}).catch(err => {
  console.log('MongoDb connection error: ', err);
});