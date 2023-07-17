import React from 'react';
import { Container, Grid, Typography, Link } from '@mui/material';

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

  return (
    <footer style={footerStyle} id='footerid'>
      <Container maxWidth="lg">
        <Grid container justifyContent="space-between" alignItems='center'>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="body1" style={footerText}>
              Quick Links: &nbsp;
              <Link href="#" style={footerLink}>
                Home
              </Link>
              <Link href="#" style={footerLink}>
                About Us
              </Link>
              <Link href="#" style={footerLink}>
                Services
              </Link>
              <Link href="#" style={footerLink}>
                Contact Us
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="body1" style={footerText}>
              Contact Us:
              <div style={contactInfo}>
                <div>123 Main Street</div>
                <div>City, State 12345</div>
                <div>Phone: (123) 456-7890</div>
                <div>Email: info@example.com</div>
              </div>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            {/* Add any additional content or components here */}
          </Grid>
        </Grid>
        <Grid container justifyContent="center" style={{ marginTop: '1rem' }}>
          <Grid item>
            <Typography variant="body2" align="center" style={footerText}>
              © {new Date().getFullYear()} | Matsya Manali | All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
