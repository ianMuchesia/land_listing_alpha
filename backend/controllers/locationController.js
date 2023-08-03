const { StatusCodes } = require("http-status-codes");
const { NotFoundError, BadRequestError } = require("../errors");
const Location = require('../models/Location')



const createLocation = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    throw new BadRequestError("Please Provide the Location");
  }

 const newLocation = await Location.create(req.body);

  res.status(StatusCodes.CREATED).json({ success: true, location:newLocation });
};

module.exports = { createLocation };
