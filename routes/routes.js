const { Router } = require("express");
const router = Router();
const getcontroller = require("../controller/controller");
const authenticationToken = require("../middleware/authorization");

router.post("/insert", getcontroller.InsertData);
router.get("/users", authenticationToken.authentication, getcontroller.GetData);
module.exports = { router };
