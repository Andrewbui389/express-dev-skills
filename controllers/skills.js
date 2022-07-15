const SkillsDB = require('../models/skill')

module.exports = {
    index,
    show,
    new: newEntry,
}

function index(req, res){
    const data = SkillsDB.getAll()
    res.render('skills/index', {data})
}

function show(req, res){
    const id = parseInt(req.params.id)
    const data = SkillsDB.getAll().find((x) => x.id === id)
    res.render('skills/show', {data})
}

function newEntry(req, res){
    res.render('skills/new')
}
