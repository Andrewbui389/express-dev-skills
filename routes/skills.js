const express = require('express')
const router = express.Router()
const skillsCtr = require('../controllers/skills')
// GET blog posts 

router.get('/', skillsCtr.index)

router.get('/:id', skillsCtr.show)

module.exports = router