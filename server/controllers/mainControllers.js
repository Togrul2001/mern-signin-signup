const getHomeDatas = (req,res) => {
    res.status(200)
    res.send({
        fullname:"Togrul Mammadov",
        email:"mammadov@gmail.com",
        password:"12345"
    })
    console.log("Salam home sehifesi");
}

module.exports = {
    getHomeDatas
}