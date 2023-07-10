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
  const {featured, location, search, sort,  field ,page, numericFilters} = req.query;
  

  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }

  if (location) {
    queryObject.location = location;
  }

  if (search) {
    queryObject.title = { $regex: search, $options: "i" };
  }

  if (numericFilters) {

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

    const options = ["price", "area"];
    filters = filters.split(",").forEach((item) => {
      const [field, operator, value] = item.split("-");
      if (options.includes(field)) {
      
        
        queryObject[field] = { [operator]: Number(value) };
      }
    });
  }

  let result = Property.find(queryObject);

  const totalItems = await Property.find(queryObject).countDocuments();


  if (sort) {
    const sortArray = sort.split(",").join(" ");
    result = result.sort(sortArray);
  } else {
    result = result.sort("createdAt");
  }

  

  //pagination 
  if(page){
    const pagination = Number(page);
    const limit = Number(req.query.limit) || 8;
    const skip = (pagination-1)*limit;


    result = result.skip(skip).limit(limit)

  }

  const properties = await result;

  res.status(StatusCodes.OK).json({properties, nbHits:properties.length,totalProperties: totalItems });
};



const createProperty = async (req, res) => {
  const { title, description, price, location, area, images, mainImage } = req.body;

  // const uploadImages = images.map((image, index) => {
  //   const responseImage =  cloudinary.uploader.upload(image, {
  //     folder: "TechnicianShop",
  //     public_id: `${image}-${title}-${index}`,
  //   });
  //   return responseImage.secure_url
  // });

  // const responseImages = await Promise.all(uploadImages);

  const [ responseMainImage , responseImages ] = await Promise.all([
    cloudinary.uploader.upload(mainImage,{
      folder:"land_listing",
      public_id: `${title}-mainImage`
    }),
    Promise.all(
      images.map((image, index) =>
        cloudinary.uploader.upload(image, {
          folder: "land_listing",
          public_id: `${title}-${index}`,
        })
      )
    )
    // ).then((responseImages) =>
    //   responseImages.map((responseImage) => responseImage.secure_url)
    // ),
  ])


  // const property = await Property.create({
  //   title,
  //   description,
  //   price,
  //   location,area,
  //   imageUrls: responseImages
  // })



  res.status(StatusCodes.CREATED).json({success:true, responseImages, responseMainImage})


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
