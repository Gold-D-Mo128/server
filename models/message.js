import mongoose from "mongoose";

const Schema = mongoose.Schema;

const messageSchema = new Schema({
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

export const Message = mongoose.model("Message", messageSchema);
