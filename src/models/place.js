const { model, Schema, Types } = require("mongoose");

const schema = new Schema({
  name: {
    type: String,
    required: true
  },

  phoneNumber:{
    type: String,
    required: true
  },

  address:{
    type: String,
    required: true,
  },

  placeType:{
    type: String,
    default: "Приватний"
  },

  canAffordCount:{
    type: Number,
    required:true
  },

  refugeesCount:{
    type: Number,
    required: true
  }
  
});

module.exports = model("Place", schema);