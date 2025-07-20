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
        if( !bcrypt.compare(password,hashedPassword)) return done(null,false, {message: 'incorrect password'});

        console.log('credentials authenticateds')
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

auth.post('/log-in',passport.authenticate('local'),
    (req,res)=>{
       
        res.status(200).json({message:'successful log-in'})
    }


)




module.exports = auth;