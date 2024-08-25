import mongoose from 'mongoose';
import InsertDefaultData from '../Default.js';

export const Connection = async() => {
    const URL = `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.2t6cb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    const URL2 = `mongodb://127.0.0.1:27017/e-commerce-project`;
    try{
        await mongoose.connect(URL,  { useNewUrlParser: true, useUnifiedTopology: true }); 
        console.log("Database Connected Successfully.");
        // InsertDefaultData(); 
        // bad auth : Authentication failed.

    }
    catch(error){
        console.log("Error while connecting with the database", error.message);
    }


}


export default Connection;