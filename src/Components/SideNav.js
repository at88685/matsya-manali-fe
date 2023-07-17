import React, { useState } from 'react'
import { Drawer, IconButton, ListItemButton, ListItemIcon, ListItemText, List, Button, Tooltip, ClickAwayListener, Divider} from '@mui/material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Link } from 'react-scroll';



const SideNav = () => { 
    const [open, setOpen] = useState(false)
    const [openDrawer, setOpenDrawer] = useState(false)
    const handleClick = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClickAway = () => {
        setOpen(false);
    };
  return (
    <>
    <Drawer open={openDrawer} onClose={()=>{setOpenDrawer(false)}} 
    PaperProps={{
        sx: {
            width: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            paddingTop: '1rem',
            textAlign: 'center'
          },
    }}>
    <List>
        <ListItemButton>
            <ListItemIcon>
                <ListItemText>Home</ListItemText>
            </ListItemIcon>
        </ListItemButton>
        <Divider/>
        <ListItemButton >
            <ListItemIcon>
            <Link
                                    to="roomsid"
                                    smooth={true}
                                    duration={600}
                                    onClick={()=>{setOpenDrawer(false)}}
                                >
                                    <ListItemText>Rooms</ListItemText>
                                </Link>
               
            </ListItemIcon>
        </ListItemButton>
        <Divider/>
        <ListItemButton>
            <ListItemIcon>
                <ListItemText>Services</ListItemText>
            </ListItemIcon>
        </ListItemButton>
        <Divider/>
        <ListItemButton>
            <ListItemIcon>
                <ListItemText>Contact Us</ListItemText>
            </ListItemIcon>
        </ListItemButton>
        
        <ClickAwayListener onClickAway={handleClickAway}>
                                <div>
                                    <Tooltip
                                        open={open}
                                        onClose={() => setOpen(false)}
                                        title={
                                            <div className='tooltip'>
                                                <Button variant="contained" color='secondary' onClick={handleClickAway} sx={{ marginTop: '1rem'}}>
                                                    Agoda
                                                </Button>
                                                <Button sx={{ margin: '1rem 0'}} variant="contained" color='secondary' onClick={handleClickAway}>
                                                    MakeMyTrip
                                                </Button>
                                            </div>
                                        }
                                    >
                                        <ListItemButton>
            <ListItemIcon>
                <ListItemText><Button variant="contained" color='secondary' onClick={handleClick}>
                                            Book Now
                                        </Button></ListItemText>
            </ListItemIcon>
        </ListItemButton>
                                        
                                    </Tooltip>
                                </div>
                            </ClickAwayListener>
    </List>
    </Drawer>

    <IconButton onClick={()=>{setOpenDrawer(!openDrawer)}}>
    <MenuRoundedIcon/>
    </IconButton>
    </>
  )
}

export default SideNav