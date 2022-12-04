const mongoose=require('mongoose');

const Mobiles=mongoose.Schema({
   p_id:{
    type:String,
   //  require:true
   },
   p_image:{
    type:String,
    ContentType:'image/png'
   },
   p_brand:{
    type:String,
   //  require:true
   },
   p_model:{
    type:String
   },
   p_os:{
    type:String
   },
   p_cellularTechnology:{
    type:String
   },
   p_memoryStorage:{
    type:String
   },
   p_color:{
    type:String
   },
 
   p_screeSize:{
    type:String
   },
   p_ram:{
    type:String
   },
   p_battery:{
    type:String
   },
   p_sim:{
    type:String,
    default:"Dual sim"
   },
   p_camera:{
    type:String
   },
   p_addDate:{
    type:Date,
    default:Date.now()
   //  require:true
   },
   p_quantity:{
    type:Number,
   //  require:true
   },
   p_price:{
      type:Number,
      default:100
   },
   p_description:{
      type:String
   }
},{timestamps:true});

module.exports=mongoose.model('mobiles_data',Mobiles);
