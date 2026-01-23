import Seat from "../models/Seat.js";

export const fetchSeats = async (req, res) => {
  try {
    const seats = await Seat.find().sort({ seatNo: 1 });
    res.json(seats);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const fetchAvailableSeats = async (req, res) => {
  try {
    const seats = await Seat.find({ isAvailable: true }).sort({ seatNo: 1 });
    res.json(seats);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

