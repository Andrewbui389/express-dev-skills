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

// DELETE /:id Functionality to delete a skill
router.delete('/:id', skillsCtr.delete)

// GET /edit/:id Functionality to edit a skill
router.get('/edit/:id', skillsCtr.edit)

// PUT /edit/:id Functionality to edit a skill
router.put('/:id', skillsCtr.update)

module.exports = router