import React, { useEffect } from 'react';
import { BiLogoMediumOld } from 'react-icons/bi';
import { BsTwitter } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { ImFacebook } from 'react-icons/im';
import "./Footer.scss";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(()=>{
    Aos.init({duration: 1000})
  },[]);
  return (
    <div className='footer'>
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div className="footerLogo" data-aos='fade-up'>
            <BiLogoMediumOld className='icon' />
            <span>Nomads.com</span>
          </div>
        
          <div className="socials flex"  >
            <ImFacebook className='icon' aria-label="Facebook"  />
            <BsTwitter className='icon' aria-label="Twitter" />
            <AiFillInstagram className='icon' aria-label="Instagram" />
          </div>
          </div>

          <div className="footerLinks" data-aos='fade-up'>
            <span className='linkTitle'>Information</span>
            <ul>
              <li><a href='#'>Home</a></li>
              <li><a href='#'>Explore</a></li>
              <li><a href='#'>Travel</a></li>
              <li><a href='#'>Blog</a></li>
            </ul>
          </div>

          <div className="footerLinks" data-aos='fade-up'>
            <span className='linkTitle'>Helpful Links</span>
            <ul>
              <li><a href='#'>Destination</a></li>
              <li><a href='#'>Support</a></li>
              <li><a href='#'>Travel & Condition</a></li>
              <li><a href='#'>Privacy</a></li>
            </ul>
          </div>

          <div className="footerLinks" data-aos='fade-up'>
            <span className='linkTitle'>Contact Details</span>
            <span className='phone'>+910000001</span>
            <span className='email'>Nomads@gmail.com</span>
          
        </div>
      </div>
    </div>
  );
}

export default Footer;
