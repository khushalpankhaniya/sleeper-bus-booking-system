# 🚌 Sleeper Bus Ticket Booking System  
Ahmedabad → Mumbai  

AI/ML Software Engineer Assignment

---

## 📌 Project Overview
This project is a **web-based Sleeper Bus Ticket Booking System** for a sleeper bus operating between **Ahmedabad and Mumbai** with multiple intermediate stations.

The system allows users to:
- View sleeper seat availability
- Book one or more seats
- Select meals during checkout
- Cancel bookings
- View booking history

A **mock AI/ML-based booking confirmation prediction** feature is included to estimate booking success probability (percentage-wise).

---

## ⚙️ System Assumptions
- Only **one sleeper bus** exists in the system
- The bus has **multiple intermediate stations**
- Payment gateway integration is **not required**
- AI/ML prediction is **simulated (mock logic)**

---

## 🚀 Core Features

1. **Seat Availability Display**
   - Displays all sleeper seats
   - Clearly distinguishes available and booked seats

2. **Seat Selection & Booking**
   - Users can select one or more seats
   - Prevents booking already reserved seats

3. **Passenger Details Collection**
   - Passenger name, phone number, journey date
   - Input validation applied

4. **Meal Booking During Checkout**
   - Optional meal selection
   - Veg, Non-Veg, Jain, and Kids meal options available

5. **Booking Cancellation**
   - Cancel an existing booking
   - Seats become available again

6. **Booking History**
   - View past bookings using phone number

7. **Mock Booking Prediction**
   - Predicts booking confirmation probability (%)

---

## 🧩 Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **ODM:** Mongoose
- **Environment Management:** dotenv
- **Logging:** Morgan
- **CORS:** Enabled

---

## 📁 Project Structure

sleeper-bus-booking/
│
├── api/
│ ├── booking.api.js
│ ├── meal.api.js
│ ├── seat.api.js
│ └── station.api.js
│
├── config/
│ ├── db.js
│ └── seed.js
│
├── handlers/
│ ├── booking.handler.js
│ ├── meal.handler.js
│ ├── seat.handler.js
│ └── station.handler.js
│
├── models/
│ ├── Booking.js
│ ├── Bus.js
│ ├── Meal.js
│ ├── Seat.js
│ └── Station.js
│
├── node_modules/
├── .env
├── .env.example
├── server.js
└── package.json

## 🌱 Database Seeding (`seed.js`)

The file `config/seed.js` is used to **populate the database with initial data**.  
This step is **mandatory** for the application to work correctly, as the system depends on preloaded data.

⚠️ **You must run `seed.js` before starting the server for the first time.**

---

### 📦 Seeded Data Includes

- **One Sleeper Bus**
- **30 Sleeper Seats**
  - Upper and Lower berths
- **Route Stations**
  - Ahmedabad  
  - Nadiad  
  - Vadodara  
  - Bharuch  
  - Surat  
  - Mumbai
- **Predefined Meal Options**
  - Veg, Non-Veg, Jain, Kids meals

---

### ❓ Why `seed.js` is Important

- Eliminates manual data entry
- Provides consistent and reliable test data
- Makes project setup easier for reviewers
- Ensures the system is usable immediately after setup

---

## ▶️ Project Setup

### 1️⃣ Clone the Repository
```bash
git clone <your-github-repo-url>
cd sleeper-bus-booking
