const express = require("express");
const router = express.Router();
const AuthorController = require("./../controllers/author_controller");

router.post("/",AuthorController.create);
router.get("/",AuthorController.index);
router.get("/new",AuthorController.make);
router.get("/:id",AuthorController.show);
router.get("/:id/edit",AuthorController.edit);
router.put("/:id",AuthorController.update);
router.patch("/:id",AuthorController.update);
router.delete("/:id",AuthorController.destroy);


module.exports = router;