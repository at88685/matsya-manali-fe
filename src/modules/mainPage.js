import '../App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from "react";
import Navbar from '../Components/Navbar';
import Home from '../Pages/Home';
import Rooms from '../Pages/Rooms';
import Gallery from '../Pages/Gallery';
import RoomServ from '../Pages/RoomServ';
import About from '../Pages/About';
import Footer from '../Components/Footer';

const MainPage = () => {
    return (
        <>
            <Navbar />
            <Home />
            <Rooms />
            <RoomServ />
            <Gallery />
            <About />
            <Footer />
        </>
    )
}

export default MainPage