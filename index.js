const express = require("express");
const app = express();
const PORT = 8080;
app.use(express.json());

const messagesRoute = require("./routes/messages");
app.use("/messages", messagesRoute);

app.listen(PORT, () => {
  console.log(`server is running on : http://localhost:${PORT}`);
});
