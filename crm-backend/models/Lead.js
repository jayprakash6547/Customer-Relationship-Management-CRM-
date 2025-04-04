const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  status: { type: String, default: "new" },
  response: String,
  updatedBy: String,
  updatedAt: Date,
});

module.exports = mongoose.model("Lead", leadSchema);
