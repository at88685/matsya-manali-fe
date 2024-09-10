import '../App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React, { useEffect, useState } from "react";
import Navbar from '../Components/Navbar';
import Home from '../Pages/Home';
import Rooms from '../Pages/Rooms';
import Gallery from '../Pages/Gallery';
import RoomServ from '../Pages/RoomServ';
import About from '../Pages/About';
import Aminities from '../Pages/Amenities';
import Footer from '../Components/Footer';
import Testimonials from '../Pages/Testimonials';
import { Box, Modal, Typography, TextField, Button, IconButton, Fade, Alert } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import "./mainPage.css"
import { images, OutsideImagesList } from '../Constants/ImagesList';
import { toast } from 'react-toastify';

const MainPage = () => {
    const [openFillDetailsModal, setOpenFillDetailsModal] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        enquiry: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'phone') {
            // Allow only numeric input and limit to 10 digits
            const numericValue = value.replace(/[^0-9]/g, '').slice(0, 10);
            setForm({ ...form, [name]: numericValue });
        } else {
            setForm({ ...form, [name]: value });
        }
        // setForm({
        //     ...form,
        //     [name]: value
        // });
    };

    const handleSubmit = () => {
        let message = ""
        if (form.name) {
            message += `Name - ${form.name}`
        }
        if (form.email) {
            message += `%0AEmail - ${form.email}`
        }
        if (form.phone) {
            message += `%0APhone - ${form.phone}`
        }
        if (form.enquiry) {
            message += `%0AEnquiry - ${form.enquiry}`
        }
        // let message = `Name - ${form.name}%0AEmail - ${form.email}%0APhone - ${form.phone}%0AEnquiry - ${form.enquiry}`
        let url = `https://wa.me/916230766695?text=${message}`;
        // let url = `https://wa.me/8171055230?text=${message}`;
        window.open(url, '_blank')
    };

    useEffect(() => {
        setTimeout(() => {
            setOpenFillDetailsModal(true)
        }, 7000)
    }, [])

    return (
        <>
            <div style={{
                overflowX: "hidden"
            }} >
                <Navbar />
                <Home />
                <Rooms />
                <RoomServ />
                <Aminities />
                <Gallery />
                <Testimonials />
                <About />
                <Footer />
            </div>
            <Modal
                open={openFillDetailsModal}
                onClose={() => setOpenFillDetailsModal(false)}
                disableAutoFocus={true}
                // aria-labelledby="modal-title"
                // aria-describedby="modal-description"
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: "100vh", width: '100vw', borderRadius: "10px" }}
            >
                <Fade in={openFillDetailsModal} style={{ margin: '0px 20px' }}>
                    <Box component={"div"} className='fillDetailsMainContainer'>
                        {/* <Box component={'div'} className='hotelImageContainer' style={{ width: '70%', height: '100%', visibility: 'hidden' }}>
                            <img src={OutsideImagesList[4]} style={{ height: "100%", width: '100%', }} />
                        </Box> */}
                        <Box component={'div'} className='fillDetails'>
                            <IconButton
                                // aria-label="close"
                                onClick={() => setOpenFillDetailsModal(false)}
                                sx={{
                                    // position: 'absolute',
                                    // right: 8,
                                    // top: 8,
                                    // color: (theme) => theme.palette.grey[500],
                                    alignSelf: 'flex-end'
                                }}
                            >
                                <CloseIcon />
                            </IconButton>
                            <Typography id="modal-title" variant="h6" component="h2">
                                Get in touch
                            </Typography>
                            <Typography id="modal-description" sx={{ mt: 2 }}>
                                Enquire us to get the best deals for you
                            </Typography>
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Name"
                                name="name"
                                variant="standard"
                                value={form.name}
                                onChange={handleChange}
                            />
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Email"
                                name="email"
                                variant="standard"
                                value={form.email}
                                onChange={handleChange}
                            />
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Phone Number"
                                name="phone"
                                variant="standard"
                                value={form.phone}
                                onChange={handleChange}
                            />
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Enquiry"
                                name="enquiry"
                                variant="standard"
                                value={form.enquiry}
                                onChange={handleChange}
                                multiline
                                rows={4}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleSubmit}
                                sx={{ mt: 2 }}
                                style={{}}
                            >
                                Send
                            </Button>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}

export default MainPage