
---

## Backend API Documentation

Base URL:
```
http://localhost:3000
```
All APIs are REST-based and return JSON responses.

---

## 1. Seat APIs

### 1.1 Get All Seats
**Endpoint**
```
GET /api/seats
```

**Description**
- Fetches all sleeper seats sorted by seat number.

**Response**
```json
[
  {
    "_id": "seatId",
    "seatNo": 1,
    "type": "lower",
    "isAvailable": true
  }
]
```

---

### 1.2 Get Available Seats
**Endpoint**
```
GET /api/seats/available
```

**Description**
- Returns only seats that are currently available for booking.

---

## 2. Meal APIs

### 2.1 Get Meal Options
**Endpoint**
```
GET /api/meals
```

**Description**
- Fetches all meal options available during checkout.

**Response**
```json
[
  {
    "_id": "mealId",
    "name": "Veg Thali",
    "type": "veg",
    "price": 150
  }
]
```

---

## 3. Station APIs

### 3.1 Get Stations List
**Endpoint**
```
GET /api/stations
```

**Description**
- Returns all stations between Ahmedabad and Mumbai, sorted by distance.

---

## 4. Booking APIs

### 4.1 Create Booking
**Endpoint**
```
POST /api/bookings
```

**Description**
- Books one or more seats for a journey.
- Optionally includes meal selection.

**Request Body**
```json
{
  "fromStation": "Ahmedabad",
  "toStation": "Mumbai",
  "journeyDate": "2026-01-25",
  "seatIds": ["seatId1", "seatId2"],
  "passengerName": "Rahul Sharma",
  "passengerPhone": "9876543210",
  "mealId": "mealId"
}
```

**Validations**
- All required fields must be provided  
- Phone number must be 10 digits  
- Seats must be available  

**Success Response**
```json
{
  "_id": "6972220ad2a82eeebf2a9999",
  "status": "booked",
  "confirmationProbability": "30%",
  "createdAt": "2026-01-23T09:15:42.456Z"
}

```

---

### 4.2 Cancel Booking
**Endpoint**
```
DELETE /api/bookings/:bookingId
```

**Description**
- Cancels an existing booking.
- Frees up the reserved seats.

**Response**
```json
{
  "message": "Reservation cancelled successfully"
}
```

---

### 4.3 Booking History
**Endpoint**
```
GET /api/bookings/history/:phone
```

**Description**
- Fetches booking history using passenger phone number.

**Response**
```json
[
  {
    "_id": "bookingId",
    "status": "booked",
    "seatIds": [],
    "mealId": {}
  }
]
```

---

## 5. Server Health Check

### 5.1 Root Endpoint
**Endpoint**
```
GET /
```

**Response**
```json
{
  "success": true,
  "message": "Sleeper Bus Booking API is running"
}
```

---
