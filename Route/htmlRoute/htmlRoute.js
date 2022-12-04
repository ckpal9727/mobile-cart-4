const route = require('express').Router();
const path = require('path');
const Route = path.join(__dirname, '../');
const verify = require(path.join(Route, '../verify'));


route.get('/',(req,res)=>{
    res.render('login');
})

route.get('/add_product',(req,res)=>{
    res.render('addProduct')
})
module.exports=route;