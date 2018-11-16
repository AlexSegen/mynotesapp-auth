'use strict'
const express = require('express')
const router = express.Router()
const categoriesController = require('../../controllers/categories.controller');
const auth = require('../../middlewares/authorization')

  //Create a new Category
  router.post('/', categoriesController.create);

  // Retrieve all Category
  router.get('/', auth(), categoriesController.findAll);

  // Retrieve a single Category with categoryID
  router.get('/:categoryID', categoriesController.findOne);

  //Update a Category with categoryID
  router.put('/:categoryID', categoriesController.update);

  //Delete a Category with categoryID
  router.delete('/:categoryID', categoriesController.delete);

module.exports = router