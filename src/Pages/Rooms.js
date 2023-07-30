import React, { useEffect } from "react";
import "./Styles/rooms.css";
import { RoomsSeperated } from "../Constants/RoomsList";
import { SpecialRoom } from "../Constants/RoomsList";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Rooms = () => {
  const [ourSpecialRef, useOurSpecialRef] = useInView({
    triggerOnce: true, // Animation triggers only once when it becomes visible
    threshold: 0.1,
  })
  const [valleyRef, useValleyRef] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [solangRef, useSolangRef] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [rohtangRef, useRohtangRef] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const fadeLeftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };
  const fadeRightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  };
  const fadeDownVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };
  const fadeUpVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 }
  };

  const variantsChangingRightToDownFuntion = () => {
    if (window.innerWidth < 535) {
      return fadeDownVariants;
    } else {
      return fadeRightVariants;
    }
  }

  const variantsChangingLeftToUpFuntion = () => {
    if (window.innerWidth < 535) {
      return fadeUpVariants;
    } else {
      return fadeLeftVariants;
    }
  }

  return (
    <>
      <div className="rooms-container" id="roomsid">
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
        {/* Valley View*/}
        <div className="valleyViewContainer">
          <motion.div className="valleyTextsDiv" ref={valleyRef}
            initial="hidden"
            animate={useValleyRef ? "visible" : "hidden"}
            variants={fadeUpVariants}
            transition={{ duration: 1.5 }} >
            <div className="valleyViewTitle">{RoomsSeperated.valleyView.title}</div>
            <div className="description">{RoomsSeperated.valleyView.description}
            </div>
          </motion.div>
          <motion.img src={RoomsSeperated.valleyView.image} alt="Slider Image 2" ref={valleyRef}
            initial="hidden"
            animate={useValleyRef ? "visible" : "hidden"}
            variants={variantsChangingRightToDownFuntion()}
            transition={{ duration: 1.5 }}
            className="valley-room-image"
          />
        </div>
        {/*Solang View*/}
        <div className="solangViewContainer">
          <motion.img src={RoomsSeperated.solangView.image} alt="Slider Image 2" ref={solangRef}
            initial="hidden"
            animate={useSolangRef ? "visible" : "hidden"}
            variants={fadeDownVariants}
            transition={{ duration: 1.5 }}
            className="solang-room-image"
          />
          <motion.div className="solangTextsDiv" ref={solangRef}
            initial="hidden"
            animate={useSolangRef ? "visible" : "hidden"}
            variants={variantsChangingLeftToUpFuntion()}
            transition={{ duration: 1.5 }}>
            <div className="valleyViewTitle">{RoomsSeperated.solangView.title}</div>
            <div className="description">{RoomsSeperated.solangView.description}
            </div>
          </motion.div>
        </div>
        {/* Rohtang View*/}
        <div className="rohtangViewContainer">
          <motion.div className="rohtangTextsDiv" ref={rohtangRef}
            initial="hidden"
            animate={useRohtangRef ? "visible" : "hidden"}
            variants={fadeUpVariants}
            transition={{ duration: 1.5 }}>
            <div className="valleyViewTitle">{RoomsSeperated.rohtangView.title}</div>
            <div className="description">{RoomsSeperated.rohtangView.description}
            </div>
          </motion.div>
          <motion.img src={RoomsSeperated.rohtangView.image} alt="Slider Image 2" ref={rohtangRef}
            initial="hidden"
            animate={useRohtangRef ? "visible" : "hidden"}
            variants={variantsChangingRightToDownFuntion()}
            transition={{ duration: 1.5 }}
            className="rohtang-room-image"
          />
        </div>
        {/*Our Specials*/}
        <div className="ourSpecialsMainDiv">
          <div className="galleryText">Our Specials</div>
          <div className="divider"></div>
        </div>
        <div className="ourSpecialsContentsDiv">
          <motion.img src={SpecialRoom.image} alt="Slider Image 2" ref={ourSpecialRef}
            initial="hidden"
            animate={useOurSpecialRef ? "visible" : "hidden"}
            variants={fadeDownVariants}
            transition={{ duration: 1.5 }}
            className="special-room-image"
          />
          <motion.div className="duplexMainDiv" ref={ourSpecialRef}
            initial="hidden"
            animate={useOurSpecialRef ? "visible" : "hidden"}
            variants={variantsChangingLeftToUpFuntion()}
            transition={{ duration: 1.5 }}>
            <div className="valleyViewTitle">{SpecialRoom.title}</div>
            <div className="description">{SpecialRoom.description}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Rooms;
