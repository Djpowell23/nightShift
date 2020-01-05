const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true },
  username: { type: String, required: true },
  class: { type: String, required: true },
  dateJoined: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
