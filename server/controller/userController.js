import { response } from "express";
import User from "../database/userSchema.js";
import sql from 'mssql';

// export const authenticateSignup = async(req, res) =>{
//     try{   
        
//         const exist = await User.findOne({username : req.body.username});
//         console.log("exist data ", exist);

//         if(exist){
//             return (res.status(401).json({message : 'username already exist.'}));
//         }
        
//         const user = req.body;
//         const newUser = new User(user)
//         await newUser.save();
        
//         //sql server code 
//         const signupForSql = async() => {
//             const {
//                 firstname,
//                 lastname,
//                 username,
//                 email,
//                 password,
//                 phone,
//                 alt_phone,
//                 gender,
//                 house_no,
//                 street,
//                 city,
//                 state,
//                 country,
//                 postal,
//               } = req.body;
            
//               try {
//                 const request = new sql.Request();
//                 request.input('fname', sql.NVarChar, firstname);
//                 request.input('lname', sql.NVarChar, lastname);
//                 request.input('gender', sql.NVarChar, gender);
//                 request.input('email', sql.NVarChar, email);
//                 request.input('password', sql.NVarChar, password);
//                 request.input('phone', sql.NVarChar, phone);
//                 request.input('alternativePhone', sql.NVarChar, alt_phone);
//                 request.input('houseno', sql.NVarChar, house_no);
//                 request.input('street', sql.NVarChar, street);
//                 request.input('city', sql.NVarChar, city);
//                 request.input('state', sql.NVarChar, state);
//                 request.input('country', sql.NVarChar, country);
//                 request.input('postalCode', sql.NVarChar, postal);
            
//                 const result = await request.execute('UserRegistration');
//                 res.status(201).json({ message: 'User registered successfully', data: result.recordset });
//               } catch (error) {
//                 console.error('Error inserting user:', error);
//                 res.status(500).json({ error: 'Internal Server Error' });
//               }
        
//         }
//         signupForSql();
//         res.status(200).json({message : user});
//     }   
//     catch(error){
//         // console.log('error while authenticateSignup user', error);
//         res.status(500).json({message : error.message});
//     }
// }
export const authenticateSignup = async (req, res) => {
    try {
        // Check if the user already exists in MongoDB
        const exist = await User.findOne({ username: req.body.username });
        console.log("exist data ", exist);

        if (exist) {
            return res.status(401).json({ message: 'Username already exists.' });
        }

        // Save the new user in MongoDB
        const user = req.body;
        const newUser = new User(user);
        await newUser.save();

        // Save the new user in SQL Server
        // const {
        //     firstname,
        //     lastname,
        //     username,
        //     email,
        //     password,
        //     phone,
        //     alt_phone,
        //     gender,
        //     house_no,
        //     street,
        //     city,
        //     state,
        //     country,
        //     postal,
        // } = req.body;

        // const request = new sql.Request();
        // request.input('fname', sql.NVarChar, firstname);
        // request.input('lname', sql.NVarChar, lastname);
        // request.input('gender', sql.NVarChar, gender);
        // request.input('email', sql.NVarChar, email);
        // request.input('password', sql.NVarChar, password);
        // request.input('phone', sql.NVarChar, phone);
        // request.input('alternativePhone', sql.NVarChar, alt_phone);
        // request.input('houseno', sql.NVarChar, house_no);
        // request.input('street', sql.NVarChar, street);
        // request.input('city', sql.NVarChar, city);
        // request.input('state', sql.NVarChar, state);
        // request.input('country', sql.NVarChar, country);
        // request.input('postalCode', sql.NVarChar, postal);

        // await request.execute('UserRegistration');

        // Send a success response after both operations are complete
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error during signup:', error);
        if (!res.headersSent) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
};




export const authenticateLogin = async(req, res) => {
    try{
        const username = req.body.username;
        const password = req.body.password;

        const user = await User.findOne({username: username, password : password});

        if(user){
            return res.status(200).json({data : user});
        }
        else{
            return res.status(401).json(`Invalid login`);
        }

    }
    catch(e){
        res.status(500).json("Error", e.message);
        
    }
}