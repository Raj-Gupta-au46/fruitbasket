const fruitModel=require("../models/fruitModel")
const orderModel=require("../models/orderModel")


const create=  async function(req,res){
    try{
   let data=req.body
   let createFruit=await fruitModel.create(data)
   res.status(201).send({status:true,data:createFruit})
    }
    catch(err){
        res.status(500).send({status:false,msg:err.message})
    }
}

module.exports.create=create