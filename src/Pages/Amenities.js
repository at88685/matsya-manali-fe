import React from 'react'
import './Styles/about.css'
import './Styles/amenities.css';
import { images } from '../Constants/ImagesList';

const Aminities = () => {
    return (
        <div className='aminities-container'>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <div className='aminities-title'>Comfort Amenities</div>
                <div className="divider" ></div>
            </div>

            <div className='aminitiesDescriptionMainContainer'>
                <div className='ovenSheetsDiv'>
                    <div className='ovenDiv'>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div className='ovenComponentsDiv'>
                                <img src={images.blackCircleIcon} alt="roomImage" className='blackCircleImage' />
                                <div className='aminitiesName'>Oven</div>
                            </div>
                            <div className='beverageBagsDiv'>
                                <img src={images.blackCircleIcon} alt="roomImage" className='blackCircleImage' />
                                <div className='aminitiesName'>Beverage Bags</div>
                            </div>

                        </div>
                    </div>
                    <div className='sheetsDiv'>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'center' }}>
                                <img src={images.blackCircleIcon} alt="roomImage" className='blackCircleImage' />
                                <div className='aminitiesName'>Sheets & Towels</div>
                            </div>
                            <div className='bathrobesDiv'>
                                <img src={images.blackCircleIcon} alt="roomImage" className='blackCircleImage' />
                                <div className='aminitiesName'>Bathrobes & Slippers</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='wifiAssistanceDiv'>
                    <div className='freeWifiDiv'>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div className='wifiDiv'>
                                <img src={images.blackCircleIcon} alt="roomImage" className='blackCircleImage' />
                                <div className='aminitiesName'>Free Wifi</div>
                            </div>
                            <div className='dentalDiv'>
                                <img src={images.blackCircleIcon} alt="roomImage" className='blackCircleImage' />
                                <div className='aminitiesName'>Dental Kit</div>
                            </div>
                        </div>
                    </div>

                    <div className='assistanceDiv'>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'start', alignItems: 'center' }}>
                                <img src={images.blackCircleIcon} alt="roomImage" className='blackCircleImage' />
                                <div className='aminitiesName'>24/7 Assistance</div>
                            </div>
                            <div className='hairDryerDiv'>
                                <img src={images.blackCircleIcon} alt="roomImage" className='blackCircleImage' />
                                <div className='aminitiesName'>HairDryer</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* <div className='aminitiesDescriptionMainContainer'>
                <div className='ovenSheetsDiv'>
                    <div className='ovenDiv'>
                        <img src={images.blackCircleIcon} alt="roomImage" className='blackCircleImage' />
                        <div className='aminitiesName'>HairDryer</div>
                    </div>
                    <div className='sheetsDiv'>
                        <img src={images.blackCircleIcon} alt="roomImage" className='blackCircleImage' />
                        <div className='aminitiesName'>Beverage Bags</div>
                    </div>
                </div>

                <div className='wifiAssistanceDiv'>
                    <div className='freeWifiDiv'>
                        <img src={images.blackCircleIcon} alt="roomImage" className='blackCircleImage' />
                        <div className='aminitiesName'>Dental Kit</div>
                    </div>

                    <div className='assistanceDiv'>
                        <img src={images.blackCircleIcon} alt="roomImage" className='blackCircleImage' />
                        <div className='aminitiesName'>Bathrobes & Slippers</div>
                    </div>
                </div>
            </div> */}

        </div>
    )
}

export default Aminities