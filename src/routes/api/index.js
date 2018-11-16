'use strict'
const express = require('express')
const router = express.Router()
const authRouter = require('./auth.route')

const notesRouter = require('./note.routes')
const categoriesRouter = require('./category.routes');

router.get('/status', (req, res) => { res.send({status: 'OK'}) }) // api status

router.use('/auth', authRouter) // mount auth paths

router.use('/notes', notesRouter)

router.use('/categories', categoriesRouter)

module.exports = router
