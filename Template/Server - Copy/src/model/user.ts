const mongoose1 = require("mongoose");
// const Schema= mongoose.Schema;

const UserSchema = new mongoose1.Schema(
  {
    name: {
      type: String,
    },
    username: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    register_date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
); 

const User = mongoose1.model("user", UserSchema);
module.exports = User;
