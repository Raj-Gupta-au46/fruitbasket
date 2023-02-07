const axios=require('axios')
const orderModel=require('../models/orderModel')
const userModel=require('../controllers/userController')
const fruitModel=require('../controllers/fruitsController')

const createOrder=async function(req,res){
    try{
//let data=req.body

const currency = await axios.get(`https://www.currencyconverterapi.com/`)

    }
    catch(err){
        res.status(500).send({status:false,msg:err.message})
    }
}
module.exports.createOrder=createOrder