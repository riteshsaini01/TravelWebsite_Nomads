import React from "react";
import { Link } from "react-router-dom";
import "./Destination.scss";


//Imported Icons
import { HiHashtag } from "react-icons/hi";
import { TiLocation } from "react-icons/ti";

function DestinationCard({ destination }) {
  function handleClick() {
    console.log(destination.id);
  }

  return (
    <Link to={`/destinations/${destination.id}`}>
      <div onClick={handleClick}>
        <div
          className="singleDestination"
          key={destination.id}
          data-aos="fade-up"
        >
          <div className="imgDiv" data-aos="fade-up">
            <img src={destination.img} alt="Destination Image" />

            <div className="descInfo flex">
              <div className="text">
                <span className="name">{destination.name}</span>
                <p className="flex">
                  <TiLocation className="icon" />
                  {destination.location}
                </p>
              </div>
              <span className="rating"><HiHashtag className="hashicon" />{destination.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default DestinationCard;
