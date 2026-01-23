export const predictConfirmationProbability = ({ daysBeforeJourney, seatsBooked, hasMeal, isWeekend}) => {
    let probability = 50; // base
  
    if (daysBeforeJourney >= 7) probability += 20;
    else if (daysBeforeJourney >= 3) probability += 10;
  
    if (hasMeal) probability += 15;
    if (seatsBooked === 1) probability += 10;
    if (isWeekend) probability -= 10;
  
    return Math.max(0, Math.min(probability, 100));
  };
  