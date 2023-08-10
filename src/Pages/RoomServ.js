import React from 'react'
import { Grid, Box } from '@mui/material'
import './Styles/services.css'
import { images } from '../Constants/ImagesList'

const RoomServ = () => {
  return (
    <>
      <div className='services-container' id='servicesid'>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <div className='servicesText' >Accomodation Offerings</div>
          <div className="divider" ></div>
        </div>
        <Grid container xs={12} sx={{ paddingLeft: '2%', paddingRight: '2%' }} >
          <Grid item xs={12} md={4}>
            <Box className='free-parking-box'>
              <div className="subTitle">Free Parking</div>
              {/* <div className='ser-image-box'> */}
              <img src={images.parkingIcon} alt='parking-icon' className='servicesImages'></img>
              {/* </div> */}
              <div className="description" >Offering free parking, we ease the frustration of finding a spot in bustling city centers.Alleviating urban parking woes with our complimentary spaces.Providing relief by granting hassle-free parking solutions.
              </div>
              {/* <div className="description" >We understand that finding a suitable parking spot can often be a frustrating task, especially in bustling city centers. By offering free parking, we aim to alleviate this concern and ensure that your stay with us is as smooth as possible.
              </div> */}
            </Box>
          </Grid>
          <Grid item xs={12} md={4} >
            <Box className='fine-dine-box'>
              <div className="subTitle">Fine Dine Restraunt</div>
              {/* <div className='ser-image-box'> */}
              <img src={images.restrauntIcon} alt='dining-icon' className='servicesImages'></img>
              {/* </div> */}
              {/* <div className="description" >Indulge in a culinary journey like no other at our hotel's exquisite fine-dining restaurant.  Each plate is a work of art, meticulously crafted to please both the eye and the taste buds.
              </div> */}
              <div className="description" >Indulge in a culinary journey like no other at our hotel's exquisite fine-dining restaurant.  Each plate is a work of art, meticulously crafted to please both the eye and the taste buds.
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} >
            <Box className='wifi-box'>
              <div className="subTitle">Wi-Fi</div>
              {/* <div className='ser-image-box'> */}
              <img src={images.wifiicon} alt='wifi-icon' className='servicesImages'></img>
              {/* </div> */}
              {/* <div className="description" >We understand the importance of staying connected, which is why we are thrilled to provide complimentary high-speed Wi-Fi for all our guests. Our reliable and secure network ensures a fast and stable connection, ensuring that you can stream, download, and surf without interruptions.
              </div> */}
              <div className="description" >Thrilled to offer complimentary high-speed Wi-Fi for all guests, ensuring a reliable, secure, and uninterrupted connection. Stay connected, stream, download, and surf hassle-free with our fast network.
              </div>
            </Box>
          </Grid>
        </Grid>
        <Grid container xs={12} sx={{ paddingLeft: '2%', paddingRight: '2%' }} >
          <Grid item xs={12} md={4}>
            <Box className='panaromic-view-box'>
              <div className="subTitle">Panaromic View</div>
              {/* <div className='ser-image-box'> */}
              <img src={images.panaromicViewIcon} alt='parking-icon' className='servicesImages'></img>
              {/* </div> */}
              {/* <div className="description" >Indulge in the epitome of visual splendor at our hotel, where the allure of a panoramic view becomes a captivating reality. Perched in an enviable location, our establishment offers an extensive and unobstructed perspective of nature's finest masterpieces. Embrace the enchanting vistas of bustling cityscapes or serene valleys, depending on your preference.
              </div> */}
              <div className="description" >Experience visual splendor at our hotel with captivating panoramic views. Our enviable location offers unobstructed perspectives of nature's finest masterpieces. Embrace enchanting vistas of bustling cityscapes or serene valleys.
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box className='bonfire-box'>
              <div className="subTitle">BonFire</div>
              {/* <div className='ser-image-box'> */}
              <img src={images.bonfireIcon} alt='dining-icon' className='servicesImages'></img>
              {/* </div> */}
              {/* <div className="description" >We invite you to experience the enchantment of a bonfire, a timeless tradition that brings people together in the warmth of camaraderie and the mesmerizing glow of dancing flames. Nestled amidst the picturesque surroundings of our property, we offer a designated space where guests can gather and partake in the joy of a controlled outdoor fire.
              </div> */}
              <div className="description" >Join us for an enchanting bonfire experience—a timeless tradition uniting people in camaraderie and mesmerizing flames. Enjoy our designated outdoor space, nestled in picturesque surroundings.
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box className='bonfire-box'>
              <div className="subTitle">Complimentary Breakfast</div>
              {/* <div className='ser-image-box'> */}
              <img src={images.breakfastIcon} alt='dining-icon' className='servicesImages'></img>
              {/* </div> */}
              {/* <div className="description" >We take pride in enhancing your stay with the delightful offering of a complimentary breakfast. As our esteemed guest, you can savor the convenience of waking up to a delicious morning meal, all at no additional cost. Indulge in a delightful array of options thoughtfully prepared to cater to diverse tastes and preferences. From freshly baked pastries and a selection of cereals to energizing fruits and hearty eggs, our breakfast spread is designed to provide a satisfying start to your day.
              </div> */}
              <div className="description" >Enjoy a prideful stay with our complimentary breakfast. Wake up to delicious morning meals, catered to diverse tastes and preferences. From pastries, cereals, to fruits and eggs, our satisfying breakfast spread awaits you.
              </div>
            </Box>
          </Grid>

        </Grid>


      </div >
    </>
  )
}

export default RoomServ