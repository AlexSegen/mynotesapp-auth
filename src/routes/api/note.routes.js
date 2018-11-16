'use strict'
const express = require('express')
const router = express.Router()
const notesController = require('../../controllers/notes.controller');
const auth = require('../../middlewares/authorization')

  //Create a new Note
  router.post('/', notesController.create);

  // Retrieve all Notes
  router.get('/', auth(), notesController.findAll);

  // Retrieve a single Note with noteID
  router.get('/:noteId', notesController.findOne);

  //Update a Note with noteId
  router.put('/:noteId', notesController.update);

  //Delete a Note with noteId
  router.delete('/:noteId', notesController.delete);

module.exports = router