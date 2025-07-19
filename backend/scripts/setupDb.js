require('dotenv').config();
const {Pool} = require('pg')

const pool = new Pool({
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: 'localhost',
    port: 5432

})

async function createTable(){
   

    try{
        await pool.query(`

        
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                username VARCHAR(255) UNIQUE NOT NULL,
                name VARCHAR(255) NULL,
                last_name VARCHAR(255) NULL,
                password TEXT NOT NULL,
                role VARCHAR(255) NOT NULL DEFAULT 'member' CHECK(role in ('member','admin'))
            );

            CREATE TABLE IF NOT EXISTS messages(
                id SERIAL PRIMARY KEY ,
                title VARCHAR(255) NOT NULL,
                messages TEXT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                user_id INTEGER REFERENCES users(id) ON DELETE SET NULL
            );
          

            
        `)



        
    }catch(err)
    {
        console.log('Internal server error ', err.message)
    }


      
}
    
createTable();