import "./MusicButton.css";
import { Button } from 'react-bootstrap';
import applemusic from "./../../assets/applemusiclogo.png";
import amazonmusic from "./../../assets/amazonmusiclogo.png";
import spotify from "./../../assets/spotifylogo.png";
import youtubemusic from "./../../assets/youtubemusiclogo.png";
import { company_type } from "../../constants/companyTypes";

export default function MusicButton (props) {
    function getLogo() {
        if(props.company === company_type.APPLE) {
            return applemusic;
        } else if(props.company === company_type.AMAZON) {
            return amazonmusic;
        } else if(props.company === company_type.SPOTIFY) {
            return spotify;
        } else if(props.company === company_type.YOUTUBE) {
            return youtubemusic;
        }
    }

    return (
        <Button variant="light" className="musicButton">
            <img src={getLogo()} className="buttonLogo" alt="logo" />
            {props.company}
        </Button>
    );
}