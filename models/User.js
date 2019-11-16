const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  name: String,
  points: Number,
  plasticCount: Number,
  glassCount: Number,
  metalCount: Number,
  totalCount: Number
});

mongoose.model("users", userSchema);
