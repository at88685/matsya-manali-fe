import { Button } from '@mui/material';
import frontVideo from '../assets/video/frontVideo.mp4';
import './Styles/home.css'
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

import React from 'react'
const Home = () => {
  const openVirtualSite = () => {
    window.open("https://dotcomsolutions.in/matsya-manali/", "_black", "noreferrer");
  }

  return (
    <div className="homeMainDiv" id='homeid'>
      <video autoPlay src={frontVideo} muted loop style={{ objectFit: 'cover', height: '100vh', width: '100%', opacity: '1' }}>
        {/* <source src={frontVideo} type="video/mp4" /> */}
        {/* Add additional <source> elements for different video formats (e.g., WebM, Ogg) */}
        {/* Fallback content for browsers that don't support HTML5 video */}
        Your browser does not support the video tag.
      </video>
      {/* <div className='home-body'> */}
      <div className='welcomeToMatsyaManaliDiv'>
        <div className='welcomeToMatsyaManaliText'>Welcome to Matsya Manali</div>
        <div className='discoverGreatnessText'>Discover the greatness of mountains with an eccentric feel of nature.</div>
        <Button variant='outlined' sx={{
          color: 'white',
          ":hover": {
            color: '#9D42DA',
            backgroundColor: 'white'
          },
          marginTop: '15px'
        }} onClick={openVirtualSite}>Explore Virtually</Button>
      </div>
    </div>
    // </div>
  )
}

export default Home