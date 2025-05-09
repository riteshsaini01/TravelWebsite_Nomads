import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Destinations from "./Components/Destinations/Destination";
import Footer from "./Components/Footer/Footer";
import Middle from "./Components/Middle/Middle";
import Portfolio from "./Components/Portfolio/Portfolio";
import Questions from "./Components/Questions/Questions";
import Reviews from "./Components/Reviews/Reviews";
import Subscribe from "./Components/Subscribe/Subscribe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DestinationCardDetails from "./Components/Destinations/DestinationCardDetails";

import React from "react";

function FullPage() {
  return (
    <div>
      <Navbar />

      <Home />
      <Middle />
      <Destinations />
      <Portfolio />
      <Questions />
      <Reviews />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default FullPage;
