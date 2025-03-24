const express = require("express")
const route = express.Router()
const userController = require("../controller/userController")


route.post("/registration" , userController.registration)
route.post("/login" , userController.LoginData)
route.post("/transaction" , userController.DepositData)
route.get("/balance" , userController.balanceDisplay)

module.exports = route