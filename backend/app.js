const express = require('express');
const {Pool} = require('pg');
const session = require('express-session');

const cors = require('cors')

require('dotenv').config();


const authRoute = require('./routes/auth');
const passport = require('passport');


const app = express();
app.use(cors({
  origin: 'http://localhost:5173', // Your frontend
  credentials: true                // Allow cookies
}));

app.use(express.json())

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

app.use(passport.session());

app.use((req,res,next)=>{
    console.log(req.session);
    console.log(req.user);
    next();
})


app.use('/auth',authRoute)

app.use((error,req,res,next)=>{
    console.error(error.message)

    res.status(error.status).json({message:'something failed!'})
})

app.listen(3000,()=>console.log("app listening on port 3000!"))


