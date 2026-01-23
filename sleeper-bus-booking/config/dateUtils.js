export const calculateDaysBeforeJourney = (bookingDate, journeyDate) => {
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.ceil(
      (new Date(journeyDate) - new Date(bookingDate)) / oneDay
    );
  };
  