const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const port = 3000;


app.set("view engine","handlebars");
app.engine("handlebars",exphbs({defaultLayout: "main"}));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/book_r_us1");
mongoose.Promise = global.Promise;

mongoose.connection.on("error",err => console.log(err));

app.use(require("./routes"));




app.listen(port, ()=>console.log(`Server is listening on port ${port}`));