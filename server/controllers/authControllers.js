const { validationResult } = require("express-validator")
const bcrypt = require("bcrypt")
const {v1:randomId} = require("uuid")
const Users = require("../models/UserSchema")


const userRegister = async (req,res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    const { fullname, email, password } = req.body

    try {
        const existingUser = await Users.findOne({email})
        if (existingUser) return res.status(400).json({errors: [{msg:'Bu email adresi artiq movcuddur'}]})
        if (!password || password.length < 6) return res.status(400).json({errors: [{msg: "Sifre xetasi"}]})
        const salt = await bcrypt.genSalt(10)
        const hashedPaswword = await bcrypt.hash(password, salt)
        console.log("randommmmmid", randomId());
        const newUser = new Users({
            _id:randomId(),
            fullname,
            email,
            password: hashedPaswword
        })
        console.log("newwwuserr", newUser);
        await newUser.save()
        res.status(201).json({msg: "User yaradildi"})

    } catch (error) {
        console.log("error", error);
        res.status(400).json({msg:"Server xetasi"})
    }

}

const userLogin = (req,res) => {
    console.log("Login sehifesi");
}

module.exports = {
    userRegister,
    userLogin
}