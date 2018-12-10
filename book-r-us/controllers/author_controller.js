const AuthorModel = require("./../database/models/author_model");

async function create(req,res){
    let(name,bio,gender) = req.body;
    let author = await AuthorModel.create({name, bio, gender});

    res.redirect(`/authors/${author._id}`);
}

function index(req,res){

}

function make(req,res) {
    res.render("author/new");

}

function edit(req,res){

}
function destory(req,res){

}

async function show(req,res) {
    let {id} = req.params;
    let author = await AuthorModel.findById(id);

    res.render("author/show",{author});

}

function update(req,res){

}

module.exports ={
    create,
    index,
    make,
    edit,
    show,
    update,
    destory
}