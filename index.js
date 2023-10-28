import { connectDB } from "./models/connection.js";
import express from "express";
import { messagesRouter } from "./routes/messagesRoutes.js";
import cors from "cors";

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());
app.use("/messages", messagesRouter);

app.listen(PORT, () => {
  // database();
  connectDB();
  console.log(`server is running `);
});
