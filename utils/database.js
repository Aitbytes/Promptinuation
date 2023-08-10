import mongoose from "mongoose";

let isConnected = false;

export async function connectToDB() {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("mongo db is connected");
    return;
  } else
    try {
      await mongoose.connect(process.env.MONGOBD_URI, {
        dbName: "PromptinuationDB",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      isConnected = true;
      console.log("mongoDB connected");
    } catch (error) {
      console.log(error);
    }
}
