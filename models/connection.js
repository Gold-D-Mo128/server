import mongoose from "mongoose";
const uri = "mongodb://127.0.0.1:27017/sym";
// const uri =
//   "mongodb+srv://modev:5QJUttD37JThh5UL@sym.pgi9awb.mongodb.net/sym?retryWrites=true&w=majority";

export const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected");
  } catch (e) {
    console.log("Error In Database Connection: ", e);
  }
};
mongoose.connection.on("connected", () => console.log("connection stable"));
