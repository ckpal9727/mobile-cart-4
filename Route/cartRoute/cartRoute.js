const route=require('express').Router();
const path=require('path');
const Route=path.join(__dirname,'../');
const verify=require(path.join(Route,'../verify'));
const Cart=require(path.join(Route,'../model/cart'));
const crypto = require('crypto-js');
const jwt = require('jsonwebtoken');




//--


module.exports=route;