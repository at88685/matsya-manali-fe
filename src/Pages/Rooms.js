import React from "react";
import { Grid, Typography, Box, Divider } from "@mui/material";
import "./Styles/rooms.css";
import { RoomsList } from "../Constants/RoomsList";

const Rooms = () => {
  return (
    <>
      <div className="rooms-container" id="roomsid">
        <Typography variant="h2" color="initial" sx={{ textAlign: "center" }}>
          Rooms
        </Typography>
        {RoomsList.map((room, index) => (
          <>
            {index % 2 === 0 ? (
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
                        width: "fit-content",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                      }}
                    >
                      <p className="room-title">{room.title}</p>
                      <p className="room-description">{room.description}</p>
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
                <Divider/>{" "}
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
                      <p className="room-title">{room.title}</p>
                      <p className="room-description">{room.description}</p>
                    </Box>
                  </Grid>
                </Grid>
                <Divider/>
              </>
            )}
          </>
        ))}
      </div>
    </>
  );
};

export default Rooms;