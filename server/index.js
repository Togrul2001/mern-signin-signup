const express = require('express')
const app = express()

const PORT = 3001

app.get("/home", function(req,res){
    res.status(200)
    res.send({
        fullname:"Togrul Mammadov",
        email:"mammadov@gmail.com",
        password:"12345"
    })
    console.log("Salam home sehifesi");
})

app.listen(PORT, ()=>{
    console.log("Server is rungging: ", PORT);
})