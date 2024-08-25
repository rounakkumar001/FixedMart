import products from './constants/Data.js'
import Product from './database/model.js';

const InsertDefaultData = async() =>{
    try{
        const Inserted = await Product.insertMany(products);
        console.log("inserted Data : " + Inserted);
    }
    catch(error){
        console.log("Error while inserting default data ");
    }
}


export default InsertDefaultData;