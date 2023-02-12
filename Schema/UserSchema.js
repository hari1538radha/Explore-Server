import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userFirstname: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 30,
    },
    userLastname: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 30,
    },
    userEmail: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 60,
      unique: true,
    },
    userPassword: {
      type: String,
      required: true,
      min: 6,
      max: 100,
    },
    userPhoneNumber: {
      type: Number,
      required: true,
      minLength: 10,
    },
  },
  { timestamps: true }
);

export const signupModel = new mongoose.model("signupDatas", userSchema);


