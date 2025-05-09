import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

import "./Card.scss";

// Icons
import { FaStar, FaAmbulance, FaRegLightbulb } from "react-icons/fa";
import { GiMoneyStack, GiNightSleep } from "react-icons/gi";
import { BsEmojiGrin, BsPersonWorkspace } from "react-icons/bs";
import { MdOutlineWindPower } from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { IoTimeOutline } from "react-icons/io5";
import { GrRestroomWomen } from "react-icons/gr";
import { TiWeatherPartlySunny } from "react-icons/ti";

// DB Imports
import DestinationDB from "./DestinationDB";
import DestinationDetails from "./DestinationDetailsDB";
import placesData from "./placesData";

// Progress Bar Component
function Progressbar({ value }) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev < value) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [value]);

  const safePercent = Math.max(0, Math.min(100, percent));

  let colorClass =
    safePercent < 30
      ? "below30"
      : safePercent <= 70
      ? "between30and70"
      : "above70";

  return (
    <div className={`progressbar ${colorClass}`}>
      <div
        className={`progressbarfill ${colorClass}`}
        style={{ width: `${safePercent}%` }}
      >
        <span className="progress-label">{safePercent}%</span>
      </div>
    </div>
  );
}

function DestinationCardDetails() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("details");

  const destination = DestinationDB.find((item) => item.id === Number(id));
  const destinationKey = destination?.name.toLowerCase();
  const places = placesData[destinationKey] || [];
  const metrics = DestinationDetails.find((item) => item.id === Number(id));

  const [progressValues, setProgressValues] = useState({});

  useEffect(() => {
    if (!metrics) return;

    const keys = Object.keys(metrics).filter((key) => key !== "Rankings");

    const interval = setInterval(() => {
      setProgressValues((prev) => {
        const updated = {};
        keys.forEach((key) => {
          updated[key] =
            (prev[key] || 0) < metrics[key] ? (prev[key] || 0) + 1 : metrics[key];
        });
        return updated;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [metrics]);

  if (!destination || !metrics) return <div>Destination not found</div>;

  return (
    <div>
      <Navbar />
      <div className="Card">
        <div className="videoContainer">
          <video src={destination.video} autoPlay loop muted />
          <div className="textOverlay">
            <p>{destination.name}</p>
            <h3>{destination.location}</h3>
          </div>
        </div>
      </div>

      <div className="structure">
        <div className="contentWrapper">
          <div className="MapAPI">
            <iframe
              src={destination.mapEmbedURL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map"
            />
          </div>

          <div className="details">
            <div className="tabs">
              <button
                className={activeTab === "details" ? "active" : ""}
                onClick={() => setActiveTab("details")}
                id="button"
              >
                About
              </button>
              <button
                className={activeTab === "places" ? "active" : ""}
                onClick={() => setActiveTab("places")}
                id="button"
              >
                Popular Places
              </button>
            </div>

            {activeTab === "details" && (
              <div className="progressbar">
                <ul>
                  <li><h2><FaStar className="icon" /> Ranking:</h2><Progressbar value={metrics.Rankings ?? 0} /></li>
                  <li><h2><GiMoneyStack className="icon" /> Cost for Nomad:</h2><Progressbar value={progressValues.Cost_for_a_Nomad ?? 0} /></li>
                  <li><h2><BsEmojiGrin className="icon" /> Fun:</h2><Progressbar value={progressValues.Fun ?? 0} /></li>
                  <li><h2><MdOutlineWindPower className="icon" /> AQI:</h2><Progressbar value={progressValues.Air_Quality_AQI ?? 0} /></li>
                  <li><h2><AiFillSafetyCertificate className="icon" /> Safety:</h2><Progressbar value={progressValues.Safety ?? 0} /></li>
                  <li><h2><FaRegLightbulb className="icon" /> Electricity:</h2><Progressbar value={progressValues.Electricity ?? 0} /></li>
                  <li><h2><GiNightSleep className="icon" /> NightLife:</h2><Progressbar value={progressValues.Nightlife ?? 0} /></li>
                  <li><h2><BsPersonWorkspace className="icon" /> Place for WFH:</h2><Progressbar value={progressValues.Place_for_WFH ?? 0} /></li>
                  <li><h2><IoTimeOutline className="icon" /> AVG Trip Time:</h2><Progressbar value={progressValues.Avg_Trip_time_days ?? 0} /></li>
                  <li><h2><GrRestroomWomen className="icon" /> Safe for Women:</h2><Progressbar value={progressValues.Safe_for_Women ?? 0} /></li>
                  <li><h2><TiWeatherPartlySunny className="icon" /> Climate:</h2><Progressbar value={progressValues.Climate ?? 0} /></li>
                  <li><h2><FaAmbulance className="icon" /> Medical:</h2><Progressbar value={progressValues.Medical ?? 0} /></li>
                </ul>
              </div>
            )}

            {activeTab === "places" && (
              <div className="places">
                {places.length > 0 ? (
                  places.map((photo) => (
                    <div key={photo.id} className="place-item">
                      <img src={photo.src} alt={`Place ${photo.id}`} />
                      <div className="place-description">
                        <h3>{photo.details}</h3>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No places found for {id}</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationCardDetails;
