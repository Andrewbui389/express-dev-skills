const BlogsDB = require('../models/skills')

module.exports = {
    index,
    show
}

function index(req,res){
    const blogs = BlogsDB.getAll()
    res.render('skills/index', {blogs})
}

function show(req,res){
    const id = parseInt(req.params.id)
    const getData = BlogsDB.getAll().find((x) => x.id === id)
    res.render('skills/show', {getData})
}

