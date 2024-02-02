import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Styles/testimonials.css"
import { Avatar } from "@mui/material";
import { influencersImages } from "../Constants/ImagesList";
import { strings } from "../Constants/Strings";

const Card = (props) => {
    return (
        <div className="cardMainContainer">
            <div className="influencerCard">
                <img src={props.images} className="influencersImage"/>
                <div className="nameStyling">{props.name}</div>
                <div className="designationStyling">{props.designation}</div>
                <div className="wordsStyling">{props.words}</div>
            </div>
        </div>
    )
}

const infulencersArray = [
    {
        name: "Kriti Mehra",
        words: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        designation: "Social Media Inflencer",
        image: influencersImages?.kritiMehra,
    },
    {
        name: "Ajju Bhai",
        words: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        designation: "Social Media Inflencer",
        image: influencersImages?.ajju,
    },
    {
        name: "Anunay Sood",
        words: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        designation: "Social Media Inflencer",
        image: influencersImages?.anunay,
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