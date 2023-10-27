const express = require("express");
const app = express();
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`server is running on : http://localhost:${PORT}`);
});

app.use(express.json());

app.get("/firstApi", (req, res) => {
  res.status(200).send({
    status: "success",
    data: {
      message: "congrats, this is your first GET api",
    },
  });
});

app.post("/Api/:id", (req, res) => {
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
