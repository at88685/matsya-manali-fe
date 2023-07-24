// import { Tabs, Tab } from '@mui/icons-material'
import { AppBar, Button, Grid, Toolbar, Tooltip, ClickAwayListener, Tab, useTheme, useMediaQuery, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './styles/navbar.css'
import SideNav from './SideNav';
import { Link } from 'react-scroll';
import { headerLogo } from '../Constants/ImagesList';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { images } from '../Constants/ImagesList';

const TransparentAppBar = styled(AppBar)(({ theme, isScrolled }) => ({
    backgroundColor: isScrolled ? 'whitesmoke' : '#0000004D',
    boxShadow: 'none',
    '& img': isScrolled ? {
        height: '5rem',
        width: '5rem',
    } : {
        height: '6rem',
        width: '6rem',
    },
    '& .MuiTab-root': isScrolled ? {
        color: 'black',
        opacity: .7
    } : {
        color: 'white',
    },
    '& .MuiTab-root:hover': {
        opacity: 1,
    }
    // Add any additional styles you need for the AppBar or its child elements here
}));


const Navbar = () => {
    // const [value, setValue] = useState();
    const [open, setOpen] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'))
    const handleClick = () => {
        setOpen((prevOpen) => !prevOpen);
        setShowDropdown(!setShowDropdown);
    };

    const handleClickAway = () => {
        setOpen(false);
    };

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const scrolled = scrollY >= window.innerHeight;
            setIsScrolled(scrolled);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleDropdown = () => {
        setShowDropdown((prevState) => !prevState);
    };
    return (
        <TransparentAppBar position="fixed" isScrolled={isScrolled}>
            <Toolbar>
                {isMatch ? <>
                    <Grid container>
                        <Grid item xs={6}>
                            <div className='headerLogo'>
                                <img src={headerLogo} alt="abc"></img>
                            </div>
                        </Grid>

                    </Grid>
                    <Grid item xs={6}>
                        <SideNav />
                    </Grid>

                </> :
                    <Grid container alignItems="center" >
                        <Grid item xs={3} sx={{ display: 'flex' }}>
                            <div className='headerLogo'>
                                <img src={headerLogo} alt="abc"></img>
                            </div>

                        </Grid>
                        <Grid item xs={9} container justifyContent="end" spacing={2}>

                            <Link to="homeid"
                                smooth={true}
                                duration={600}>
                                <Tab label="Home"></Tab> </Link>
                            <Link
                                to="roomsid"
                                smooth={true}
                                duration={600}
                            >
                                <Tab label="Rooms" ></Tab>
                            </Link>

                            <Link to="servicesid"
                                smooth={true}
                                duration={600}>
                                <Tab label="Services" ></Tab></Link>
                            <Link to="footerid"
                                smooth={true}
                                duration={600} >
                                <Tab label="Contact Us" ></Tab></Link>
                            <ClickAwayListener onClickAway={() => (handleClickAway)}>
                                <Tooltip
                                    open={open}
                                    onClose={() => setOpen(false)}
                                    title={
                                        <div className='tooltip'>
                                            {/* <Button variant="contained" color='secondary' onClick={handleClickAway} sx={{ marginTop: '1rem' }}>
                                                Agoda
                                            </Button>
                                            <Button sx={{ margin: '1rem 0' }} variant="contained" color='secondary' onClick={handleClickAway}>
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
                                    <Tab label="Book Now" onClick={handleClick}></Tab>
                                </Tooltip>
                            </ClickAwayListener>
                        </Grid>

                    </Grid>}
            </Toolbar>
        </TransparentAppBar>
    )
}

export default Navbar