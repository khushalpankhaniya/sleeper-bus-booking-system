import mongoose from "mongoose";

const seatSchema = new mongoose.Schema(
  {
    seatNo: {
      type: Number,
      required: true
    },
    type: {
      type: String,
      enum: ["upper", "lower"],
      required: true
    },
    bus: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Bus",
      required: true
    },
    
    isAvailable: {               
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

export default mongoose.models.Seat ||
  mongoose.model("Seat", seatSchema);
