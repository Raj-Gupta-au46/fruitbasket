const mongoose=require("mongoose")
const ObjectId= mongoose.Schema.Types.ObjectId

const orderSchema=new mongoose.Schema({
    fruit:{
        type:String,
        
        required:true,
        trim:true
    },
    userId:{
        type:ObjectId,
        ref:"user"
    },
    quantity:{
        type:Number,
        required:true,
        trim:true
    },
   totalAmount:{
    type:Number,
    required:true,
    trim:true
   }
},{timestamps:true})

module.exports=mongoose.model("fruitOrder",orderSchema)