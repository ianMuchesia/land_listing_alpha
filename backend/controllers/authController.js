const { StatusCodes } = require("http-status-codes")
const { BadRequestError } = require("../errors")
const User = require("../models/User")
const { createToken, attachCookiesToResponse } = require("../utils")
const passport = require('passport')


const register = async(req, res)=>{
    const {name ,email , password} = req.body


    if(!name|| !email || !password){
        throw new BadRequestError("Please Provide All Values")
    }

    const EmailExists = await User.findOne({email})

    if(EmailExists){
        throw new BadRequestError("Email Provided Already Exists")
    }
    console.log("hey")
    const user = await User.create(req.body)
    
    const tokenUser = createToken(user)

    attachCookiesToResponse({res, user:tokenUser})
    
    res.status(StatusCodes.CREATED).json({user:tokenUser})


}

const GoogleSignIn = async(req, res)=>{
        console.log(req.user)
}

const login = async(req, res)=>{
   const { email , password} = req.body

   if(!email|| !password){
    throw new BadRequestError("Please Provide All Values")
   }

   const user = await User.findOne({email})

   if(!user){
    throw new BadRequestError(`No account associated with ${email}`)
   }

 
   const isPasswordCorrect = await user.comparePassword(password)

   if(!isPasswordCorrect){
    throw new BadRequestError(`Your Password and Email did not match, please check your details and try again`)
   }
   
   const tokenUser = createToken(user)

   attachCookiesToResponse({res, user:tokenUser})

   res.status(StatusCodes.ACCEPTED).json({user:tokenUser})
}


const logout = async(req, res)=>{
    res.cookie("token", "logout", {
        httpOnly: true,
        expires: new Date(Date.now() + 1000), //expiresin one second
      });
      res.status(StatusCodes.OK).json({ success: true, msg: "user logged out!" });
}


const showUser = async(req, res)=>{
    res.status(StatusCodes.OK).json({success:true, user:req.user})
}


module.exports =  {
    register,
    login,
    logout,
    showUser,
    GoogleSignIn
}