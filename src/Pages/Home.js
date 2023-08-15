import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Box, Button, styled } from "@mui/material";
import { InsideImagesList } from "../Constants/ImagesList";
import './Styles/home.css'
import { motion } from "framer-motion";

const TransparentOverlay = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const Text = styled("div")({
  color: "#fff", 
  textAlign: "center",
  padding: "16px",
});

const Home = () => {

  const imagesList = InsideImagesList

  const openVirtualSite = () => {
    window.open("https://dotcomsolutions.in/matsya-manali/", "_black", "noreferrer");
  }

  useEffect(() => {
    setShowMainContent(true);
  }, []);

  const [showMainContent, setShowMainContent] = useState(false);
  const deluxFadeDownVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: -200 }
  };
  const indicatorStyle = {
    display: "none",
  };
  return (
    <Box position="relative" height="100vh" overflow="hidden" id='homeid'>
      <Carousel
        animation="none"
        navButtonsAlwaysVisible={false}
        autoPlay={true}
        interval={2500}
        stopAutoPlayOnHover= {false}
        indicatorIconButtonProps={{
          style: indicatorStyle,
        }}
        
      >
        {imagesList.map((item, index) => (
          <div key={index} style={{ position: "relative" }}>
            <img
              src={item}
              alt="insideview"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100vh",
              }}
            />

            {/* Transparent overlay with centered text */}
            <TransparentOverlay>
            <motion.div className='welcomeToMatsyaManaliDiv'
        initial="hidden"
        animate={showMainContent ? "visible" : "hidden"}
        variants={deluxFadeDownVariants}
        transition={{ duration: 2 }}

      >
        <Text>
        <div className='welcomeToMatsyaManaliText'>Welcome to Matsya Manali</div>
        <div className='discoverGreatnessText'>Discover the greatness of mountains with an eccentric feel of nature.</div>
        </Text>
        <Button variant='outlined' sx={{
          color: 'white',
          ":hover": {
            color: '#9D42DA',
            backgroundColor: 'white'
          },
          marginTop: '15px'
        }} onClick={openVirtualSite}>Explore Virtually</Button>
      </motion.div>
            </TransparentOverlay>
           
          </div>
        ))}
      </Carousel>
      
    </Box>
  );
};

export default Home;
