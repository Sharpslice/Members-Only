const express = require('express');
const {Pool} = require('pg');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const cors = require('cors')

require('dotenv').config();


const authRoute = require('./routes/auth')


const app = express();
app.use(cors())
app.use(express.json())

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))






app.use('/auth',authRoute)

app.use((error,req,res,next)=>{
    console.error(error.message)

    res.status(error.status).json({message:'something failed!'})
})

app.listen(3000,()=>console.log("app listening on port 3000!"))


