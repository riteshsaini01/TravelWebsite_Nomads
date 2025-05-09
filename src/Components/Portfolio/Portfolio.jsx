import React,{useEffect} from 'react'
import "./Portfolio.scss";

//Imported Assets
import icon1 from '../../Assets/icon1.png';
import icon2 from '../../Assets/icon2.png';
import icon3 from '../../Assets/icon3.png';
import image from '../../Assets/image.jpg';

import Aos from 'aos'
import 'aos/dist/aos.css'


const Portfolio = () => {
  useEffect(()=>{
    Aos.init({duration: 1000})
  },[]);
  return (
    <div className="portfolio section container">
      <div className="secContainer grid">
        <div className="leftContent">
           <div className="secHeading">
            <h3 data-aos='fade-up'>Why Should You Choose Us</h3>
            <p data-aos='fade-up'>
              we have extensive knowledge and experiences
              in the travel industry.
            </p>
          </div>

          <div className="grid">
          <div className="singlePortfolio flex" data-aos='fade-up'>
              <div className="iconDiv">
                  <img src={icon1} alt='Icon image' />
              </div>
              <div className="infor">
                <h4 data-aos='fade-up'>Safety and Support</h4>
                <p data-aos='fade-up'>
                  Our top priority is the safety and 
                  well-being of our clients.
                  We maintain high safety standards and
                  have emergency Supportavailable during the trip.
                </p>
              </div>
            </div>


            <div className="singlePortfolio flex" data-aos='fade-up'>
              <div className="iconDiv">
                  <img src={icon2} alt='Icon image' />
              </div>
              <div className="infor">
                <h4>Diverse Range of Destinations</h4>
                <p>
                  Whether it's a domestic tour or an
                  international adventure,we cover
                  a wide range of destinations to cater
                  to different interests and preferences.
                </p>
              </div>
            </div>


            <div className="singlePortfolio flex" data-aos='fade-up'>
              <div className="iconDiv">
                  <img src={icon3} alt='Icon image' />
              </div>
              <div className="infor">
                <h4>24/7 customer support</h4>
                <p>
                  Our dedicated customer support team is 
                  available round the clock to address 
                  any queries or concerns before,during
                  and after the trip
                </p>
              </div>
            </div>

            
          </div>
        </div>
        <div className="rightContent" data-aos='fade-down'>
          <img src={image} alt='image' />
        </div>
      </div>
    </div>
  )
}

export default Portfolio