import React,{useEffect} from 'react'
import "./Middle.scss";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Middle = () => {
  useEffect(()=>{
    Aos.init({duration: 1000})
  },[]);
  return (
    <div className='middle section'>
      <div className='secContainer secContainer'>
        <div className="grid">
          <span className='flex' data-aos='fade-up'>
            <h1>10</h1>
            <p>
              World of Adventures & Experiences
            </p>
          </span>
          <span className='flex'data-aos='fade-up'>
            <h1>2k+</h1>
            <p>
              Fine Destinations
            </p>
          </span>
          <span className='flex'data-aos='fade-up'>
            <h1>10k+</h1>
            <p>
              Customer Reviews
            </p>
          </span>
          <span className='flex'data-aos='fade-up'>
            <h1>4.8</h1>
            <p>
              Overall Rating
            </p>
          </span>
        </div>
      </div>

    </div>
  )
}

export default Middle

