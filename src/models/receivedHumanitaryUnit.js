const { model, Schema, Types } = require("mongoose");

const schema = new Schema({
  date: {
    type: Date,
    required: true,
  },

  receiverName: {
    type: Number,
    required: true,
  },

  receiverPhoneNumber: {
    type: String,
    required: true,
  },

  humanitaryUnits: {
    type: Array,
    required: true,
  },
});

module.exports = model("ReceivedHumanitaryUnit", schema);
