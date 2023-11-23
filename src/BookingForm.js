import "./form-styles.css";
import { useState } from "react";

const BookingForm = ({ dispatch, availableTimes }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState();
  const [occassion, setOccassion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    clearForm();
  };
  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setDate("");
    setTime("");
    setGuests();
    setOccassion("");
  };
  return (
    <>
      <div className="res-form">
        <h2>Little Lemon Reservation Form</h2>
        <h3> Kindly fill the form below to make your Reservation</h3>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div className="field">
              <label>First Name</label>
              <input
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                placeholder="enter your first name"
              />
            </div>
            <div className="field">
              <label>Last Name</label>
              <input
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                placeholder="Enter your last name"
              />
            </div>
            <div className="field">
              <label htmlFor="res-date">Choose date</label>
              <input
                type="date"
                id="res-date"
                value={date}
                onChange={(e) => {
                  dispatch({
                    type: "updateTimeSlot",
                    payload: e.target.value,
                  });
                }}
              />
            </div>
            <div className="field">
              <label htmlFor="res-time">Choose time</label>
              <select
                id="res-time"
                value={time}
                onChange={(e) => {
                  setTime(e.target.value);
                }}
              >
                {availableTimes.map((availableTime) => {
                  return <option>{availableTime}</option>;
                })}
                ;
              </select>
            </div>
            <div className="field">
              <label htmlFor="guests">Number of guests</label>
              <input
                type="number"
                value={guests}
                onChange={(e) => {
                  setGuests(e.target.value);
                }}
                placeholder="1"
                min="1"
                max="10"
                id="guests"
              />
            </div>
            <div className="field">
              <label htmlFor="occassion">Occassion</label>
              <select
                id="occassion"
                value={occassion}
                onChange={(e) => {
                  setOccassion(e.target.value);
                }}
              >
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
            </div>
            <input type="submit" value="Make Your reservation" />
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default BookingForm;
