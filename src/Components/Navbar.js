// import { Tabs, Tab } from '@mui/icons-material'
import { AppBar, Button, Grid, Toolbar, Tooltip, ClickAwayListener, Tab, useTheme, useMediaQuery, styled, Box, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import './styles/navbar.css'
import SideNav from './SideNav';
import { Link } from 'react-scroll';
import { headerLogo, images, logos } from '../Constants/ImagesList';
import { Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { AppContext } from '../utils/context';

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
    const { contextState, setContextState } = useContext(AppContext);
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    const [openBookNowModal, setOpenBookNowModal] = useState(false)

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
            if (!contextState?.isScrolled) {
                setContextState((prevState) => ({
                    ...prevState,
                    isScrolled: scrolled
                }))
            }
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
    const onClickBookNow = () => {
        setOpenBookNowModal(!openBookNowModal)
    }
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
                            <Link to="bookNow"
                                smooth={true}
                                duration={600}
                                onClick={onClickBookNow}
                            >
                                <Tab label="Book Now"></Tab>
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
                            {/* <Link onClick={handleOpenMenu}
                                smooth={true}
                                duration={600}
                                offset={-100}
                            >
                                <Tab label="Book Now" ></Tab>
                            </Link> */}
                            {/* <div>
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
                        </Grid>
                    </Grid>}
            </Toolbar>
            <Modal
                open={openBookNowModal}
                onClose={() => setOpenBookNowModal(false)}
                disableAutoFocus={true}
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
                                <img src={item?.image} className="partnerImage" style={{ animationDelay: `${index * 0.1}s` }} onClick={() => onClickPartners(index)} />
                            )
                        })
                    }
                </>
            </Modal>
        </TransparentAppBar >
    )
}

export default Navbar