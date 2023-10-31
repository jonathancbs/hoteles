const express = require("express");
const { getUsers, getUser, createUser, deleteUser, updateUser } = require("../controllers/users");
const router = express.Router();


router.get("/reservas", getUsers);
router.get("/reservas:id", getUser);
router.post("/reservas", createUser);
router.put("/reservas", updateUser);
router.delete("/reservas", deleteUser);

module.exports = router;