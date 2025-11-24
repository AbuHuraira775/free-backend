const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  features: { type: [String] },
});

const Service = mongoose.model("Service", serviceSchema);
module.exports = Service;
