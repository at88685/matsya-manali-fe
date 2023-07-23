import React from 'react'
import './Styles/about.css'
import './Styles/amenities.css';
import { images } from '../Constants/ImagesList';

const Aminities = () => {
    return (
        <div className='aminities-container'>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <div className='aminities-title'>Amenities</div>
                <div className="divider" ></div>
            </div>
            <div className='aminitiesDescriptionMainContainer'>
                <div className='ovenSheetsDiv'>
                    <div className='ovenDiv'>
                        <img src={images.blackCircleIcon} alt="roomImage" className='blackCircleImage' />
                        <div className='aminitiesName'>Oven</div>
                    </div>

                    <div className='sheetsDiv'>
                        <img src={images.blackCircleIcon} alt="roomImage" className='blackCircleImage' />
                        <div className='aminitiesName'>Sheets & Towels</div>
                    </div>
                </div>

                <div className='wifiAssistanceDiv'>
                    <div className='freeWifiDiv'>
                        <img src={images.blackCircleIcon} alt="roomImage" className='blackCircleImage' />
                        <div className='aminitiesName'>Free Wifi</div>
                    </div>

                    <div className='assistanceDiv'>
                        <img src={images.blackCircleIcon} alt="roomImage" className='blackCircleImage' />
                        <div className='aminitiesName'>24/7 Assistance</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Aminities