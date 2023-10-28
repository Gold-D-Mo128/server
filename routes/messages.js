const express = require("express");
const Message = require("../models/message");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send({
    status: "success",
    data: {
      message: "congrats, this is your first GET api",
    },
  });
});

router.post("/", async (req, res) => {
  try {
    console.log("body: ", req.body);
    const body = req.body;

    const newMessage = new Message({
      id: body.id,
      message: body.message,
      dateCreated: body.date,
      color: body.color,
    });

    await Message.create(newMessage);
    res.send("Message Sent Successfully! ", newMessage);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
