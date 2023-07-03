const { default: mongoose } = require("mongoose");
const Customer = require("../models/Customer");
const Request = require("../models/Request");
const ObjectId = mongoose.Types.ObjectId;
const communication = async (name, phone, propertyID) => {
  const customerExist = await Customer.findOne({ phone });

  if (customerExist) {
    requestExist = await Request.findOne({
      property: propertyID,
      customer: customerExist._id,
    });
    if (requestExist) {
      requestExist.incrementRequestCount(propertyID, customerExist._id);
      await requestExist.save();
    }
   
    return true;
  } else {
    const customer = await Customer.create({ name, phone });

    await Request.create({
      customer: customer._id,
      property: propertyID,
      requestCount: 1,
    });

    return true;
  }
};

module.exports = communication;
