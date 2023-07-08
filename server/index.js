const express = require('express')
const cors = require("cors")
const connectDB = require('./config/db')
const dotenv = require("dotenv").config()
const app = express()


const PORT = process.env.PORT || 3001


app.use(express.json())
app.use(cors())
connectDB()

app.use("/", require("./routes/mainRoutes"))
app.use("/auth", require("./routes/authRoutes"))

app.post("/salam", (req,res) => {
    
})

app.listen(PORT, ()=>{
    console.log("Server is rungging: ", PORT);
})