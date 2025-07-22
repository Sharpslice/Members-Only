const pool = require('../db');

const user = require('express').Router();

user.get('/:id',async(req,res)=>{
    const id = req.params.id;
    const {rows} = await pool.query(`SELECT * FROM users WHERE id=$1`,[id])
    const user= rows[0];
    res.json({user:user});
})

module.exports = user;