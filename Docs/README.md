#  Sleeper Bus Ticket Booking System  
Ahmedabad → Mumbai  

AI/ML Software Engineer Assignment

---

##  Project Overview
This project is a **web-based Sleeper Bus Ticket Booking System** for a sleeper bus operating between **Ahmedabad and Mumbai** with multiple intermediate stations.

The system allows users to:
- View sleeper seat availability
- Book one or more seats
- Select meals during checkout
- Cancel bookings
- View booking history

A **mock AI/ML-based booking confirmation prediction** feature is included to estimate booking success probability (percentage-wise).

---

##  Core Features

1. **Seat Availability Display**
   - Displays all sleeper seats

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

##  Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **ODM:** Mongoose
- **Environment Management:** dotenv
- **Logging:** Morgan
- **CORS:** Enabled

---

## 🎨 UI/UX Design (Prototype)

The booking flow UI prototype demonstrates the complete user journey including seat selection, meal booking, passenger details, and booking confirmation with AI-based prediction.

Figma Prototype Link:  
https://www.figma.com/design/ruUOl8ZtVCWCVIlmZ0xfbW/Sleeper-Bus-Ticket-Booking?node-id=0-1&p=f

> The UI design was adapted from a Figma community template and customized for this Sleeper Bus Booking System.

---

## 🧪 Test Cases

### ✅ Functional Test Cases

| Test Case | Expected Result |
|-----------|----------------|
| Get All Seats API | Returns list of all seats sorted by seat number |
| Get Available Seats API | Returns seats where isAvailable = true |
| Get Meals API | Returns all meal options |
| Get Stations API | Returns stations sorted by distance |
| Create Booking | Booking created, seats marked unavailable, probability returned |
| Cancel Booking | Booking status set to cancelled and seats freed |
| Booking History | Returns booking history sorted by date |

---

### ⚠️ Edge Case Test Cases

| Test Case | Expected Result |
|-----------|----------------|
| Missing Required Fields | 400 – "All required fields must be provided" |
| Invalid Phone Number | 400 – "Invalid phone number" |
| Seat Not Found | 404 – "Seat not found" |
| Seat Already Booked | 400 – "Seat already booked" |
| Cancel Non-existent Booking | 404 – "Reservation not found" |
| Cancel Already Cancelled | 400 – "Reservation already cancelled" |
| Invalid History Phone | 400 – "Invalid phone number" |
| Server Error | 500 – Appropriate error message |

---


##  Project Structure

```text
SLEEPER-BUS-BOOKING/
│
├── Docs/
│   ├── API_DOCUMENTATION.md
│   ├── PREDICTION_APPROACH.md
│   └── README.md
│
├── ML/
│   └── confirmationPrediction.js
│
├── sleeper-bus-booking/
│   ├── api/
│   │   ├── booking.api.js
│   │   ├── meal.api.js
│   │   ├── seat.api.js
│   │   └── station.api.js
│   │
│   ├── config/
│   │   ├── dateUtils.js
│   │   ├── db.js
│   │   └── seed.js
│   │
│   ├── handlers/
│   │   ├── booking.handler.js
│   │   ├── meal.handler.js
│   │   ├── seat.handler.js
│   │   └── station.handler.js
│   │
│   ├── models/
│   │   ├── Booking.js
│   │   ├── Bus.js
│   │   ├── Meal.js
│   │   ├── Seat.js
│   │   └── Station.js
│   │
│   ├── node_modules/
│   ├── .env
│   ├── .env.example
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
│   └── server.js

---

##  Database Seeding (`seed.js`)

The file `config/seed.js` is used to **populate the database with initial data**.  
 **You must run `seed.js` before starting the server for the first time.**


---

## ▶ Project Setup

### 1️ Clone the Repository
```bash
git clone <your-github-repo-url>
cd sleeper-bus-booking

##  Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```env
MONGO_DB_URL=mongodb://127.0.0.1:27017/bus_booking
PORT=
