const userModel = require("../model/userModel")
const autoPass = require("../middleware/autopassword")
const nodemailer = require("nodemailer")
const transactionModel = require("../model/transitionModel")
const registration = async(req , res)=>{
    const{name , email , phone , address , city} = req.body;
    const password = autoPass()
    try {
        const data = await userModel.create({
            name : name,
            email : email,
            phone : phone,
            address : address,
            city : city,
            password : password
        })
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: "nehapanbude123@gmail.com",
              pass: "ndcw mxlo soml erwp", 
            },
          });
          let maildetails = {
            from : "nehapanbude123@gmail.com",
            to : email,
            subject : "E-Banking registration",
            text : `Dear ${name} Your account successfully created \n Your Password is ${password}`
          }
          transporter.sendMail(maildetails )
          console.log("mail send successfully")
      
       res.status(200).send(data)
        
    } catch (error) {
        res.status(400).send(error)
    }
}

const LoginData = async(req , res)=>{
    const{email , password} = req.body;
    let data = await userModel.findOne({email : email})
    if(!data)
    {
       return res.status(400).send("invalid email")
    }
    if(data.password != password)
    {
       return res.status(400).send("invalid password")
    }
    res.status(200).send(data)
}
const DepositData = async(req ,res)=>{
    const{amount , status , customerid} = req.body;
    const data = await transactionModel.create({
      amount : amount,
      status : status,
      customerid : customerid
    })
  res.status(200).send(data)
  }
  const balanceDisplay = async(req , res)=>{
    const {userid} = req.query
    const data = await transactionModel.find({customerid : userid})
    res.status(200).send(data)
  }

module.exports = {
    registration,
    LoginData,
    DepositData,
    balanceDisplay
}