import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname : {
        type : String,
        required : true,
        trim : true,
        min : 3,
        max : 20
    },
    lastname : {
        type : String,
        required : true,
        trim : true,
        min : 3,
        max : 20
    },
    username : {
        type : String,
        required : true,
        trim : true,
        lowerCase : true,
        unique : true,
        index : true
    },
    email : {
        type : String,
        required : true,
        trim : true,
        lowerCase : true,
        unique : true,
    },
    password : {
        type : String,
        trim : true,
        required : true,
        
    },
    phone : {
        type : String,
        required : true,
        trim : true,
    },
    alt_phone : {
        type : String,
        required : true,
        trim : true,
    },
    gender : {
        type : String,
        required : true,
        trim : true,
    },
    house_no : {
        type : String,
        required : true,
        trim : true,
    },
    street : {
        type : String,
        required : true,
        trim : true,
    },
    city : {
        type : String,
        required : true,
        trim : true,
    },
    state : {
        type : String,
        required : true,
        trim : true,
    },
    country : {
        type : String,
        required : true,
        trim : true,
    },
    postal : {
        type : String,
        required : true,
        trim : true,
    },



})


const User =  new mongoose.model('user', userSchema);

export default User;
