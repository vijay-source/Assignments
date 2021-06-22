import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
      maxLength: [30, "your name can't exceed 30 characters"],
    },
    userName:{
      type:String,
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: [true, "Please enter your phone number"],
      length: [13, "Please enter 10 digit mobile number"],
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      minLength: [6, "Password must be longer than 6 characters"],
    },
    avatar: {
        type: String,
    },
    role: {
      type: String,
      default: "user",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    // book: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "books",
    //   // required: true,
    // },
  },
  { collection: "users", timestamps: true }
);

export = mongoose.model("user", userSchema);
