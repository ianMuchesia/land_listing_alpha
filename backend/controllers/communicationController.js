const Customer = require("../models/Customer");
const { StatusCodes } = require("http-status-codes");
const { communication } = require("../utils");
const { BadRequestError, NotFoundError } = require("../errors");
const Request = require("../models/Request");
const Property = require("../models/Property");

const phoneLink = process.env.MY_PHONE;
const phoneCall = async (req, res) => {
  const { phone, name, property, message } = req.body;

  if (!name || !phone || !property) {
    throw new BadRequestError("please provide all values");
  }

  const propertyID = await Property.findById(property);

 
  if (!propertyID) {
    throw new NotFoundError("Requested resource seems to be missing");
  }

  await Request.create({
    name,
    phone,
    property: propertyID._id,
    requestType: "phone",
  });

  res
    .status(StatusCodes.CREATED)
    .json({ link: `tel:+${phoneLink}`, success: true });
};

const sms = async (req, res) => {
  const { phone, name, property, message } = req.body;

  if (!name || !phone || !property || !message) {
    throw new BadRequestError("please provide all values");
  }

  const propertyID = await Property.findById(property);

  if (!propertyID) {
    throw new NotFoundError("Requested resource seems to be missing");
  }

  await Request.create({
    name,
    phone,
    property: propertyID._id,
    requestType: "sms",
    message,
  });

  res
    .status(StatusCodes.CREATED)
    .json({ link: `sms:+${phoneLink}`, success: true });
};

const whatsapp = async (req, res) => {
  const { phone, name, property, message } = req.body;

  if (!name || !phone || !property || !message) {
    throw new BadRequestError("please provide all values");
  }

  const propertyID = await Property.findById(property);

  if (!propertyID) {
    throw new NotFoundError("Requested resource seems to be missing");
  }

  await Request.create({
    name,
    phone,
    property: propertyID._id,
    requestType: "whatsapp",
    message,
  });

  res
    .status(StatusCodes.CREATED)
    .json({
      link: `https://web.whatsapp.com/send?phone=+${phoneLink}`,
      success: true,
    });
};

const getAllRequests = async(req, res)=>{
  const { property , phone , search , sort, requestType } =req.query

  const queryObject = {}

  if(property){
    queryObject.property = property
  } 


  if(requestType){
    queryObject.requestType = [requestType]
  }

  if(phone){
    queryObject.phone = phone
  }

  

  let result = Request.find(queryObject);

  const totalItems = await Request.find(queryObject).countDocuments();

  if (sort) {
    const sortArray = sort.split(",").join(" ");
    result = result.sort(sortArray);
  } else {
    result = result.sort("createdAt");
  }


  const requests = await result;

  res.status(StatusCodes.OK).json({
    requests,
    nbHits: requests.length,
    totalProperties: totalItems,
  });

}

module.exports = { whatsapp, phoneCall, sms, getAllRequests };
