const { default: mongoose } = require("mongoose");
const Customer = require("../models/Customer");
const Request = require("../models/Request");
const ObjectId = mongoose.Types.ObjectId;

const communication = async (name, phone, propertyID, message) => {
  let customerExist = await Customer.findOne({ phone });

  if (!customerExist) {
    customerExist = await Customer.create({ name, phone });
  }

  await Request.create({
    property: propertyID,
    customer: customerExist._id,
    message,
  });
  return true;
};

module.exports = communication;