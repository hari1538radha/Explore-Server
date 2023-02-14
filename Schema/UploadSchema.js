import mongoose from "mongoose";
// upload Schema
const uploadSchema = new mongoose.Schema(
  {
    placeName: {
      type: String,
      required: true,
    },
    placeTag: {
      type: String,
      requried: true,
    },
    placeDescription: {
      type: String,
      requried: true,
    },
    placeImage: {
      type: String,
      required: true,
    },
    cardId: {
      type: String,
    },
  },
  { timestamps: true }
);
export const uploadModel = new mongoose.model("upload", uploadSchema);
