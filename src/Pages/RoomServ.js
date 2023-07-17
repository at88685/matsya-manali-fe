import React from 'react'
import {Grid, Typography, Box} from '@mui/material'
import './Styles/services.css'
const RoomServ = () => {
  return (
    <>
    <div className='services-container'>

    <Typography variant="h2" color="initial" sx={{ textAlign: 'center' }}>Services</Typography>
    <Grid container xs={12}>
    <Grid item xs={12} md={4}>
   <Box className='services-box'>
   <div className="subTitle">Free Parking</div>
   <div className='ser-image-box'></div>
   <div className="description" >We understand that finding a suitable parking spot can often be a frustrating task, especially in bustling city centers. By offering free parking, we aim to alleviate this concern and ensure that your stay with us is as smooth as possible.
              </div>
   </Box>
    </Grid>
    <Grid item xs={12} md={4}>
    <Box className='services-box'>
   <div className="subTitle">Fine Dine Restraunt</div>
   <div className='ser-image-box'></div>
   <div className="description" >Indulge in a culinary journey like no other at our hotel's exquisite fine-dining restaurant.  Each plate is a work of art, meticulously crafted to please both the eye and the taste buds.
              </div>
   </Box>
    </Grid>
    <Grid item xs={12} md={4}>
    <Box className='services-box'>
   <div className="subTitle">Wi-Fi</div>
   <div className='ser-image-box'></div>
   <div className="description" >we understand the importance of staying connected, which is why we are thrilled to provide complimentary high-speed Wi-Fi for all our guests. Our reliable and secure network ensures a fast and stable connection, ensuring that you can stream, download, and surf without interruptions.
    </div>
   </Box>
    </Grid>
    </Grid>
    </div>
    </>
  )
}

export default RoomServ