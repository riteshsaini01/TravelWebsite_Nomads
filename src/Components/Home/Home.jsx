import React, { useEffect } from "react";
import "./Home.scss";

//Imported Assets
import Video from "../../Assets/video.mp4";
import image1 from "../../Assets/Jodhpur.jpg";
import image2 from "../../Assets/Goa.jpg";
import image3 from "../../Assets/Jaipur.jpg";
import image4 from "../../Assets/Mysore.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

//Imported icons
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div id="home" className="Home">
      <div className="videoBg">
        <video src={Video} autoPlay loop muted></video>/{" "}
      </div>

      <div className="sectionText">
        <h1 data-aos="fade-up">Unlock Your Travel Dreams With us!</h1>
        <p data-aos="fade-up">
          Discover the world's most adventurous nature, life is so short for a
          trip.
        </p>
        <button className="btn flex" data-aos="fade-up">
          Get Started<FaArrowRight className="icon"></FaArrowRight>
        </button>
      </div>

      <div className="popularPlaces">
        <div className="content">
          <h3 data-aos="fade-up">Popular Places</h3>
          <div className="images flex" data-aos="fade-up">
            <img src={image1} alt="Destination Images" />
            <img src={image2} alt="Destination Images" />
            <img src={image3} alt="Destination Images" />
            <img src={image4} alt="Destination Images" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
