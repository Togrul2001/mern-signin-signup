const express = require("express")
const { userRegister, userLogin } = require("../controllers/authControllers")
const { body } = require("express-validator")
const router = express.Router()

router.route("/register", [
    body("email").isEmail().withMessage("Zehmet olmasa dogru email addresi daxil edin"),
    body("password").isLength({min:6}).withMessage("Sifrenin uzunlugu minimum 6 olmalidir")
]).post(userRegister)
router.route("/login").post(userLogin)


module.exports = router