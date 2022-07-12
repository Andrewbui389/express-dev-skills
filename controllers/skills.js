const BlogsDB = require('../models/skills')

module.exports = {index}

function index(req,res){
    const blogs = BlogsDB.getAll()
    res.render('skills/skills', {blogs})
}