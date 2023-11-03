const express = require("express");
const { getUsers, getUser, createUser, deleteUser, updateUser } = require("../controllers/users");
const router = express.Router();

const { UserRegisterValidation } = require("../validators/users");

router.get("/users", getUsers);
router.get("/users:id", getUser);
router.post("/users", UserRegisterValidation(), createUser);
router.put("/users", updateUser);
router.delete("/users", deleteUser);

module.exports = router;