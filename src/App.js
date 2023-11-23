import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Header from "./Header";
import BookingPage from "./BookingPage";
import Contact from "./Contact";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="booking-page" element={<BookingPage />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
