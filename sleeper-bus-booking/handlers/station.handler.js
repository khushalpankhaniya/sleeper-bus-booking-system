import Station from "../models/Station.js";

export const fetchStations = async (req, res) => {
  try {
    const stations = await Station.find().sort({ distance: 1 });
    res.json(stations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
