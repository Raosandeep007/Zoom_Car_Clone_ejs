const mongoose = require("mongoose");

module.exports = async () => {
  return mongoose.connect(
    "mongodb+srv://Raosandeep:mongoatlas123@cluster0.8i6ji.mongodb.net/zoomcar"
  );
};
