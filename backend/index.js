const express = require("express")
const app = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")
const userRoute = require("./routes/userRoute")

app.use(cors())
require("dotenv").config()
const Port = process.env.PORT
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))


mongoose.connect(process.env.DB_CONNECT).then(()=>{
    console.log("DB Connected")
})

app.use("/user" , userRoute)
app.listen(Port , ()=>{
    console.log(`Listening at the port of ${Port}`)
})