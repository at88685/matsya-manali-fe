import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import './styles/footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-scroll';

const Footer = () => {
  const footerStyle = {
    backgroundColor: 'black',
    padding: '1rem',
    marginTop: 'auto',
  };

  const footerText = {
    color: 'white',
  };

  const footerLink = {
    marginRight: '1rem',
    color: 'white',
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline',
    },
  };

  const contactInfo = {
    marginTop: '1rem',
    color: '#555555',
  };

  // const openVirtualSite = () => {
  //   window.open("https://dotcomsolutions.in/matsya-manali/", "_black", "noreferrer");
  // }

  return (
    <footer class="footer" id="footerid">
      <div class="footer-content">

        <div class="footer-sections">
          <div class="contact-us">
            <h3>Contact Us</h3>
            <p>Matsya Manali, Burua, Palchan road,
            </p>
            <p> Manali, Himachal Pradesh - 175103</p>
            <p>Email: matsyamanali@gmail.com</p>
            <p>Landline: 1902-292342 | Phone: 6230766695 </p>
          </div>
          <div class="social-links">
            <a href="https://www.instagram.com/matsya_manali/?igshid=MzRlODBiNWFlZA%3D%3D" class="social-link" target='_blank'><InstagramIcon /></a>
            <a href="https://www.facebook.com/people/Matsya-Manali/100094771658829/" class="social-link" target='_blank'><FacebookRoundedIcon /></a>
            <a href="mailto:matsyamanali@gmail.com" class="social-link" target='_blank'><EmailRoundedIcon /></a>
            <a href="https://api.whatsapp.com/send?phone=+91 62307 66695&text=" class="social-link" target='_black'><WhatsAppIcon /></a>
          </div>
          <div class="quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="homeid"
                smooth={true}
                duration={600} ><a>Home</a></Link></li>
              <li><Link to="aboutid"
                smooth={true}
                duration={600} ><a>About Us</a></Link></li>
              <li><Link to="servicesid"
                smooth={true}
                duration={600} ><a>Services</a></Link></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
        </div>
        <p>&copy; 2023 Matsya Manali. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
