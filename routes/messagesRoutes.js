import express from "express";
import { Message } from "../models/message.js";
export const messagesRouter = express.Router();

messagesRouter.get("/", async (req, res) => {
  const result = await Message.find();

  res.status(200).send({
    status: "success",
    message: "congrats, this is your first GET api",
    data: result,
  });
});

messagesRouter.post("/", async (req, res) => {
  try {
    const body = req.body;
    console.log("body: ", body);

    const newMessage = new Message({
      message: body.message.toString(),
      dateCreated: new Date(),
      color: body.color,
    });

    // await Message.create(newMessage);
    await newMessage.save();
    res
      .status(200)
      .send({ message: "Message Sent Successfully! ", data: newMessage });
  } catch (e) {
    console.log(e);
    next(e);
  }
});
