const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const port = 3000;


app.set("view engine","handlebars");
app.engine("handlebars",exphbs({defaultLayout: main}));



app.listen(port, ()=>console.log(`Server is listening on port ${port}`));