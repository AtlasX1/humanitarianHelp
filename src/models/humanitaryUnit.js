const { model, Schema, Types } = require("mongoose");

const schema = new Schema({
  name: {
    type: String,
    required: true
  },

  count:{
    type: Number,
    required: true
  },

  measurementUnit:{
    type: String,
    required: true,
  },
  
});

module.exports = model("HumanitaryUnit", schema);