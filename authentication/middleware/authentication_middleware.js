function authorize(req,res,next) {
    if(!req.session || !res.session.user){
        return res.redirect("/login");
    }
    next();
}

function authorizeLogin(req,res,next) {
    if(req.session || res.session.user){
        return res.redirect("/dashboard");
    }
    next();
}

module.exports = {
    authorize,
    authorizeLogin
}