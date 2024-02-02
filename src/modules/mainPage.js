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
import Aminities from '../Pages/Amenities';
import Footer from '../Components/Footer';
import Testimonials from '../Pages/Testimonials';

const MainPage = () => {
    return (
        <>
            <div style={{
                overflowX: "hidden"
            }} >
                 
            </div>
            <Navbar />
            <Home />
            <Rooms />
            <RoomServ />
            <Aminities />
            <Gallery />
            <Testimonials />
            <About />
            <Footer />
            
        </>
    )
}

export default MainPage