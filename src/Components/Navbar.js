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
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

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
            const scrolled = scrollY >= window.innerHeight - 80;
            setIsScrolled(scrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
        <TransparentAppBar position="fixed" isScrolled={isScrolled}>
            <Toolbar>
                {isMatch ? <>
                    <Grid container>
                        <Grid item xs={6}>
                            <Link to="homeid"
                                smooth={true}
                                duration={600}
                            >
                                <div className='headerLogo' >
                                    <img src={headerLogo} alt="abc"></img>
                                </div>
                            </Link>
                        </Grid>

                    </Grid>
                    <Grid item xs={6}>
                        <SideNav />
                    </Grid>

                </> :
                    <Grid container alignItems="center" >
                        <Grid item xs={3} sx={{ display: 'flex' }}>
                            <Link to="homeid"
                                smooth={true}
                                duration={600}
                            >
                                <div className='headerLogo'>
                                    <img src={headerLogo} alt="abc"></img>
                                </div>
                            </Link>

                        </Grid>
                        <Grid item xs={9} container justifyContent="end" spacing={2}>

                            <Link to="homeid"
                                smooth={true}
                                duration={600}
                            >
                                <Tab label="Home"></Tab> </Link>
                            <Link
                                to="roomsid"
                                smooth={true}
                                duration={600}
                                offset={-100}
                            >
                                <Tab label="Rooms" ></Tab>
                            </Link>

                            <Link to="servicesid"
                                smooth={true}
                                duration={600}
                                offset={-100}
                            >
                                <Tab label="Services" ></Tab></Link>
                            <Link to="footerid"
                                smooth={true}
                                duration={600}
                            >
                                <Tab label="Contact Us" ></Tab>
                            </Link>
                            {/* <ClickAwayListener onClickAway={() => (handleClickAway)}>
                                <Tooltip
                                    open={open}
                                    onClose={() => setOpen(false)}
                                    title={
                                        <div className='tooltip' onClick={openMMTLink}>
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
                                            <div style={{ height: '1px', marginTop: '0.4rem' }}></div>

                                        </div>
                                    }
                                >
                                    <Tab label="Book Now" onClick={handleClick}></Tab>
                                </Tooltip>
                            </ClickAwayListener> */}
                            <Link onClick={handleOpenMenu}
                                smooth={true}
                                duration={600}
                                offset={-100}
                            >
                                <Tab label="Book Now" ></Tab>
                            </Link>
                            <div>
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
                            </div>



                        </Grid>

                    </Grid>}
            </Toolbar>
        </TransparentAppBar>
    )
}

export default Navbar