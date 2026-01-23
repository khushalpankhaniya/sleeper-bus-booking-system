import mongoose from "mongoose";

const busSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    route: {
      type: String,
      required: true
    },
    totalSeats: {
      type: Number,
      required: true
    },
    layout: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Bus", busSchema);
