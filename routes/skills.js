const express = require('express')
const router = express.Router()
const skillsCtr = require('../controllers/skills')

// GET blog posts 


// GET / Functionality to render all skills 
router.get('/', skillsCtr.index)

// GET /new Functionality to get specific id and show 
router.get('/new', skillsCtr.new)

// POST / Functionality to get add new skill
router.post('/', skillsCtr.create)

// GET /:id Functionality to get specific id and show 
router.get('/:id', skillsCtr.show)



module.exports = router