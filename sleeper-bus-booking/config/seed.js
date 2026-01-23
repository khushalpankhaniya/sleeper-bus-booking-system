import connectDB from "./db.js";
import dotenv from "dotenv";
dotenv.config();

import Bus from "../models/Bus.js";
import Seat from "../models/Seat.js";
import Station from "../models/Station.js";
import Meal from "../models/Meal.js";

const seedDatabase = async () => {
  try {
    await connectDB();

    const busExists = await Bus.findOne();
    if (busExists) {
      console.log("seed already exists, skipping");
      process.exit();
    }

    /* ===== bus ===== */
    const bus = await Bus.create({
      name: "Sleeper Express",
      route: "Ahmedabad To Mumbai",
      totalSeats: 30,
      layout: "2x1 sleeper"
    });

    /* ===== seats ===== */
    const seats = [];
    for (let i = 1; i <= bus.totalSeats; i++) {
      seats.push({
        seatNo: i,
        type: i % 2 === 0 ? "upper" : "lower",
        bus: bus._id
      });
    }
    await Seat.insertMany(seats);


    /* ===== stations ===== */
    await Station.insertMany([
      {
        name: "Ahmedabad",
        departureTime: "22:00",
        distance: 0,
        bus: bus._id
      },
      {
        name: "Nadiad",
        arrivalTime: "23:15",
        departureTime: "23:30",
        distance: 60,
        bus: bus._id
      },
      {
        name: "Vadodara",
        arrivalTime: "00:30",
        departureTime: "00:45",
        distance: 110,
        bus: bus._id
      },
      {
        name: "Bharuch",
        arrivalTime: "02:00",
        departureTime: "02:15",
        distance: 160,
        bus: bus._id
      },
      {
        name: "Surat",
        arrivalTime: "03:00",
        departureTime: "03:15",
        distance: 260,
        bus: bus._id
      },
      {
        name: "Mumbai",
        arrivalTime: "07:00",
        distance: 530,
        bus: bus._id
      }
    ]);



    /* ===== meals ===== */
    await Meal.insertMany([
      {
        name: "Gujarati Kathiyawadi Thali",
        type: "veg",
        price: 170,
        description: "Rotla, Sev Tameta, Shaak, Dal, Rice, Chaas"
      },
      {
        name: "Punjabi Veg Combo",
        type: "veg",
        price: 190,
        description: "Paneer Sabzi, Butter Roti, Jeera Rice"
      },
      {
        name: "South Indian Mini Meal",
        type: "veg",
        price: 140,
        description: "Idli, Vada, Sambar, Coconut Chutney"
      },
      {
        name: "Chicken Curry Meal",
        type: "non-veg",
        price: 230,
        description: "Spicy chicken curry with steamed rice"
      },
      {
        name: "Egg Masala Meal",
        type: "non-veg",
        price: 180,
        description: "Egg masala with roti and rice"
      },
      {
        name: "Jain Special Meal",
        type: "jain",
        price: 160,
        description: "No onion, no garlic, Jain-friendly dishes"
      },
      {
        name: "Kids Meal Box",
        type: "veg",
        price: 120,
        description: "Mini roti, curd, rice, sweet"
      }
    ]);


    console.log("database seeded successfully");
    process.exit();
  } catch (error) {
    console.error("seed error:", error);
    process.exit(1);
  }
};

seedDatabase();
