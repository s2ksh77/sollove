import mongoose from "mongoose";

const FileSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: "File URL is required",
  },
  title: {
    type: String,
    required: "Title is required",
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const model = mongoose.model("File", FileSchema);

export default model;
