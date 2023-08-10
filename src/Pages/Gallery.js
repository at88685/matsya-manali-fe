import React from "react";
import { Grid } from "@mui/material";
import "./Styles/gallery.css";
import CarouselComponent from "../Components/CarouselComponent";
import { InsideImagesList, OutsideImagesList, BalconyViewImagesList } from "../Constants/ImagesList";

const Gallery = () => {
  return (
    <div className="gallery-container">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: '40px'
        }}
      >
        <div className="galleryText">Discover Our Gallery</div>
        <div className="divider"></div>
      </div>
      <Grid container xs={12}>
        <Grid item xs={12} md={4}>
          <CarouselComponent imagesList={InsideImagesList} caption="Enchanting Innards" />
        </Grid>
        <Grid item xs={12} md={4}>
          <CarouselComponent imagesList={OutsideImagesList} caption="Scenic Surrounds" />
        </Grid>
        <Grid item xs={12} md={4}>
          <CarouselComponent imagesList={BalconyViewImagesList} caption="Veranda Vista" />
        </Grid>
      </Grid>
      <div></div>
    </div>
  );
};

export default Gallery;
