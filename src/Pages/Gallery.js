import React from "react";
import { Grid, Box } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import "./Styles/gallery.css";

const Gallery = () => {
  const images = [
    require("../assets/images/hotelImages/image1.JPG"),
    require("../assets/images/hotelImages/image2.JPG"),
    require("../assets/images/hotelImages/image3.JPG"),
    require("../assets/images/hotelImages/image4.JPG"),
    require("../assets/images/hotelImages/image5.JPG"),
    require("../assets/images/hotelImages/image6.JPG"),
    require("../assets/images/hotelImages/image7.JPG"),
    require("../assets/images/hotelImages/image8.JPG"),
    require("../assets/images/hotelImages/image9.JPG"),
    require("../assets/images/hotelImages/image10.JPG"),
    require("../assets/images/hotelImages/image11.JPG"),
    require("../assets/images/hotelImages/image12.JPG"),
    require("../assets/images/hotelImages/image13.JPG"),
    require("../assets/images/hotelImages/image14.JPG"),
    require("../assets/images/hotelImages/image15.JPG"),
    require("../assets/images/hotelImages/image16.JPG"),
    require("../assets/images/hotelImages/image17.JPG"),
    require("../assets/images/hotelImages/image18.JPG"),
    require("../assets/images/hotelImages/image19.JPG"),
    require("../assets/images/hotelImages/image20.JPG"),
    // Add more image URLs here
  ];

  const indicatorStyle = {
    display: "none",
  };
  return (
    <div className="gallery-container">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="galleryText">Gallery</div>
        <div className="divider"></div>
      </div>
      <Grid container xs={12}>
        <Grid item xs={12} md={4}>
          <div className="gallery-item">
            <div className="subTitle">Inside View</div>
            <Box className="carasoul-box">
              <Carousel
                navButtonsAlwaysVisible={false}
                autoPlay={true}
                indicatorIconButtonProps={{
                  style: indicatorStyle,
                }}
              >
                {images.map((item, index) => {
                  return (
                    <img
                      key={index}
                      src={item}
                      alt="insideview"
                      style={{
                        objectFit: "cover",
                        borderRadius: "10px",
                        height: "30rem",
                      }}
                      width="100%"
                    />
                  );
                })}
              </Carousel>
            </Box>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className="gallery-item">
            <div className="subTitle">Outside View</div>
            <Box className="carasoul-box">
              {/* <img src={images[currentImageIndex1]} alt={`Slide ${currentImageIndex1 + 1}`} style={{ height: '100%', width: '100%', objectFit: 'cover' }} /> */}
              <Carousel
                navButtonsAlwaysVisible={false}
                autoPlay={true}
                indicatorIconButtonProps={{
                  style: indicatorStyle,
                }}
              >
                {images.map((item, index) => {
                  return (
                    <img
                      key={index}
                      src={item}
                      alt="insideview"
                      style={{
                        objectFit: "cover",
                        borderRadius: "10px",
                        height: "30rem",
                      }}
                      width="100%"
                    />
                  );
                })}
              </Carousel>
            </Box>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className="gallery-item">
            <div className="subTitle">Balcony View</div>
            <Box className="carasoul-box">
              {/* <img src={images[currentImageIndex2]} alt={`Slide ${currentImageIndex2 + 1}`} style={{ height: '100%', width: '100%', objectFit: 'cover' }} /> */}
              <Carousel
                navButtonsAlwaysVisible={false}
                autoPlay={true}
                indicatorIconButtonProps={{
                  style: indicatorStyle,
                }}
              >
                {images.map((item, index) => {
                  return (
                    <img
                      key={index}
                      src={item}
                      alt="insideview"
                      style={{
                        objectFit: "cover",
                        borderRadius: "10px",
                        height: "30rem",
                      }}
                      width="100%"
                    />
                  );
                })}
              </Carousel>
            </Box>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Gallery;
