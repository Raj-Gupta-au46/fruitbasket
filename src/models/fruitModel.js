const mongoose=require('mongoose')

const fruitSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    quantity:{
        type:Number,
        required:true,
        trim:true
    },
    quantityType:{
        type:String,
        required:true,
        trim:true

    },
    pricePerKg:{
        type:Number,
        required:true,
        trim:true
    },
    priceType:{
        type:String,
        required:true,
        trim:true
    }
   
},{timestamps:true})
module.exports=mongoose.model("fruitCollection",fruitSchema)