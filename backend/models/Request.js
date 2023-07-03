const mongoose = require("mongoose");
const { NotFoundError } = require("../errors");

const Schema = mongoose.Schema;

const RequestSchema = new Schema(
  {
    customer: {
      type: Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    property: {
      type: Schema.Types.ObjectId,
      ref: "Property",
      required: true,
    },
    message: {
      type: String,
      default: "No Message",
    },
  },
  { timestamps: true }
);

const Request = mongoose.model("Request", RequestSchema);

module.exports = Request;
