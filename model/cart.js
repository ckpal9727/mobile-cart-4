const mongoose=require('mongoose');
const Cart=mongoose.Schema({
    crtId:{
        type:String,
    },
    items:[{
        pId:String,
        pQuantity:{
            type:Number,
            default:0
        }
    }]
        
    
},{timestamps:true})
module.exports=mongoose.model('cart',Cart);