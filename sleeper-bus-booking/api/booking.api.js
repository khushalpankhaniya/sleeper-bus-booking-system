import express from "express";
import {
  createReservation,
  cancelReservation,
  reservationHistory
} from "../handlers/booking.handler.js";

const router = express.Router();

/* Create booking */
router.post("/", createReservation);

/* Cancel booking */
router.delete("/:bookingId", cancelReservation);

/* Booking history by phone */
router.get("/history/:phone", reservationHistory);

export default router;
