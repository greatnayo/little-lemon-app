import BookingForm from "./BookingForm";
import { fetchAPI, submitAPI } from "./mockAPI";

import { useState } from "react";
import { useReducer } from "react";

const updateTimes = (availableTimes, action) => {
  if (action.type === "updateTimeSlot") {
    return availableTimes;
  }
  return availableTimes;
};

const initializeTimes = () => {
  const currentDate = new Date();
  //fetchAPI(currentDate);
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};
const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return <BookingForm availableTimes={availableTimes} dispatch={dispatch} />;
};

export default BookingPage;
