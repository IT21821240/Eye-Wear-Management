const mongoose = require("mongoose");

const featureSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
});

const Feature = mongoose.model("Feature", featureSchema);

module.exports = Feature;
