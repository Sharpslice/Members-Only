const auth = require('express').Router()


auth.post('/sign-up',(req,res)=>{
    console.log(req.body)
})

module.exports = auth;