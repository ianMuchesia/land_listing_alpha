const { NotFoundError } = require("../errors");
const Property = require("../models/Property");
const { StatusCodes } = require("http-status-codes");

const getSingleProperty = async (req, res) => {
  const { id } = req.params;

  const property = await Property.findById(id);

  if (!property) {
    throw new NotFoundError(`No property found matching the id:${id}`);
  }

  res.status(StatusCodes).json(property);
};

const getAllProducts = async (req, res) => {
  const { location, search, sort } = req.query;

  const queryObject = {};

  if (location) {
    queryObject.location = location;
  }

  if (search) {
    queryObject.name = { $regex: search, $options: "i" };
  }

  let result = Property.find(queryObject)

  if(sort){
    const sortArray = sort.split(",").join(" ");
    result = result.sort(sortArray);
  }else{
    result = result.sort({createdAt:-1});
  }
  
const properties = await result;

res.status(StatusCodes.OK).json(properties)
};



module.exports = {getAllProducts, getSingleProperty}