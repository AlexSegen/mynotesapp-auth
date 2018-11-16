'use strict'
const express = require('express')
const router = express.Router()
const categoriesController = require('../../controllers/categories.controller');
const auth = require('../../middlewares/authorization')

  //Create a new Category
  router.post('/', auth(), categoriesController.create);

  // Retrieve all Category
  router.get('/', auth(), categoriesController.findAll);

  router.get('/user/', auth(), categoriesController.findUserAll);

  // Retrieve a single Category with categoryID
  router.get('/:categoryId', auth(), categoriesController.findOne);

  //Update a Category with categoryID
  router.put('/:categoryId', auth(), categoriesController.update);

  //Delete a Category with categoryID
  router.delete('/:categoryId', auth(), categoriesController.delete);

module.exports = router