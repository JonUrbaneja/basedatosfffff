const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const userRoutes = require('./routes/user.js')

const PORT = process.env.PORT || 3000
const app = express()

//middleware
app.use(express.json()) //esto tiene que ir ANTES DE LAS RUTAS
app.use('/api',userRoutes)

// ruta 1
app.get(('/'), (req,res)=>{
    res.send('Esta es la ruta 1')
})

// Conectar a mongoDB
mongoose.connect(process.env.MONGODB_URI)
.then(()=> console.log('conectado a mongoDB Atlas'))
.catch((error) => console.error(error))



app.listen((PORT), () =>{
    console.log(`Escuchando en el puerto ${PORT}`)
})