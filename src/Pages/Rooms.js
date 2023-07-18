import React from 'react'
import { Grid, Typography, Box, Divider } from '@mui/material'
import './Styles/rooms.css'
import { RoomsList } from '../Constants/RoomsList'

const Rooms = () => {
    return (
        <>
            <div className='rooms-container' id='roomsid'>
                <div className='roomAndDividerDiv'>
                    <div className='roomsText'>Rooms</div>
                    <div className="divider" ></div>
                </div>
                {RoomsList.map((room, index) => (
                    <>
                        <Grid container key={index} sx={{ width: '100%', height: 'fit-content', display: 'flex', justifyContent: 'space-around', margin: '1rem 0' }}>
                            <Grid item xs={12} md={5} >
                                <Box sx={{ display: 'flex', flexDirection: 'column', width: 'fit-content', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                    <div className='room-title'>{room.title}</div>
                                    <div className='room-description'>
                                        {room.description}
                                    </div>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={5} sx={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}>
                                <div className='image-box'>
                                    <img src={room.image} alt='abc'></img>
                                </div>
                            </Grid>
                        </Grid>
                        <Divider />
                    </>
                ))}
            </div>
        </>
    )
}

export default Rooms