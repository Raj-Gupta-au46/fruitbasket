const express= require ("express")
const router= express.Router()
const fruitController=require("../controllers/fruitsController")
const userController=require("../controllers/userController")
const orderController=require("../controllers/orderController")

//=======================================fruit Api's========================//
router.post("/create",fruitController.create)
//=====================================user Api's===========================//
router.post("/register",userController.createUser)
router.post("/login",userController.userLogin)
//====================================order Api's===========================//
router.post('/createOrder',orderController.createOrder)

module.exports=router