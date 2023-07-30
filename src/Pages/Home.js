import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import frontVideo from '../assets/video/frontVideo.mp4';
import matsyaManaliOutsideVedio from "../assets/video/matsyaManaliOutsideVedio.mp4"
import './Styles/home.css'
import { motion } from "framer-motion";


import React from 'react'
const Home = () => {
  const openVirtualSite = () => {
    window.open("https://dotcomsolutions.in/matsya-manali/", "_black", "noreferrer");
  }

  useEffect(() => {
    setShowMainContent(true);
  }, []);

  const [showMainContent, setShowMainContent] = useState(false);
  const deluxFadeDownVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="homeMainDiv" id='homeid'>
      <video autoPlay muted loop style={{ objectFit: 'cover', height: '100vh', width: '100%', opacity: '1' }}>
        {/* <source src={frontVideo} type="video/mp4" /> */}
        {/* Add additional <source> elements for different video formats (e.g., WebM, Ogg) */}
        {/* Fallback content for browsers that don't support HTML5 video */}
        <source src={frontVideo} type='video/mp4' />
      </video>
      {/* <div className='home-body'> */}
      <motion.div className='welcomeToMatsyaManaliDiv'
        initial="hidden"
        animate={showMainContent ? "visible" : "hidden"}
        variants={deluxFadeDownVariants}
        transition={{ duration: 1.5 }}

      >
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
      </motion.div>
    </div>
    // </div>
  )
}

export default Home