import { connectDB } from "./connection.js";
import express from "express";
import { messagesRouter } from "./routes/messagesRoutes.js";
import { rateLimit } from 'express-rate-limit'
import cors from "cors";

const app = express();
const PORT = 8000;

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Use an external store for consistency across multiple server instances.
})


app.use(limiter)
app.use(cors());
app.use(express.json());
app.use("/messages", messagesRouter);

app.listen(PORT, () => {
  // database();
  connectDB();
  console.log(`server is running `);
});
