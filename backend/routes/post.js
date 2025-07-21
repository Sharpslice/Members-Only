const post = require('express').Router();
const pool = require('../db');


post.post('/create',async(req,res)=>{

    const {title,message} = req.body;
    
    
    const response = await pool.query(`
        INSERT INTO messages (title,messages,user_id)
        VALUES ($1,$2,$3)
    `,[title,message,req.user.id])
    res.status(200).json({message:'success'})
});



module.exports = post;