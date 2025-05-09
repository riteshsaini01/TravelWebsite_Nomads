import React, { useState, useEffect } from "react";
import "./Questions.scss";
import "./Accordion.jsx";
import Accordion from "./Accordion.jsx";

import Aos from "aos";
import "aos/dist/aos.css";

const Questions = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const [active, setActive] = useState(
    "How do I choose the right travel destination for me?"
  );
  return (
    <div id="contact" className="questions section container">
      <div className="secHeading">
        <h3>Frequently Asked Questions</h3>
      </div>
      <div className="secContainer grid">
        {/* We will import a component from a different file*/}
        <div className="accordion grid">
          <Accordion
            title="How do I choose the right travel
            destination for me?"
            desc="Consider your interests,budget,desired experiences,
            and the type of environment you enjoy.
            Research destinations that align with your
            preferences and offer attractions or activities you 
            find appealing."
            active={active}
            setActive={setActive}
          />
          <Accordion
            title="What are the best times to visit specific destinations?"
            desc="Research the climate, weather patterns, and peak tourist seasons of the
          destination you're interested in.Opt for the shoulder seasons when the
          weather is pleasant, and crowds are fewer, if possible."
            active={active}
            setActive={setActive}
          />
          <Accordion
            title="How can I find budget-friendly travel options and deals?"
            desc="Finding budget-friendly travel options and deals requires
           a combination of research, planning, and flexibility.
          Check for travel packages or bundles that include flights, accommodation, 
          and sometimes activities. These can provide discounts compared to booking each component separately."
            active={active}
            setActive={setActive}
          />
          <Accordion
            title="What essential items should i pack for my adventure?"
            desc="The essential items you should pack for your adventure depend on the nature of your trip,
           the destination, and your personal needs.Pack clothing suitable for the climate and activities.
           Depending on the season, pack a waterproof jacket, umbrella, or rain poncho.
           A durable and comfortable backpack for day trips. "
            active={active}
            setActive={setActive}
          />
        </div>

        <div className="form">
          <div className="secHeading">
            <h4 data-aos="fade-up">Do you have any specific questions?</h4>
            <p data-aos="fade-up">
              please fill the form below and our dedicated team will get intouch
              with you as soon as possible.
            </p>
          </div>

          <div className="formContent grid">
            <input
              type="emai"
              placeholder="Enter email address"
              data-aos="fade-up"
            />
            <textarea
              placeholder="Enter your question here"
              data-aos="fade-up"
            ></textarea>
            <button className="btn" data-aos="fade-up">
              Submit Inquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
