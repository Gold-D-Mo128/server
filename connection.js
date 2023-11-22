import mongoose from "mongoose";
// const uri =
//   "mongodb+srv://modev:UET4DHBKcJsiY2BE@sym.pgi9awb.mongodb.net/sym?retryWrites=true&w=majority";
const uri =
  "mongodb+srv://modev:qDxkbcLfticdrFAp@sym.pgi9awb.mongodb.net/?retryWrites=true&w=majority";
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
