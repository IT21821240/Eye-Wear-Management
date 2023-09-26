const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  itemDescription: {
    type: String,
  },
  itemName: {
    type: String,
    required: true,
  },
  itemType: {
    type: String,
    enum: ["Customizable", "Permanent"],
    required: true,
  },
  features: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Feature",
    },
  ],
  itemPrice: {
    type: double,
    required: true,
  },
  availableStock: {
    type: number,
    required: true,
  },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
