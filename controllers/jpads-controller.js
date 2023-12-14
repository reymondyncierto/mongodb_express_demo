const express = require('express'); // importing the express library
const router = express.Router();    // creating an instance of the express router
const ObjectId = require('mongoose').Types.ObjectId; // for checking if the id is valid

const Jpads = require('../models/jpads'); // importing the jpads model

// get all 
router.get('/', (req, res) => {
    Jpads.find().then((data) => { // finding all the documents in the jpads collection
        res.send(data);           // sending the documents as a response
    }).catch((err) => {
       console.log('error: ', err); // logging any errors that occur
    });
});

// get specific
router.get('/:id', (req, res) => {
  if(!ObjectId.isValid(req.params.id)) return res.status(404).json({error: 'invalid id'});  // checking if the id is valid
  else {
    Jpads.findById(req.params.id).then((data) => {  // finding the document with the given id
      if(data) res.send(data);                      // sending the document as a response
      else res.sendStatus(404).json({error: 'no record with the given id'});  // sending 404 if no document with the given id is found
    }).catch((err) => {
       console.log('error: ', err); // logging any errors that occur
    });
  }
});

// create
router.post('/', (req, res) => {  // creating a new document from the request body and saving it to the database
    Jpads.create(req.body).then((data) => { 
        res.status(201).json(data);   // sending the created document as a response
    }).catch((err) => {
        console.log('error: ', err);  // logging any errors that occur
    });
});

// update
router.put('/:id', (req, res) => {
  if(!ObjectId.isValid(req.params.id)) return res.status(404).json({error: 'invalid id'});  // checking if the id is valid
  else {
    Jpads.findByIdAndUpdate(req.params.id, req.body, {new: true}).then((data) => {  // finding the document with the given id and updating it with the request body
      if(data) res.send(data);      // sending the updated document as a response
      else res.sendStatus(404).json({error: 'no record with the given id'});  // sending 404 if no document with the given id is found
    }).catch((err) => {
       console.log('error: ', err); // logging any errors that occur
    }); 
  }
});

// delete
router.delete('/:id', (req, res) => {
  if(!ObjectId.isValid(req.params.id)) return res.status(404).json({error: 'invalid id'});  // checking if the id is valid
  else {
    Jpads.findByIdAndDelete(req.params.id).then((data) => { // finding the document with the given id and deleting it
      if(data) res.send(data);  // sending the deleted document as a response
      else res.sendStatus(404).json({error: 'no record with the given id'});  // sending 404 if no document with the given id is found
    }).catch((err) => {
       console.log('error: ', err); // logging any errors that occur
    });
  }
});

module.exports = router; // exporting the router