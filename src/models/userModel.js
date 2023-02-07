const mongoose=require('mongoose')
const ObjectId= mongoose.Schema.Types.ObjectId

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
   
    phoneNumber:{
        type:Number,
        required:true,
        trim:true
    },
    email:{
       type:String,
       required:true,
       trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true

    }
    
},{timeStamps:true})

module.exports=mongoose.model("user",userSchema)