## Booking Confirmation Prediction – Weight Explanation

The booking confirmation probability is calculated using a **weighted scoring approach**.  
Each booking starts with a **base probability of 50%**, and additional weights are added or subtracted based on booking behavior.

---

### Feature Weights Table

| Factor | Condition | Explanation | Weight Applied |
|------|----------|------------|---------------|
| Base Probability | All bookings | Starting neutral probability before applying any conditions | +50% |
| Days Before Journey | ≥ 7 days | Early booking indicates better planning and lower cancellation risk | +20% |
| Days Before Journey | 3–6 days | Moderate advance booking | +10% |
| Meal Selection | Meal added | Adding a meal shows higher user commitment to the journey | +15% |
| Seats Booked | 1 seat | Single-seat bookings are more stable than group bookings | +10% |
| Weekend Journey | Saturday / Sunday | Weekend plans are more uncertain and have higher cancellation rates | −10% |

---

### Final Probability Calculation

**Final Probability = Base Probability + Sum of Applicable Weights**

The result is capped between **0% and 100%** to maintain valid output.

---

### Example Calculation

**Booking Details:**
- Days before journey: 5 days  
- Seats booked: 1  
- Meal selected: Yes  
- Weekend journey: No  

| Component | Weight |
|--------|--------|
| Base Probability | +50% |
| Days Before Journey (5 days) | +10% |
| Meal Selection | +15% |
| Single Seat Booking | +10% |
| Weekend Journey | 0% |

**Final Confirmation Probability:**  
50 + 10 + 15 + 10 = 85%

---

### Why This Weighting Works
- Reflects real-world booking behavior
- Easy to understand and explain
- Fast to compute
- Can be upgraded to a real ML model when data becomes available

---