const userModel = require("../models/userModel")
const fruitModel = require("../models/fruitModel")


const createUser = async function (req, res) {
    try {
        let data = req.body
        let createUser = await userModel.create(data)
        res.status(201).send({ status: true, data: createUser })
    }
    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}


//==========================================================LOGIN USERS==========================================================================
const userLogin = async function (req, res) {
    try {
        let data = req.body
        let { email, password, phoneNumber } = data
        if (Object.keys(req.body).length == 0) {
            return res.status(400).send({ status: false, message: "can not login without credentials" })
        }
        if (data.hasOwnProperty("email") && data.hasOwnProperty("phone")) { return res.status(400).send({ status: false, message: "please provide any one between email and phone no" }) }
        if (!data.hasOwnProperty("email")) {
            if (!data.hasOwnProperty("phone")) { return res.status(400).send({ status: false, message: "please enter mobile no or email id to login" }) }
        }
        if (!data.hasOwnProperty("password")) { return res.status(400).send({ status: false, message: "please enter password to login" }) }

        let findUser = await userModel.findOne({ $or: [{ email: data.email }, { phone: data.phone }] })
        if (!findUser) { return res.status(404).send({ status: false, message: "User not found" }) }


        let token = jwt.sign({ userId: findUser._id }, "fruitbasket", { expiresIn: "10d" })
        let obj = { userId: findUser["_id"], token }

        return res.status(200).send({ status: true, message: "User login successfull", data: obj })

    }
    catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}

module.exports = { createUser, userLogin }