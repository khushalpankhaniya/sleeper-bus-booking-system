import Booking from "../models/Booking.js";
import Seat from "../models/Seat.js";
import Station from "../models/Station.js";
import { predictConfirmationProbability } from "../../ML/confirmationPrediction.js";
import { calculateDaysBeforeJourney } from "../config/dateUtils.js";


/* ================= CREATE BOOKING ================= */
export const createReservation = async (req, res) => {
  try {
    const { fromStation, toStation, journeyDate, seatIds, passengerName, passengerPhone, mealId } = req.body;

    /* ------validation -------- */
    if (
      !fromStation || !toStation || !journeyDate || !seatIds || !Array.isArray(seatIds) || seatIds.length === 0 || !passengerName || !passengerPhon) {
      return res.status(400).json({ message: "All required fields must be provided" });
    }

    if (passengerPhone.length !== 10) {
      return res.status(400).json({ message: "Invalid phone number" });
    }

    /* -------- Fetch Seats -------- */
    const seats = await Seat.find({ _id: { $in: seatIds } });

    if (seats.length !== seatIds.length) {
      return res.status(404).json({ message: "Seat not found" });
    }

    const unavailableSeat = seats.find(seat => !seat.isAvailable);
    if (unavailableSeat) {
      return res.status(400).json({ message: `Seat ${unavailableSeat.seatNo} is already booked` });
    }

    /* -------- ML  Calculation -------- */
    const daysBeforeJourney = calculateDaysBeforeJourney(new Date(), journeyDate);

    const confirmationProbability = predictConfirmationProbability({
      daysBeforeJourney, seatsBooked: seatIds.length, hasMeal: !!mealId, isWeekend: [0, 6].includes(new Date(journeyDate).getDay())
    });

    /* -------- Create Booking (STORE prediction) -------- */
    const booking = await Booking.create({
      fromStation,
      toStation,
      journeyDate,
      seatIds,
      passengerName,
      passengerPhone,
      mealId: mealId || null,
      predictConfirmation: confirmationProbability
    });

    /* -------- Update Seat Availability -------- */
    await Seat.updateMany(
      { _id: { $in: seatIds } },
      { isAvailable: false }
    );

    /* -------- Populate Booking Details -------- */
    const bookingDetails = await Booking.findById(booking._id)
      .populate("seatIds", "seatNo type")
      .populate("mealId", "name type price");

    /* -------- Response -------- */
    return res.status(201).json({
      message: "Booking created successfully",
      booking: {
        bookingId: bookingDetails._id,
        fromStation: bookingDetails.fromStation,
        toStation: bookingDetails.toStation,
        journeyDate: bookingDetails.journeyDate,
        passengerName: bookingDetails.passengerName,
        passengerPhone: bookingDetails.passengerPhone,
        seats: bookingDetails.seatIds,
        meal: bookingDetails.mealId,
        status: bookingDetails.status,
        confirmationProbability: `${bookingDetails.predictConfirmation}%`,
        createdAt: bookingDetails.createdAt
      }
    });

  } catch (err) {
    console.error("createReservation error:", err);
    return res.status(500).json({
      message: "Unable to create reservation"
    });
  }
};



/* ================= CANCEL BOOKING ================= */
export const cancelReservation = async (req, res) => {
  try {
    const { bookingId } = req.params;

    if (!bookingId) {
      return res.status(400).json({
        message: "bookingId is required"
      });
    }

    const booking = await Booking.findOne({ _id: bookingId });

    if (!booking) {
      return res.status(404).json({
        message: "Reservation not found"
      });
    }

    if (booking.status === "cancelled") {
      return res.status(400).json({
        message: "Reservation already cancelled"
      });
    }

    /* -------- Free Seats -------- */
    await Seat.updateMany(
      { _id: { $in: booking.seatIds } },
      { isAvailable: true }
    );

    booking.status = "cancelled";
    await booking.save();

    return res.json({
      message: "Reservation cancelled successfully"
    });
  } catch (err) {
    console.error("cancelReservation error:", err);
    return res.status(500).json({
      message: "Unable to cancel reservation"
    });
  }
};

/* ================= BOOKING HISTORY ================= */
export const reservationHistory = async (req, res) => {
  try {
    const { phone } = req.params;

    if (!phone || phone.length !== 10) {
      return res.status(400).json({
        message: "Invalid phone number"
      });
    }

    const history = await Booking.find({
      passengerPhone: phone
    })
      .sort({ createdAt: -1 })
      .populate("seatIds")
      .populate("mealId");

    return res.json(history);
  } catch (err) {
    console.error("reservationHistory error:", err);
    return res.status(500).json({
      message: "Unable to fetch reservation history"
    });
  }
};
