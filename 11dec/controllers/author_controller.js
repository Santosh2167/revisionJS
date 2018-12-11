const AuthorModel = require("./../database/models/author_model")

async function create(req,res) {
    let {name,bio,gender} = req.body;
    let author = await AuthorModel.create({name,bio,gender});

    //res.json(author);
    
    //res.redirect('/author/${author._id}');

    res.redirect(`/author/${author._id}`);

}

function make(req,res){
    // let author = {
    //     name: "santosh",
    //     Surname: "Poudyal",
    //     age: 35
    // }

    // res.json(author);
    res.render("author/new");

}

function edit(req,res){

}

function update(req,res){

}

function index(req,res){

}
async function show(req,res){
    console.log("till show");
    
    //res.render(req.params);
    let {id} = req.params;
    let author = await AuthorModel.findById(id);

    res.render("author/show",{author});

}
function destory(req,res){

}

module.exports = {
    create,
    make,
    edit,
    update,
    index,
    show,
    destory
}