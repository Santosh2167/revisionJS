const express = require("express");
const router = express.Router();
const AuthorController = require("./../controllers/author_controller");

router.get("/",AuthorController.index);//read
router.post("/",AuthorController.create);//create
router.get("/new",AuthorController.make);//Create
router.get("/:id",AuthorController.show);//read
router.put("/:id",AuthorController.update);//update
router.patch("/:id",AuthorController.update);//update
//router.delete("/:id",AuthorController.destroy);//delete
router.get("/:id/edit",AuthorController.edit);//update


module.exports = router;