const { model, Schema, Types } = require("mongoose");

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  passportId: {
    type: String,
    required: true,
  },
  car: {
    model: {
      type: String,
    },
    number: {
      type: String,
    },
  },
  stayAdress: {
    type: String,
    required: true,
  },
  stayNumber: {
    type: String,
    required: true,
  },
});

module.exports = model("Refugee", schema);
