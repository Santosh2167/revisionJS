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

async function edit(req,res){
    let {id} = req.params;
    let author = await AuthorModel.findById(id);

    //res.json(author);

    res.render("author/edit",{author});
    

}

function update(req,res){

}

async function index(req,res){
    let author = await AuthorModel.find();
    res.render("author/index",{author});

}
async function show(req,res){
    console.log("till show");
    
    //res.render(req.params);
    let {id} = req.params;
    let author = await AuthorModel.findById(id);

    res.render("author/show",{author});

}
async function destroy(req,res){
    let {id} = req.params;
    await AuthorModel.findByIdAndRemove(id);
    res.redirect("/author"); 

}

module.exports = {
    create,
    make,
    edit,
    update,
    index,
    show,
    destroy
}