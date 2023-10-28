const express = require("express");
const app = express();
const PORT = 8080;
const messagesRoute = require("./routes/messages");
const mongoose = require("mongoose");

app.use(express.json());

app.use("/messages", messagesRoute);

const uri =
  "mongodb+srv://modev:GfPft4ysrXoLTQvg@cluster0.cbmuuwx.mongodb.net/test";

const database = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  // GfPft4ysrXoLTQvg
  try {
    mongoose.connect(uri, connectionParams);
    console.log("database connected");
  } catch (e) {
    console.log("error connecting to database", e);
  }
};
// mongoose.on("connect",()=>{
//   console.log("connected")
// })
app.listen(PORT, () => {
  database();
  console.log(`server is running `);
});
