import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  ListItemText,
  List,
  Button,
  Divider,
  Box,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseIcon from '@mui/icons-material/Close'
import { Link } from "react-scroll";
import { headerLogo } from "../Constants/ImagesList";
import { motion, useAnimation } from "framer-motion";
import { images } from "../Constants/ImagesList";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const SideNav = () => {
  const [open, setOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
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

  return (
    <>
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => {
          setOpenDrawer(false);
        }}
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
        <MenuRoundedIcon />
      </IconButton>
    </>
  );
};

export default SideNav;
