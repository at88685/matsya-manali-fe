import { Button} from '@mui/material';
import frontVideo from '../assets/video/frontVideo.mp4';
import './Styles/home.css'


import React from 'react'


const Home = () => {

  return (
    <div className="app" id='homeid'>
      <video autoPlay muted loop className="video-background">
        <source src={frontVideo} type="video/mp4" />
        {/* Add additional <source> elements for different video formats (e.g., WebM, Ogg) */}
        {/* Fallback content for browsers that don't support HTML5 video */}
        Your browser does not support the video tag.
      </video>
      <div className='home-body'>
        <div className='home-main'>
          <p className='title'>Welcome to Matsya Manali</p>
          <p className='subtitle'>Discover the greatness of mountains with an eccentric feel of nature.</p>
          <Button variant='outlined' sx={{ color: 'white'}}>Explore Virtually</Button>
        </div>
      </div>
    </div>
  )
}

export default Home