import { render, screen } from "@testing-library/react";
import App from "./App";
import BookingForm from "./BookingForm";

test("checks for reservation form header", () => {
  const availableTimes = [];
  const dispatch = {};
  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);
  const header1 = screen.getByText("Little Lemon Reservation Form");
  expect(header1).toBeInTheDocument();
});
