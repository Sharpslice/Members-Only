const auth = require('express').Router()
const bcrypt = require('bcrypt')
const pool = require('../db.js');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
auth.post('/sign-up',async(req,res,next)=>{
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

passport.use(new LocalStrategy(async function verify (username,password,done){
    try{
        
        const {rows} = await pool.query(`SELECT * FROM users WHERE username = $1`,[username]);
        const user = rows[0];
        if(!user) return done(null,false,{message:'incorrect username'});
        const hashedPassword = user.password;
        if( ! await bcrypt.compare(password,hashedPassword)) return done(null,false, {message: 'incorrect password'});

        return done(null,user);

    }catch(err){
       
        return done(err);
    }
}))

passport.serializeUser(function(user,done){
    return done(null,user.id)
})

passport.deserializeUser(async(id,done)=>{
    try{
        const {rows} = await pool.query(`SELECT * from users WHERE id=$1 `,id);
        const user = rows[0];
        done(null,user)
    }catch(error){
        done(error)
    }
})

auth.get('/check-auth',(req,res,next)=>{
    // console.log('session id' , req.sessionID)
    try{
        res.status(200).json({message:req.sessionID})
    }catch(error){
        next(error)
    }
    
})

auth.post('/log-in',passport.authenticate('local'),
    (req,res)=>{
        
        if(req.user){
             res.status(200).json({message:'successful log-in ; user authenticated'})
        }
        else{
            res.status(500).json({message:'not successful'})
        }
       
    }


)




module.exports = auth;