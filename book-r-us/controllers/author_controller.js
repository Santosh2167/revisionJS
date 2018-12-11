const AuthorModel = require("./../database/models/author_model");

async function create(req,res){
     //return res.json(req.body);
    let {name,bio,gender} = req.body;
    
    // let author = new AuthorModel();
    // author.name = name;
    // return res.json(author);
    let author = await AuthorModel.create({name, bio, gender})
        .catch(err => res.status(500).send(err));

        return res.json(author);

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
    // console.log("here");
    let { id } = req.params;
    let author = await AuthorModel.findById(id);
    //res.json(author);
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