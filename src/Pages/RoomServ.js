import React from 'react'
import { Grid, Box } from '@mui/material'
import './Styles/services.css'
import { images } from '../Constants/ImagesList'
import { strings } from '../Constants/Strings'

const RoomServ = () => {
  return (
    <>
      <div className='services-container' id='servicesid'>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <div className='servicesText' >{strings.accomodationOfferings}</div>
          <div className="divider" />
        </div>
        <Grid container xs={12} sx={{ paddingLeft: '2%', paddingRight: '2%' }} >
          <Grid item xs={12} md={4}>
            <Box className='free-parking-box'>
              <div className="subTitle">{strings.freeParking}</div>
              <img src={images.parkingIcon} alt='parking-icon' className='servicesImages' />
              <div className="description" >{strings.freeParkingDesc}</div>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} >
            <Box className='fine-dine-box'>
              <div className="subTitle">{strings.fineDineRestraunt}</div>
              <img src={images.restrauntIcon} alt='dining-icon' className='servicesImages' />
              <div className="description" >{strings.fineDineDesc}
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} >
            <Box className='wifi-box'>
              <div className="subTitle">{strings.wifi}</div>
              <img src={images.wifiicon} alt='wifi-icon' className='servicesImages' />
              <div className="description" >{strings.wifiDesc}
              </div>
            </Box>
          </Grid>
        </Grid>
        <Grid container xs={12} sx={{ paddingLeft: '2%', paddingRight: '2%' }} >
          <Grid item xs={12} md={4}>
            <Box className='panaromic-view-box'>
              <div className="subTitle">{strings.panaromicView}</div>
              <img src={images.panaromicViewIcon} alt='parking-icon' className='servicesImages' />
              <div className="description" >{strings.panaromicDesc}</div>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box className='bonfire-box'>
              <div className="subTitle">{strings.bonFire}</div>
              <img src={images.bonfireIcon} alt='dining-icon' className='servicesImages' />
              <div className="description">{strings.bonFireDesc}</div>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box className='bonfire-box'>
              <div className="subTitle">{strings.compilemtaryBreakfast}</div>
              <img src={images.breakfastIcon} alt='dining-icon' className='servicesImages' />
              <div className="description" >{strings.complimentaryDesc}
              </div>
            </Box>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default RoomServ