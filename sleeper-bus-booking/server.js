import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/db.js";
import seatApi from "./api/seat.api.js";
import mealApi from "./api/meal.api.js";
import stationApi from "./api/station.api.js";
import bookingApi from "./api/booking.api.js";


dotenv.config({debug: true});

const app = express();


/* ===== Middleware ===== */
app.use(cors());
app.use(morgan("dev"));             
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ===== DB Connection ===== */
connectDB();

/* ===== Check ===== */
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Sleeper Bus Booking API is running"
  });
});

/* ===== Routes ===== */
app.use("/api/seats", seatApi);
app.use("/api/meals", mealApi);
app.use("/api/stations", stationApi);
app.use("/api/bookings", bookingApi);

/* ===== Start Server ===== */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
