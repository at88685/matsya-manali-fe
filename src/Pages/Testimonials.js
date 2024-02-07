import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Styles/testimonials.css"
import { Avatar } from "@mui/material";
import { influencersImages } from "../Constants/ImagesList";
import { strings } from "../Constants/Strings";
import Rating from '@mui/material/Rating';

const Card = (props) => {
    return (
        <div className="cardMainContainer">
            <div className="influencerCard">
                <img src={props.images} className="influencersImage"/>
                <div className="nameStyling">{props.name}</div>
                <div className="designationStyling">{props.designation}</div>
                <Rating name="read-only" value={5} readOnly size="medium"/>
                <div className="wordsStyling">{props.words}</div>
            </div>
        </div>
    )
}

const infulencersArray = [
    {
        name: "Kriti Mehra",
        words: "Breathtaking views from our room along with superb hospitality made our stay at Matsya Manali truly memorable. The bonfire night event was a highlight for us, we haven’t experienced it at any hotel I stayed at. Excellent service and atmosphere - we'll certainly return!",
        designation: "Social Media Inflencer",
        image: influencersImages?.kritiMehra,
    },
    {
        name: "Ajju Bhai",
        words: "I thoroughly enjoyed my stay at Matsya Manali. The scenic views from my room overlooking the mountains were simply breathtaking. Best of all, the hotel was located a short distance away from the city traffic. Nearby popular tourist destinations like Rohtang Pass, Solang Valley and Atul Tunnel were easily accessible, allowing me to explore the natural beauty of the region with ease. I will certainly look to stay at Matsya  Manali again on my next visit to Manali to soak in the serenity.",
        designation: "Social Media Inflencer",
        image: influencersImages?.ajju,
    },
    {
        name: "Ashna Chand",
        words: "I really enjoyed my stay at Matsya Manali. The views from my room overlooking the apple orchards were gorgeous. The food at the in-house restaurant was delicious and the staff provided excellent service. What struck me most was the hotel's charming location surrounded by orchards. I can't wait to return during the winter to see the breathtaking views with the orchards covered in a blanket of snow. I will surely visit again.",
        designation: "Social Media Inflencer",
        image: influencersImages?.ashna,
    }
]

const Testimonials = () => {
    return (
        <>
            <div className="testimonials-container">
                <div className="titleContainer">
                    <div className="servicesText">{strings.celebrityGuests}</div>
                    <div className="divider"/>
                </div>
                    <Slider dots autoplay pauseOnHover={false} pauseOnDotsHover={false} lazyLoad="anticipated" adaptiveHeight arrows={false}>
                        {
                            infulencersArray?.map((item, index) => {
                                return (
                                    <Card images={item?.image} words={item?.words} name={item?.name} designation={item?.designation}/>
                                )
                            })
                        }
                    </Slider>
            </div>
        </>
    )
}

export default Testimonials