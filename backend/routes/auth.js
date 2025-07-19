const auth = require('express').Router()
const bcrypt = require('bcrypt')
const pool = require('../db.js')
auth.post('/sign-up',async(req,res)=>{
    const {username,password,name,lastName} = req.body;

    const hashedPassword = await bcrypt.hash(password,10);
    try{
        await pool.query(`
        INSERT INTO users (username,name,last_name,password,role)
        VALUES ($1,$2,$3,$4,'member')
        
        `,[username,name,lastName,hashedPassword])

        res.status(200).send('good')
    }
    catch(error){
        next(error)
    }
})

module.exports = auth;