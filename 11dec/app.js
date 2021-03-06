const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const port = 3000;
const app = express();


mongoose.connect("mongodb://localhost/book_r_us3");
mongoose.Promise = global.Promise;
mongoose.connection.on("error",err => console.log(err));


app.engine("handlebars",exphbs({defaultLayout: "main"}));
app.set("view engine","handlebars");

app.use(methodOverride("_method",{methods:['POST','GET']}));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(require("./routes"));





app.listen(port, ()=> console.log(`server is listening on port${port}`));