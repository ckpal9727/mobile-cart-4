require('dotenv').config();
const express=require('express');
const app=express();
const port=process.env.PORT 

const connection=require('./connection/connection');
const cookieParser = require("cookie-parser");
const bodyParser=require('body-parser');
const ejs=require('ejs');
const userRoute=require('./Route/userRoute/userRoute');
const productRoute=require('./Route/productRoute/productRoute');
const htmlRoute=require('./Route/htmlRoute/htmlRoute');


app.use(express.static('public'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.json());
app.set('view engine','ejs');
app.use('/users',userRoute);
app.use('/products',productRoute);
app.use('/admin',htmlRoute);

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})
