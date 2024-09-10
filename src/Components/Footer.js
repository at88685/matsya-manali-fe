import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import './styles/footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-scroll';
import { strings } from '../Constants/Strings';

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
  const year = new Date().getFullYear();

  return (
    <footer class="footer" id="footerid">
      <div class="footer-content">

        <div class="footer-sections">
          <div class="contact-us">
            <h3 style={{ fontSize: '1rem' }}>{strings.contactUs}</h3>
            <p style={{ fontSize: '0.8rem', marginTop: '10px' }}>Matsya Manali, Burua, Palchan road,
            </p>
            <p style={{ fontSize: '0.8rem', marginTop: '10px' }}> Manali, Himachal Pradesh - 175103</p>
            <p style={{ fontSize: '0.8rem', marginTop: '10px' }}>Email: matsyamanali@gmail.com</p>
            <p style={{ fontSize: '0.8rem', marginTop: '10px' }}>Landline: 1902-292342 | Phone: 6230766695 </p>
          </div>
          <div className="social-links">
            <a href="https://www.instagram.com/matsya_manali/?igshid=MzRlODBiNWFlZA%3D%3D" class="social-link" target='_blank'><InstagramIcon /></a>
            <a href="https://www.facebook.com/people/Matsya-Manali/100094771658829/" class="social-link" target='_blank'><FacebookRoundedIcon /></a>
            <a href="mailto:matsyamanali@gmail.com" class="social-link" target='_blank'><EmailRoundedIcon /></a>
            <a href="https://api.whatsapp.com/send?phone=6230766695" class="social-link" target='_black'><WhatsAppIcon /></a>
          </div>
          <div class="quick-links">
            <h3 style={{ fontSize: '1rem', marginBottom: '10px' }}>Quick Links</h3>
            <ul>
              <li><Link to="homeid"
                smooth={true}
                duration={600} ><a style={{ fontSize: '0.8rem', marginTop: '10px' }}>{strings.home}</a></Link></li>
              <li><Link to="aboutid"
                smooth={true}
                duration={600} ><a style={{ fontSize: '0.8rem', marginTop: '10px' }}>{strings.aboutUs}</a></Link></li>
              <li><Link to="servicesid"
                smooth={true}
                duration={600} ><a style={{ fontSize: '0.8rem', marginTop: '10px' }}>{strings.services}</a></Link></li>
              <li><a style={{ fontSize: '0.8rem' }}>{strings.contact}</a></li>
            </ul>
          </div>
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3372.5570362577923!2d77.17542267510149!3d32.296885408369135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390487421aaaaaab%3A0x8b50d3b8cf225a08!2sMatsya%20Manali!5e0!3m2!1sen!2sin!4v1720812331546!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
          </iframe> */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3372.5570362577923!2d77.17542267510149!3d32.296885408369135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390487421aaaaaab%3A0x8b50d3b8cf225a08!2sMatsya%20Manali!5e0!3m2!1sen!2sin!4v1720812331546!5m2!1sen!2sin" style={{ borderRadius: 10, flex: "20%", minHeight: '20vh' }}>
          </iframe>
        </div>
        <p style={{ fontSize: '0.8rem', marginTop: '5px' }}>&copy; {year?.toString()} Matsya Manali. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
