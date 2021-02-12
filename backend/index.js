const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')

const auto = require('./routes/auto')

const app = express()
app.use(cors())
app.use(express.json())
app.use("/api/auto", auto)

const port = process.env.PORT || 3001

app.listen(port, ()=>{
    console.log("Puerto ejecutado: ", port)
})

mongoose.connect("mongodb://localhost/autos",{
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log("conexion con mongo: on")
})
.catch((error)=>{
    console.log("conexion con mongo: off", error)
})