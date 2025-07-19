const express = require('express');
const {Pool} = require('pg');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const cors = require('cors')
const bcrypt = require('bcrypt')
require('dotenv').config();
const pool = new Pool({
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: 'localhost',
    port: 5432

})

const authRoute = require('./routes/auth')


const app = express();
app.use(cors())
app.use(express.json())

app.use('/auth',authRoute)



app.listen(3000,()=>console.log("app listening on port 3000!"))

module.exports = pool;
