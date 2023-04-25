const express = require('express')
const userSchema = require('../models/user')

const router = express.Router()

// create user
router.post('/users', (req, res)=>{
    const user = userSchema(req.body);
    user
    .save()  // para guardar al usuario
    .then((data) => res.json(data)) 
    .catch((error)=> res.json({message:error}))
})

module.exports = router;