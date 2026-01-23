import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    fromStation: {
      type: String,
      required: true
    },

    toStation: {
      type: String,
      required: true
    },

    journeyDate: {
      type: String, // YYYY-MM-DD
      required: true
    },

    seatIds: {
      type: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Seat"
      }],
      required: true,
    },    

    passengerName: {
      type: String,
      required: true
    },

    passengerPhone: {
      type: String,
      required: true
    },

    mealId: {                              
      type: mongoose.Schema.Types.ObjectId,
      ref: "Meal",
      default: null
    },

    status: {
      type: String,
      enum: ["booked", "cancelled"],
      default: "booked"
    },
  
    predictConfirmation: {
       type: String,
       required: true,
    }

  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
