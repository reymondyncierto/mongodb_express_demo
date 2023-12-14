# Connecting MongoDB to Express App
# detailed line by line comments can be found on the source code

This guide explains how to connect MongoDB to an Express app using Mongoose, a MongoDB object modeling tool designed to work in an asynchronous environment.

## Prerequisites

Before proceeding, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Step 1: Set Up MongoDB Connection

Create a file named `db.js` in your project directory with the following content:

```javascript
// db.js
const mongoose = require('mongoose');

const uri = 'mongodb-connection-string';

module.exports = () => {
  return mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
};
```
Replace `mongodb-connection-string` with the actual MongoDB connection string.

## Step 2: Set Up Express App

Create a file named `index.js` in your project directory with the following content:
```javascript
// index.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const connectDb = require('./db');
const jpadsController = require('./controllers/jpads-controller');

app.use(bodyParser.json());
app.use('/api/jpads', jpadsController);

connectDb().then(() => {
  console.log('MongoDb connected');
  app.listen(3000, () => console.log('Server started on http://localhost:3000'));
}).catch(err => {
  console.log('MongoDb connection error: ', err);
});
```

This code sets up an Express app, includes `body-parser` middleware, connects to MongoDB using the `connectDb` function from `db.js` and then starts the server on port 3000.

## Step 3: Create Controllers

Create a file named `jpads-controller.js` inside a `controllers` folder.

```javascript
// controllers/jpads-controller.js
const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
const Jpads = require('../models/jpads');

// CRUD operations go here

module.exports = router;

```

## Step 4: Start the Application

```unset
npm start
```
