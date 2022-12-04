const mongoose=require('mongoose');
const Category=mongoose.Schema({
    companyType:{
        type:String
    }  
},{timestamps:true})
module.exports=mongoose.model('Category',Category);