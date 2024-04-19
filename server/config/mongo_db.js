// Mongo Connect  user: jhonmart   |   pass: Sy6mI3rgAv8LN4S8

const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const MONGO_URL = process.env.MONGO_URL;

const db = async ()=>{
    try{
        const con = await mongoose.connect(MONGO_URL);

        console.log(`MongoDB Connected Host: ${con.connection.host}`)
        console.log(`MongoDB Connected Port: ${con.connection.port}`)
        console.log('Connected to database: ', con.connection.name)
    }catch(e){
        console.log('Error: ', e);
    }
}

db();

module.exports = db;