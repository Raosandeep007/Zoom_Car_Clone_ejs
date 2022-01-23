const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    full_name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema); // user => users, users => User
