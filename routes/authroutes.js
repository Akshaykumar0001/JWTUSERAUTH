const Router = require("express")
const router = Router();
const getcontroller = require("../controller/controller");


router.post("/login", getcontroller.UserLogin);
 module.exports={router}