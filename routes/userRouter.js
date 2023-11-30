const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");

router.get("/", controller.show);
router.post("/", controller.addUser);
router.put("/", controller.editUser);
router.put("/:id", controller.deleteUser);
module.exports = router;
