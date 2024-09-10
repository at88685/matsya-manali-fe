import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Box, Button, styled, Modal, Typography } from "@mui/material";
import { InsideImagesList, logos } from "../Constants/ImagesList";
import './Styles/home.css'
import { motion } from "framer-motion";
import { strings } from "../Constants/Strings";
import { Snowfall } from "react-snowfall";
import MatsyaManaliNewVideo from "../assets/video/matsyaManaliVideoNew.mp4";
import "../Components/styles/navbar.css"

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
  const [openBookNowModal, setOpenBookNowModal] = useState(false);
  const imagesList = InsideImagesList;
  const partnersArray = [
    {
      image: logos?.agoda,
      desc: "Agoda"
    },
    {
      image: logos?.booking,
      desc: "Booking"
    },
    {
      image: logos?.easeMyTrip,
      desc: "Ease My Trip"
    },
    {
      image: logos?.goIbibo,
      desc: "Go Ibibo"
    },
    {
      image: logos?.makeMyTrip,
      desc: "Make My Trip"
    },
    {
      image: logos?.wego,
      desc: "Wego"
    }
  ]
  const openVirtualSite = () => {
    window.open("https://dotcomsolutions.in/matsya-manali/", "_black", "noreferrer");
  }
  const openMmtLink = () => {
    window.open("https://www.makemytrip.com/hotels/hotel-details/?_branch_match_id=1182903915794133802&_branch_referrer=H4sIAAAAAAAAAyXN24rCMBSF4bfJpU0TqkXYiOjAiENF2j5AiFsbmtOkCRKfXmsv13%2BxviFGP22LQnivlR2nlREjmhyD8ivpTPFfH1%2FpbNmj3w0uoj7dgFHG6YaXZcV5takpXxOpYoZDd%2B57Il2yMWQ4NSQ4Z9oo8jUJre4KAzCkSOSAclQWaF1W89cSXIpzWS%2FFePhye%2B%2FbQQRs8Em0k2n6%2BIvzXV32CDNOAj6Us7N6T9aiboRB%2BL10P38tCZOEEhm%2BAU0qp3jsAAAA&checkin=08162023&checkout=08172023&city=CTKUU&cmp=hotelAppShareNew&country=IN&funnelName=HOTELS&hotelId=202307311533578036&locusId=CTKUU&locusType=city&region=IN&roomStayQualifier=2e0e&rsc=1e2e", "_black", "noreferrer");
  }
  useEffect(() => {
    setShowMainContent(true);
    return () => { };
  }, []);

  const deluxFadeDownVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: -100 }
  };
  const indicatorStyle = {
    display: "none",
  };

  const onClickPartners = (index) => {
    if (index == 0) {
      window.open("https://www.agoda.com/en-in/matsya-manali/hotel/manali-in.html?finalPriceView=1&isShowMobileAppPrice=false&cid=1922885&numberOfBedrooms=&familyMode=false&adults=2&children=0&rooms=1&maxRooms=0&checkIn=2024-07-16&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=1&showReviewSubmissionEntry=false&currencyCode=INR&isFreeOccSearch=false&tag=7177337b-9122-46d9-b471-c8f806c5375a&los=1&searchrequestid=8f15b652-b093-4c38-9497-99f5936872b6&ds=w1W0NZnKN1nrVAo5", "_black", "noreferrer");
    } else if (index == 1) {
      window.open("https://www.booking.com/hotel/in/matsya-manali-burwa.en-gb.html", "_black", "noreferrer");
    }
    else if (index == 2) {
      window.open("https://www.easemytrip.com/hotels/matsya-manali-4524430/", "_black", "noreferrer");
    }
    else if (index == 3) {
      window.open("https://www.goibibo.com/hotels/matsya-manali-hotel-in-manali-6293065513731195172/", "_black", "noreferrer");
    }
    else if (index == 4) {
      window.open("https://www.makemytrip.com/hotels/hotel-details/?_branch_match_id=1182903915794133802&_branch_referrer=H4sIAAAAAAAAAyXN24rCMBSF4bfJpU0TqkXYiOjAiENF2j5AiFsbmtOkCRKfXmsv13%2BxviFGP22LQnivlR2nlREjmhyD8ivpTPFfH1%2FpbNmj3w0uoj7dgFHG6YaXZcV5takpXxOpYoZDd%2B57Il2yMWQ4NSQ4Z9oo8jUJre4KAzCkSOSAclQWaF1W89cSXIpzWS%2FFePhye%2B%2FbQQRs8Em0k2n6%2BIvzXV32CDNOAj6Us7N6T9aiboRB%2BL10P38tCZOEEhm%2BAU0qp3jsAAAA&checkin=08162023&checkout=08172023&city=CTKUU&cmp=hotelAppShareNew&country=IN&funnelName=HOTELS&hotelId=202307311533578036&locusId=CTKUU&locusType=city&region=IN&roomStayQualifier=2e0e&rsc=1e2e", "_black", "noreferrer");
    }
    else if (index == 5) {
      window.open("https://www.wego.co.in/hotels/searches/32283/2024-07-09/2024-07-10/1/2/3214716?guests=2&search_id=297333b7e57dc833", "_black", "noreferrer");

    }
  }

  return (
    <Box height="100vh" id='homeid'>
      {
        // onLoading &&
        <video src={MatsyaManaliNewVideo} autoPlay={true} loop={true} playsInline={true} muted={true} controls={false} style={{ width: '100vw', height: '100vh', objectFit: 'cover' }}></video>
      }
      {
        showSnow &&
        // <div style={{ height: '100vh'}}>
        <Snowfall color="white" snowflakeCount={400} wind={[-0.5, 5.0]} style={{ height: '100vh' }}></Snowfall>
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
          <Button variant='outlined'
            size={"large"}
            sx={{
              color: '#9D42DA',
              backgroundColor: 'white',
              ":hover": {
                color: '#9D42DA',
                backgroundColor: 'white'
              },
              marginTop: '15px',
            }} onClick={() => setOpenBookNowModal(true)} className="bookNowText">{strings.bookNow.toUpperCase()}</Button>
          {/* <Text>
            <div className="bookNowText" onClick={() => setOpenBookNowModal(true)}>{strings.bookNow.toUpperCase()}</div>
          </Text> */}
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
      <Modal
        open={openBookNowModal}
        onClose={() => setOpenBookNowModal(false)}
        style={{ display: 'flex', flexDirection: "column", justifyContent: "start", alignItems: 'flex-end', backgroundColor: 'transparent', paddingTop: '40px', paddingRight: '40px' }}
      >
        <>
          {/* <Box component={"div"} className='partnersMainContainer'>
          <Box component={"div"} onClick={() => setOpenBookNowModal(false)}>
            <CloseIcon />
          </Box>
          <Box component="div" className='partnersInsideContainer'>
            {
              partnersArray?.map((item, index) => {
                return (
                  <Box component="div" style={{ display: 'flex', flexDirection: 'row', width: "40%", justifyContent: "center", alignItems: "center", cursor: 'pointer' }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: '10px 10px' }} onClick={() => onClickPartners(index)}>
                      <img src={item?.image} className='partnersImage' />
                      <Typography component={"text"} className='partnersName'>{item?.desc}</Typography>
                    </div>
                    {
                      (index + 1 % 2) == 0 &&
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: '10px 10px' }} onClick={() => onClickPartners(index + 1)}>
                        <img src={partnersArray?.[index + 1]?.item?.image} className='partnersImage' />
                        <Typography component={"text"} className='partnersName'>{partnersArray?.[index + 1]?.item?.desc}</Typography>
                      </div>
                    }
                  </Box>
                )
              })
            }
          </Box>
        </Box> */}
          {
            partnersArray?.map((item, index) => {
              return (
                <img src={item?.image} className="partnerImage" style={{ animationDelay: `${index * 0.1}s` }} onClick={() => onClickPartners(index)}></img>
              )
            })
          }
        </>
      </Modal>
    </Box >
  );
};

export default Home;
