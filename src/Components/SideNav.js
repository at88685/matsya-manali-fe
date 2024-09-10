import React, { useContext, useEffect, useState } from "react";
import {
  Drawer,
  IconButton,
  ListItemText,
  List,
  Button,
  Divider,
  Box,
  Typography,
  Modal,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseIcon from '@mui/icons-material/Close'
import { Link } from "react-scroll";
import { headerLogo, logos } from "../Constants/ImagesList";
import { motion, useAnimation } from "framer-motion";
import { images } from "../Constants/ImagesList";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import "../Components/styles/navbar.css"
import { AppContext } from "../utils/context";

const SideNav = () => {
  const [open, setOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openBookNowModal, setOpenBookNowModal] = useState(false);
  const { contextState, setContextState } = useContext(AppContext);
  const [modalCoordinates, setModalCoordinates] = useState({ x: 0, y: 0 });
  console.log(modalCoordinates, "modalCoordinatesmodalCoordinates")
  const handleClickEvent = (event) => {
    console.log(event, "eventeventeventevent")
    const coordinates = {
      x: event.clientX,
      y: event.clientY,
    };
    setModalCoordinates(coordinates);
    // setOpenDrawer(false);
    setOpenBookNowModal((prev) => !prev);
  };


  // useEffect(() => {
  //   console.log(contextState, "contextStatecontextStatecontextState")
  // }, [contextState])
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
  const handleClick = () => {
    setOpen(true);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const openMmtLink = () => {
    window.open("https://www.makemytrip.com/hotels/hotel-details/?_branch_match_id=1182903915794133802&_branch_referrer=H4sIAAAAAAAAAyXN24rCMBSF4bfJpU0TqkXYiOjAiENF2j5AiFsbmtOkCRKfXmsv13%2BxviFGP22LQnivlR2nlREjmhyD8ivpTPFfH1%2FpbNmj3w0uoj7dgFHG6YaXZcV5takpXxOpYoZDd%2B57Il2yMWQ4NSQ4Z9oo8jUJre4KAzCkSOSAclQWaF1W89cSXIpzWS%2FFePhye%2B%2FbQQRs8Em0k2n6%2BIvzXV32CDNOAj6Us7N6T9aiboRB%2BL10P38tCZOEEhm%2BAU0qp3jsAAAA&checkin=08162023&checkout=08172023&city=CTKUU&cmp=hotelAppShareNew&country=IN&funnelName=HOTELS&hotelId=202307311533578036&locusId=CTKUU&locusType=city&region=IN&roomStayQualifier=2e0e&rsc=1e2e", "_black", "noreferrer");
  }

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

  const sideNavBarBookNowFunc = () => {
    if (openBookNowModal) {
      setOpenBookNowModal((prev) => !prev)
    }
  }

  return (
    <>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => {
          setOpenDrawer(false);
        }}
        onClick={sideNavBarBookNowFunc}
        PaperProps={{
          sx: {
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            paddingTop: "1rem",
            textAlign: "center",
          },
        }}
      >
        <Box sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'end',
          paddingRight: '10px'
        }}>
          <IconButton sx={{ alignItems: 'end' }}
            onClick={() => {
              setOpenDrawer(false);
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <div className='homeLogo'>
          <img src={headerLogo} alt="abc"></img>
        </div>
        <List>
          <Link
            to="homeid"
            smooth={true}
            duration={600}
            onClick={() => {
              setOpenDrawer(false);
            }}
          >
            <ListItemText>Home</ListItemText>
          </Link>

          <Divider />

          <Link
            to="roomsid"
            smooth={true}
            duration={600}
            offset={-100}
            onClick={() => {
              setOpenDrawer(false);
            }}
          >
            <ListItemText>Rooms</ListItemText>
          </Link>

          <Divider />

          <Link
            to="servicesid"
            smooth={true}
            duration={600}
            offset={-100}
            onClick={() => {
              setOpenDrawer(false);
            }}
          >
            <ListItemText>Services</ListItemText>
          </Link>

          <Divider />

          <Link
            to="footerid"
            smooth={true}
            duration={600}
            onClick={() => {
              setOpenDrawer(false);
            }}
          >
            <ListItemText>Contact Us</ListItemText>
          </Link>
          <Divider />
          <Link
            // to="footerid"
            smooth={true}
            duration={600}
            // onClick={() => {
            //   setOpenDrawer(false);
            //   setOpenBookNowModal(true)
            // }}
            onClick={handleClickEvent}
          >
            <ListItemText>Book Now</ListItemText>
          </Link>
          {
            openBookNowModal &&
            <Box
              component={'div'}
              style={{
                borderRadius: '10px',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                overflowY: 'scroll'
                // top: `${modalCoordinates.y}px`,
                // left: `${modalCoordinates.x}px`,
              }}
            >
              {/* Your modal content */}
              {
                partnersArray?.map((item, index) =>
                (
                  <img
                    key={index}
                    src={item?.image}
                    className="partnerSideNavImage"
                    style={{ animationDelay: `${index * 0.1}s`, marginTop: "10px" }}
                    onClick={() => onClickPartners(index)}
                  />
                )
                )
              }
            </Box>
          }

          {/* <ClickAwayListener onClickAway={handleClickAway}>
            <div >
              <Tooltip
                open={open}
                onClose={() => setOpen(false)}
                title={
                  <div className="tooltip" >
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', cursor: 'pointer', marginTop: '0.2rem' }}
                    // onClick={openMMTLink}
                    >
                      <img src={images.mmtIcon} height="30px" width="30px" alt="MakeMyTrip" />
                      <div className="bookingTitle" style={{ marginLeft: '10px' }}>
                        MMT
                      </div>
                    </motion.div>
                    <div style={{ height: '1px', marginTop: '0.4rem' }}></div>
                  </div>
                }
              >
                <ListItemButton>
                  <ListItemIcon>
                    <ListItemText>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={handleClick}
                      >
                        Book Now
                      </Button>
                    </ListItemText>
                  </ListItemIcon>
                </ListItemButton>
              </Tooltip>
            </div>
          </ClickAwayListener> */}
          {/* <Divider /> */}

          {/* <div>
            <Button onClick={handleOpenMenu} style={{ color: 'black' }}>
              Book Now
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClick={handleCloseMenu}
              getContentAnchorEl={null}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
              transformOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
              <MenuItem style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={openMmtLink}>
                <img
                  src={images.mmtIcon} height="30px" width="30px" alt="MakeMyTrip"
                />
                <div style={{ marginLeft: '10px' }}>MMT</div>
              </MenuItem>
            </Menu>
          </div> */}
        </List>
      </Drawer>

      <IconButton
        onClick={() => {
          setOpenDrawer(!openDrawer);
        }}
      >
        <MenuRoundedIcon style={{ color: contextState?.isScrolled ? "black" : "white" }} />
        {/* <DensityMediumIcon color='white' /> */}
      </IconButton>
      {/* <Modal
        open={openBookNowModal}
        onClose={() => setOpenBookNowModal(false)}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'transparent',
        }}
      > */}
      {
        // openBookNowModal &&
        // <Box
        //   component={'div'}
        //   style={{
        //     padding: '20px',
        //     borderRadius: '10px',
        //     color: 'white',
        //     display: 'flex',
        //     flexDirection: 'column',
        //     top: `${modalCoordinates.y}px`,
        //     left: `${modalCoordinates.x}px`,
        //     backgroundColor: 'red'
        //   }}
        // >
        //   {/* Your modal content */}
        //   {
        //     partnersArray?.map((item, index) =>
        //     (
        //       <img
        //         key={index}
        //         src={item?.image}
        //         className="partnerSideNavImage"
        //         style={{ animationDelay: `${index * 0.1}s`, marginTop: "10px" }}
        //         onClick={() => onClickPartners(index)}
        //       />
        //     )
        //     )
        //   }
        // </Box>
      }
      {/* </Modal> */}
    </>
  );
};

export default SideNav;
