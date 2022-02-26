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
  from:{
    type: String,
    required: true,
  },
  passportId:{
    type: String,
    required: true
  },
  reachedBy: {
    type: String,
    required: true,
  },
  car:{
    model:{
      type: String,
    },
    number:{
      type: String
    }
  }
  
});

module.exports = model("Person", schema);