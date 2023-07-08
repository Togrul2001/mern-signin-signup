const express = require("express")
const { getHomeDatas } = require("../controllers/mainControllers")
const router = express.Router()


router.route("/home").get(getHomeDatas)

module.exports = router

