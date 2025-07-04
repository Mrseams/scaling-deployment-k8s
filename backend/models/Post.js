import mongoose from "mongoose";

const postSchema = new mongoose.Schema({ title: String, content: String });

export default mongoose.model("Post", postSchema);