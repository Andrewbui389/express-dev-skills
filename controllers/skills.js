const SkillsDB = require('../models/skill')

module.exports = {
    index,
    show,
    new: newEntry,
    create,
    delete: deleteSkill,
    edit,
    update
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

function create(req, res){
    SkillsDB.create(req.body)
    res.redirect('/skills')
}

function deleteSkill(req, res){
    SkillsDB.delete(req)
    res.redirect('/skills')
}

function edit(req, res){
    const id = parseInt(req.params.id)
    const data = SkillsDB.getAll().find((x) => x.id === id)
    res.render('skills/edit', {data})
}


function update(req, res){
    SkillsDB.update(req.params.id, req.body)
    res.redirect('/skills')
}