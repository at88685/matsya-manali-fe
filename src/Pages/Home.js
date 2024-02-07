import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Box, Button, styled } from "@mui/material";
import { InsideImagesList } from "../Constants/ImagesList";
import './Styles/home.css'
import { motion } from "framer-motion";
import { strings } from "../Constants/Strings";
import { Snowfall } from "react-snowfall";
import FrontVideo from "../assets/video/frontVideo.mp4";
import MatsyaManaliVideo from "../assets/video/matsyaManaliVideo.mp4"

const TransparentOverlay = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100vh",
  background: "rgba(0, 0, 0, 0.2)",
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
  const [showMainContent, setShowMainContent] = useState(false);
  const [showSnow, setShowSnow] = useState(false);
  const [onLoading, setonLoading] = useState(false);
  const imagesList = InsideImagesList;
  const openVirtualSite = () => {
    window.open("https://dotcomsolutions.in/matsya-manali/", "_black", "noreferrer");
  }
  const openMmtLink = () => {
    window.open("https://www.makemytrip.com/hotels/hotel-details/?_branch_match_id=1182903915794133802&_branch_referrer=H4sIAAAAAAAAAyXN24rCMBSF4bfJpU0TqkXYiOjAiENF2j5AiFsbmtOkCRKfXmsv13%2BxviFGP22LQnivlR2nlREjmhyD8ivpTPFfH1%2FpbNmj3w0uoj7dgFHG6YaXZcV5takpXxOpYoZDd%2B57Il2yMWQ4NSQ4Z9oo8jUJre4KAzCkSOSAclQWaF1W89cSXIpzWS%2FFePhye%2B%2FbQQRs8Em0k2n6%2BIvzXV32CDNOAj6Us7N6T9aiboRB%2BL10P38tCZOEEhm%2BAU0qp3jsAAAA&checkin=08162023&checkout=08172023&city=CTKUU&cmp=hotelAppShareNew&country=IN&funnelName=HOTELS&hotelId=202307311533578036&locusId=CTKUU&locusType=city&region=IN&roomStayQualifier=2e0e&rsc=1e2e", "_black", "noreferrer");
  }
  useEffect(() => {
    setShowMainContent(true);
    return ()=>{};
  }, []);

  const deluxFadeDownVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: -100 }
  };
  const indicatorStyle = {
    display: "none",
  };

  return (
    <Box height="100vh" id='homeid'>
      {
        // onLoading &&
        <video src={MatsyaManaliVideo} loop autoPlay={true} muted style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}></video>
      }
      {
        showSnow &&
        // <div style={{ height: '100vh'}}>
          <Snowfall color="white" snowflakeCount={400} wind={[-0.5, 5.0]} style={{height:'100vh'}}></Snowfall>
        // </div>
      }
      <TransparentOverlay>
        <motion.div className='welcomeToMatsyaManaliDiv'
          initial="hidden"
          animate={showMainContent ? "visible" : "hidden"}
          variants={deluxFadeDownVariants}
          transition={{ duration: 2 }}
        >
          <Text>
            <div className='welcomeToMatsyaManaliText'>{strings.matsyaManali}</div>
            <div className='discoverGreatnessText'>{strings.matsyaManaliDesc}</div>
          </Text>
          {/* <Button variant='outlined' sx={{
            color: 'white',
            ":hover": {
              color: '#9D42DA',
              backgroundColor: 'white'
            },
            marginTop: '15px'
          }} onClick={openVirtualSite}>{strings.exploreVirtually}</Button> */}
          <Text>
            <div className="bookNowText" onClick={openMmtLink}>{strings.bookNow.toUpperCase()}</div>
          </Text>
        </motion.div>
        {/* {
          showSnow &&
          <div>
            <div style={{ color: 'white', bottom: 10, left: 10, fontSize:10, position: 'absolute' }}>{strings.itIsSnowfallHereWhereAreYou}</div>
          </div>
        } */}
      </TransparentOverlay>

      {/* <Carousel
        animation="none"
        navButtonsAlwaysInvisible={true}
        autoPlay={true}
        interval={2500}
        stopAutoPlayOnHover={false}
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
            <TransparentOverlay>
              <motion.div className='welcomeToMatsyaManaliDiv'
                initial="hidden"
                animate={showMainContent ? "visible" : "hidden"}
                variants={deluxFadeDownVariants}
                transition={{ duration: 2 }}
              >
                <Text>
                  <div className='welcomeToMatsyaManaliText'>{strings.welcomeToMatsyaManali}</div>
                  <div className='discoverGreatnessText'>{strings.matsyaManaliDesc}</div>
                </Text>
                <Button variant='outlined' sx={{
                  color: 'white',
                  ":hover": {
                    color: '#9D42DA',
                    backgroundColor: 'white'
                  },
                  marginTop: '15px'
                }} onClick={openVirtualSite}>{strings.exploreVirtually}</Button>
                <Text>
                  <div className="bookNowText" onClick={openMmtLink}>{strings.bookNow.toUpperCase()}</div>
                </Text>
              </motion.div>
            </TransparentOverlay>
          </div>
        ))}
      </Carousel> */}

    </Box>
  );
};

export default Home;
