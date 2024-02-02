import React from 'react'
import './Styles/about.css'
import { Box, Grid } from '@mui/material'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { strings } from '../Constants/Strings';

const About = () => {
  const [aboutUsRef, useAboutUsRef] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const aboutUsFadeUpVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 }
  };
  return (
    <div className='about-container'>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div className='aboutUsTitle'>{strings.getToKnowUs}</div>
        <div className="divider" ></div>
      </div>
      <Grid item xs={12}>
        <Box class='about-box'>
          <motion.div
            className='about-text'
            ref={aboutUsRef}
            initial="hidden"
            animate={useAboutUsRef ? "visible" : "hidden"}
            variants={aboutUsFadeUpVariant}
            transition={{ ease: "linear", duration: 1.5, x: { duration: 1 } }}

          >Matsya Manali, a tranquil retreat nestled in the heart of the picturesque town of Manali , Himanchal Pradesh .
            Our hotel is ideally located to offer you breathtaking views of the majestic Himalayas,
            lush green valleys, and the glistening Beas River, providing a truly enchanting experience
            for nature lovers and adventure enthusiasts alike.<br /><br />

            At Matsya Manali, we strive to provide our guests with exceptional hospitality and personalized service.
            Our team of dedicated staff members is committed to ensuring that your stay with us is comfortable,
            memorable, and truly unforgettable. Accommodation at Matsya Manali is designed to provide you with the utmost
            comfort and luxury. Our tastefully appointed rooms and suites are spacious, elegantly furnished,
            and equipped with modern amenities to meet all your needs. Whether you choose a deluxe room or opt for one of
            our luxurious suites, you can expect a cozy ambiance and a peaceful atmosphere to relax and rejuvenate.<br /><br />

            Indulge your taste buds in a culinary journey at our in-house restaurant, where our talented chefs prepare
            a wide range of delectable dishes, blending local flavors with international cuisines. We prioritize the use
            of fresh, locally sourced ingredients to ensure the highest quality of our meals. Enjoy your dining experience
            while soaking in the panoramic views of the surrounding mountains.
          </motion.div>
        </Box>

      </Grid>
    </div>
  )
}

export default About