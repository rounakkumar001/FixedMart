import express from 'express';
import Connection from './database/db.js';
import connectToSql from './database/sqldb.js';
import Dotenv from 'dotenv';
import InsertDefaultData from './Default.js';
import bodyParser from 'body-parser';
import Router from './routes/router.js';


import cors from 'cors';
import { v4 as uuid } from 'uuid';

const app = express();
const PORT = 8000;
Dotenv.config();


app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors({
    methods : ["GET", "POST", "PUT"]
}));

app.use('/', Router);

Connection().then(() => {
    app.listen(PORT , ()=> {
        console.log(`server is running on http://localhost:${PORT}`)
    })
}).catch((err) => {
    console.log("error while running server", err.message)
})
// connectToSql();





export let paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID,
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE,
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID,
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID,
paytmParams['ORDER_ID'] = uuid(),
paytmParams['CUST_ID'] = process.env.PAYTM_CUSTMR_ID,
paytmParams['TXN_AMOUNT'] = '500',
paytmParams['CALLBACK_URL'] = 'http://localhost:8000/callback'
paytmParams['EMAIL'] = 'rounakkumar1034@gmail.com'
paytmParams['MOBILE_NO'] = '8407021011'
