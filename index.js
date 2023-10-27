const express = require("express");
const app = express();
const PORT = 8080;
const messagesRoute = require("./routes/messages");
const mongoose = require("mongoose");

app.use(express.json());

app.use("/messages", messagesRoute);

const uri =
  "mongodb+srv://modev:vFAQ493PA0exngwr@cluster0.cbmuuwx.mongodb.net/?retryWrites=true&w=majority";

const database = (module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  try {
    mongoose.connect(uri, connectionParams);
    console.log("database connecting successfully");
  } catch (e) {
    console.log("error connected to database", e);
  }
});

app.listen(PORT, () => {
  console.log(`server is running on : http://localhost:${PORT}`);

  database();
});

("vFAQ493PA0exngwr");
