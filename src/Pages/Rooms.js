import React from "react";
import { Grid, Box, Divider, useMediaQuery, useTheme } from "@mui/material";
import "./Styles/rooms.css";
import { RoomsList } from "../Constants/RoomsList";

const Rooms = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <div className="rooms-container" id="roomsid">
        <div className="gallery-container">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="galleryText">Rooms</div>
            <div className="divider"></div>
          </div>

          {RoomsList.map((room, index) => (
            <>
              {index % 2 === 0 || isMobile ? (
                <>
                  <Grid
                    container
                    key={index}
                    sx={{
                      width: "100%",
                      height: "fit-content",
                      display: "flex",
                      justifyContent: "space-around",
                      margin: "1rem 0",
                    }}
                  >
                    <Grid item xs={12} md={5}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          minWidth: "fit-content",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "100%",
                        }}
                      >
                        <div className="room-title">{room.title}</div>
                        <div className="room-description">
                          {room.description}
                        </div>
                      </Box>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={5}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <div className="image-box">
                        <img src={room.image} alt="abc"></img>
                      </div>
                    </Grid>
                  </Grid>
                  <Divider />
                </>
              ) : (
                <>
                  <Grid
                    container
                    key={index}
                    sx={{
                      width: "100%",
                      height: "fit-content",
                      display: "flex",
                      justifyContent: "space-around",
                      margin: "1rem 0",
                    }}
                  >
                    <Grid
                      item
                      xs={12}
                      md={5}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <div className="image-box">
                        <img src={room.image} alt="abc"></img>
                      </div>
                    </Grid>
                    <Grid item xs={12} md={5}>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          width: "fit-content",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "100%",
                        }}
                      >
                        <div className="room-title">{room.title}</div>
                        <div className="room-description">
                          {room.description}
                        </div>
                      </Box>
                    </Grid>
                  </Grid>
                  <Divider />
                </>
              )}
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Rooms;
