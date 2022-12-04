const mongoose=require('mongoose');

const Order=mongoose.Schema({
    u_id:String,
    o_status:String,
    o_date:{
        type:Date,
        default:Date.now()
    },
    p_details:[
        {
            p_id:String,
            p_name:String,
            p_quantity:Number,
            p_price:Number
        }
    ],
    o_total:Number
})
module.exports=mongoose.model('Order',Order);