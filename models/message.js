const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const messageSchema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  message: {
    type: String,
    required: true,
    unique: false,
  },
  dateCreated: {
    type: String,
    required: true,
    unique: false,
  },
  color: {
    type: String,
    required: true,
    unique: false,
  },
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
