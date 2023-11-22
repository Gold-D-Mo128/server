import express from "express";
import { Message } from "../models/message.js";
import { rateLimit } from 'express-rate-limit'


export const messagesRouter = express.Router();

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Use an external store for consistency across multiple server instances.
})

messagesRouter.get("/", async (req, res) => {
  const result = await Message.find();

  res.status(200).send({
    status: "success",
    message: "congrats, this is your first GET api",
    data: result,
  });
});

messagesRouter.post("/", limiter ,async (req, res) => {
  try {
    const body = req.body;
    console.log("body: ", body);

    const newMessage = new Message({
      message: body.message.toString(),
      dateCreated: new Date(),
      color: body.color,
    });

    // await Message.create(newMessage);
    if (!body.message || !body.color) {
      res.status(500).send({ message: "fields are missing " });
    }
    await newMessage.save();
    res
      .status(200)
      .send({ message: "Message Sent Successfully! ", data: newMessage });
  } catch (e) {
    console.log(e);
    next(e);
  }
});
