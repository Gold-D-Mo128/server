const express = require("express");
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
  const { id } = req.params;
  const { message } = req.body;

  if (!message) {
    res.status(418).send({ message: "no message" });
  }

  res.send({
    id: `is this your id? ${id}`,
    message: `is this your message? ${message}`,
  });
});

module.exports = router;
