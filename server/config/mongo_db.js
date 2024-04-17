// Mongo Connect  user: jhonmart   |   pass: Sy6mI3rgAv8LN4S8

const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const MONGO_URL = process.env.MONGO_URL;

const db = async ()=>{
    try{
        const con = await mongoose.connect(MONGO_URL);

        console.log(`MongoDB Connected: ${con.connection.host}`)
    }catch(e){
        console.log('Error: ', e);
    }
}

module.exports = db;