import express from "express";
import { fetchAvailableSeats, fetchSeats } from "../handlers/seat.handler.js";

const router = express.Router();

router.get("/", fetchSeats);
router.get("/available", fetchAvailableSeats);

export default router;

