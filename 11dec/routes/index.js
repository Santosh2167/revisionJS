const express = require ("express");
const AuthorRouters = require("./author_routes");
const router = express.Router();

router.use("/author",AuthorRouters);


module.exports = router;