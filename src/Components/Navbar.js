// import { Tabs, Tab } from '@mui/icons-material'
import { AppBar, Button, Grid, Toolbar, Tooltip, ClickAwayListener, Tabs, Tab, Box, useTheme, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import './styles/navbar.css'
import SideNav from './SideNav';
import { Link } from 'react-scroll';





const Navbar = () => {
    const [value, setValue] = useState();
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'))
    const handleClick = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClickAway = () => {
        setOpen(false);
    };
    return (
        <AppBar position="fixed" sx={{ backgroundColor: 'white' }}>
            <Toolbar>
                {isMatch ? <>
                    <Grid container>
                        <Grid item xs={6}>
                            <p className='head-title'>
                                Matsya Manali
                            </p>
                        </Grid>

                    </Grid>
                    <Grid item xs={6}>
                        <SideNav />
                    </Grid>

                </> :
                    <Grid container alignItems="center" >
                        <Grid item xs={3} sx={{ display: 'flex' }}>
                            <p className='head-title'>
                                Matsya Manali
                            </p>
                        </Grid>
                        <Grid item xs={6} container justifyContent="center" spacing={2}>
                            <Tabs value={value} indicatorColor='secondary' color='inherit' onChange={(e, v) => { setValue(v) }}>


                                <Link to="homeid"
                                    smooth={true}
                                    duration={600}>
                                    <Tab label="Home" sx={{ color: 'black' }}></Tab></Link>
                                <Link
                                    to="roomsid"
                                    smooth={true}
                                    duration={600}
                                >
                                    <Tab label="Rooms" sx={{ color: 'black' }}></Tab>
                                </Link>

                                <Link to="servicesid"
                                    smooth={true}
                                    duration={600}>
                                    <Tab label="Services" sx={{ color: 'black' }}></Tab></Link>
                                <Link to="footerid"
                                    smooth={true}
                                    duration={600} >
                                    <Tab label="Contact Us" sx={{ color: 'black' }}></Tab></Link>
                            </Tabs>
                        </Grid>
                        <Grid item xs={3} container sx={{ display: 'flex', justifyContent: 'end' }}>
                            <Box >
                                <ClickAwayListener onClickAway={handleClickAway}>
                                    <div>
                                        <Tooltip
                                            open={open}
                                            onClose={() => setOpen(false)}
                                            title={
                                                <div className='tooltip'>
                                                    <Button variant="contained" color='secondary' onClick={handleClickAway} sx={{ marginTop: '1rem' }}>
                                                        Agoda
                                                    </Button>
                                                    <Button sx={{ margin: '1rem 0' }} variant="contained" color='secondary' onClick={handleClickAway}>
                                                        MakeMyTrip
                                                    </Button>
                                                </div>
                                            }
                                        >
                                            <Button variant="contained" color='secondary' onClick={handleClick}>
                                                Book Now
                                            </Button>
                                        </Tooltip>
                                    </div>
                                </ClickAwayListener>
                            </Box>
                        </Grid>
                    </Grid>}

            </Toolbar>
        </AppBar>
    )
}

export default Navbar