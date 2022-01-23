const mongoose = require("mongoose");

const carsSchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
    car_data: { type: Object, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("cars", carsSchema); 
