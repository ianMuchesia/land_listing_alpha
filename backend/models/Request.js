const mongoose = require("mongoose");
const { NotFoundError } = require("../errors");

const Schema = mongoose.Schema;

const RequestSchema = new Schema(
  
    {
        customer:{
            type: Schema.Types.ObjectId,
            ref: "Customer",
            required: true, 
        },
        property: {
          type: Schema.Types.ObjectId,
          ref: "Property",
          required: true,
        },
        requestCount: {
          type: Number,
          default: 0,
        },
      },
  {timestamps:true}
  );



RequestSchema.methods.incrementRequestCount = async function (propertyID, customer){
    if(this.property.toString()  === propertyID && this.customer.toString() === customer){
        this.requestCount ++
    }
}

const Request = mongoose.model("Request", RequestSchema);




module.exports = Request;