import mongoose from "mongoose";

const CharitySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 60,
    },
    desc: {
      type: String,
      required: true,
      maxlength: 2500,
    },
    img: {
      type: String,
      required: true,
    },
    amtreq: {
      type: Number,
      required: true,
    },
    recamt: {
      type: Number,
      default: 0,
    },
    type: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Charity ||
  mongoose.model("Charity", CharitySchema);
