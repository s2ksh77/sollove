import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const handleOpen = () => {
  console.log(`Database Connected  :: ✅ ${process.env.MONGO_URL}`);
};
const handleError = (error) => {
  console.log(error);
};

const db = mongoose.connection;

db.once("open", handleOpen);
db.on("error", handleError);
