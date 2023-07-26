import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List,
  Button,
  Tooltip,
  ClickAwayListener,
  Divider,
  Box,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseIcon from '@mui/icons-material/Close'
import { Link } from "react-scroll";
import { headerLogo } from "../Constants/ImagesList";
import { motion, useAnimation } from "framer-motion";
import { images } from "../Constants/ImagesList";

const SideNav = () => {
  const [open, setOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const handleClickAway = () => {
    setOpen(false);
  };
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

          <ClickAwayListener onClickAway={handleClickAway}>
            <div>
              <Tooltip
                open={open}
                onClose={() => setOpen(false)}
                title={
                  <div className="tooltip">
                    {/* <Button
                      variant="contained"
                      color="secondary"
                      onClick={handleClickAway}
                      sx={{ marginTop: "1rem" }}
                    >
                      Agoda
                    </Button>
                    <Button
                      sx={{ margin: "1rem 0" }}
                      variant="contained"
                      color="secondary"
                      onClick={handleClickAway}
                    >
                      MakeMyTrip
                    </Button> */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', cursor: 'pointer', marginTop: '0.2rem' }}
                    >
                      <img src={images.mmtIcon} height="30px" width="30px" alt="MakeMyTrip" />
                      <div className="bookingTitle" style={{ marginLeft: '10px' }}>
                        MMT
                      </div>
                    </motion.div>
                    <div style={{ backgroundColor: 'white', height: '1px', marginTop: '0.4rem' }}></div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', cursor: 'pointer' }}
                    >
                      <img src={images.agodaLogo} height="40px" width="40px" alt="Agoda" />
                      <div className="bookingTitle" style={{ marginLeft: '10px' }}>
                        Agoda
                      </div>
                    </motion.div>
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
          </ClickAwayListener>
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
