const { NotFoundError } = require("../errors");
const Property = require("../models/Property");
const { StatusCodes } = require("http-status-codes");

const cloudinary = require("cloudinary").v2;

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const getSingleProperty = async (req, res) => {
  const { id } = req.params;

  const property = await Property.findById(id);

  if (!property) {
    throw new NotFoundError(`No property found matching the id:${id}`);
  }

  res.status(StatusCodes.OK).json(property);
};

const getAllProperties = async (req, res) => {
  const {featured, location, search, sort,  field , numericFilters} = req.query;
  

  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }

  if (location) {
    queryObject.location = location;
  }

  if (search) {
    queryObject.name = { $regex: search, $options: "i" };
  }

  if (numericFilters) {
    console.log(numericFilters)
    const opertorMap = {
      ">": "$gt",
      ">=": "$gte",
      "=": "$eq",
      "<": "$lt",
      "&lt;":"$lt",
      "<=": "$lte",
      "&lt;=":"$lte",
    };
    const regEx = /\b(<|>|>=|=|<|<=|&lt;|&lt;=)\b/g;

    let filters = numericFilters.replace(
      regEx,
      (match) => `-${opertorMap[match]}-`
    );
    console.log(filters)
    const options = ["price", "area"];
    filters = filters.split(",").forEach((item) => {
      const [field, operator, value] = item.split("-");
      if (options.includes(field)) {
        console.log(field)
        queryObject[field] = { [operator]: Number(value) };
      }
    });
  }

  let result = Property.find(queryObject);

  if (sort) {
    const sortArray = sort.split(",").join(" ");
    result = result.sort(sortArray);
  } else {
    result = result.sort("createdAt");
  }

  const properties = await result;

  res.status(StatusCodes.OK).json({properties , nbHits: properties.length});
};

const createProperty = async (req, res) => {
  const { title, description, price, location, area, imageUrls } = req.body;

  const uploadImages = imageUrls.map((image, index) => {
    const responseImage =  cloudinary.uploader.upload(image, {
      folder: "TechnicianShop",
      public_id: `${image}-${title}-${index}`,
    });
    return responseImage.secure_url
  });

  const responseImages = await Promise.all(uploadImages);


  const property = await Property.create({
    title,
    description,
    price,
    location,area,
    imageUrls: responseImages
  })



  res.status(StatusCodes.CREATED).json({success:true})


};

const deleteProperty=async(req, res)=>{

  const {id } = req.params

  const property = await Property.findById(id)

  
  if (!property) {
    throw new NotFoundError(`No property found matching the id:${id}`);
  }

  await property.deleteOne()

  res.status(StatusCodes.ACCEPTED).json({success:true})

}

module.exports = { getAllProperties, getSingleProperty, deleteProperty,createProperty };
