import { Box } from '@mui/material';
import React from 'react'
import Carousel from "react-material-ui-carousel";

const CarouselComponent = (props) => {
  const { imagesList, caption } = props;
  const indicatorStyle = {
    display: "none",
  };
  return (
    <>
      <div className="gallery-item">
        <div className="subTitle">{caption}</div>
        <Box className="carasoul-box">
          <Carousel
            // animation='none'
            navButtonsAlwaysVisible={false}
            autoPlay={true}
            indicatorIconButtonProps={{
              style: indicatorStyle,
            }}
          >
            {imagesList.map((item, index) => {
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
    </>
  )
}

export default CarouselComponent