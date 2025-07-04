import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI || 'mongodb://mongo:27017/db';

export default function connectDb() {
  return mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));
}
