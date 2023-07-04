const Customer = require("../models/Customer");
const {StatusCodes} = require("http-status-codes");
const { communication } = require("../utils");
const { BadRequestError } = require("../errors");
const Request = require("../models/Request");

const phoneLink = process.env.MY_PHONE
const phoneCall = async(req, res)=>{
    const {phone , name , propertyID, message}= req.body;
 
    if(!name|| !phone ||!propertyID  ){
        throw new BadRequestError("please provide all values")
    }
   let saveToDatabase =await communication(name , phone , propertyID, message)
   
   console.log(saveToDatabase)
   if(!saveToDatabase){
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "something wrong happened" });
   }


    res.status(StatusCodes.CREATED).json({link:`tel:+${phoneLink}` , success:true})
    
}

const sms = async(req, res)=>{
    const {phone , name , propertyID, message}= req.body;
 
    if(!name|| !phone ||!propertyID ||!message ){
        throw new BadRequestError("please provide all values")
    }
   let saveToDatabase =await communication(name , phone , propertyID, message)
   
   console.log(saveToDatabase)
   if(!saveToDatabase){
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "something wrong happened" });
   }


    res.status(StatusCodes.CREATED).json({link:`sms:+${phoneLink}` , success:true})
    
}

const whatsapp = async(req, res)=>{
    const {phone , name , propertyID, message}= req.body;
 
    if(!name|| !phone ||!propertyID  ){
        throw new BadRequestError("please provide all values")
    }
   let saveToDatabase =await communication(name , phone , propertyID, message)
   
   console.log(saveToDatabase)
   if(!saveToDatabase){
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "something wrong happened" });
   }


    res.status(StatusCodes.CREATED).json({link:`https://web.whatsapp.com/send?phone=+${phoneLink}` , success:true})
    
}


const getPhones=async(req, res)=>{
    const phones = await Request.find({})
    res.json(phones)
}


module.exports = { whatsapp, phoneCall , sms, getPhones}








