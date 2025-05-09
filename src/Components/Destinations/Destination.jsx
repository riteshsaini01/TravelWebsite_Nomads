import React, { useState, useEffect } from "react";
//import { Route, Switch } from 'react-router-dom';
//import Cards from '../Cards/Card.jsx';
import "./Destination.scss";

// Importing icons
import { MdLocationPin } from "react-icons/md";
import { BsFillCreditCardFill } from "react-icons/bs";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
//import { MdChevronLeft} from "react-icons/md";
//import { MdChevronRight} from "react-icons/md";

import Aos from "aos";
import "aos/dist/aos.css";
import DestinationCard from "./DestinationCard";
import DestinationDB from "./DestinationDB";

// Lets create an array that is gonna contain all destinantion data and we loop through

const Destination = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [filteredDestinations, setFilteredDestinations] =
    useState(DestinationDB);

  function handleSearchClick(e) {
    e.preventDefault();
    setSearchLocation(inputSearch);
    setInputSearch("");
  }

  function handleInputChange(e) {
    setInputSearch(e.target.value);

    const newFilteredDestinations = DestinationDB.filter(
      (dest) =>
        dest.name.toLowerCase().startsWith(inputSearch) ||
        dest.location.toLowerCase().startsWith(inputSearch)
    );

    setFilteredDestinations(newFilteredDestinations);
  }

  useEffect(() => {
    if (inputSearch === "") {
      setFilteredDestinations(DestinationDB);
    }
  }, [inputSearch]);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div id="destination" className="destination section container">
      <div className="destination section container">
        <div className="secContainer">
          <div className="secTitle">
            <span className="redtext" data-aos="fade-up">
              Explore Now
            </span>
            <h3 data-aos="fade-up">Find Your Dream Destination</h3>
            <p data-aos="fade-up">
              Fill in the fields below to find the best spot for your next tour.
            </p>
          </div>

          <div className="searchField grid">
            <div className="inputField flex" data-aos="fade-up">
              <MdLocationPin className="icon" />
              <input
                type="text"
                placeholder="Location"
                onChange={handleInputChange}
                value={inputSearch}
              />
            </div>

            <button className="btn flex" data-aos="fade-up">
              <BiSearchAlt className="icon" onClick={handleSearchClick} />
              Search
            </button>
          </div>

          <div className="destinationContainer grid">
            {filteredDestinations.map((destination) => {
              return <DestinationCard destination={destination} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
