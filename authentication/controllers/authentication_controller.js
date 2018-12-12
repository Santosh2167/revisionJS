const UserModel = require("./../database/models/user_model");

function loginForm(req,res) {

}

function loginVerify(req,res) {

}

function make(req,res){
    res.render("authentication/make");

}

async function create(req,res){
    //res.json(req.body);

    const user = await UserModel.create(req.body);
    req.session.user = user;
    res.redirect("/dashboard");

}

function logout(req,res) {
    req.session.destroy(()=>{
        res.redirect("/");
    })
}

module.exports = {
    loginForm,
    loginVerify,
    make,
    create
}