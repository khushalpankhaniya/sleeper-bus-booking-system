import mongoose from "mongoose";

const stationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    arrivalTime: {
      type: String,
      default: null
    },
    departureTime: {
      type: String,
      default: null
    },
    distance: {
      type: Number,
      required: true
    },
    bus: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Bus",
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.models.Station ||
  mongoose.model("Station", stationSchema);
