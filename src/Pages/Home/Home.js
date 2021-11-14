import React from "react";
import NavigationBar from "../../Components/NavigationBar/NavigationBar";
import bullet1 from "./../../assets/Bullet1.png";
import bullet2 from "./../../assets/Bullet2.png";
import bullet3 from "./../../assets/Bullet3.png";
import "./Home.css";
import MusicButton from "../../Components/MusicButton/MusicButton";
import { companies } from "../../constants/companyTypes";
import ConvertedLinkBox from "../../Components/ConvertedLinkBox/ConvertedLinkBox";

function Home() {
    return (
        <>
            <NavigationBar
                signedIn={false}
            />
            <body className="homeBody">
                <div className="bullet">
                    <img src={bullet1} className="bulletImg" alt="bullet" />
                    <h4 className="bulletText">Select the platform your playlist is on</h4>
                    <br />
                    {companies.map((company) => {
                        return <MusicButton company={company} />
                    })}
                </div>
                <div className="bullet">
                    <img src={bullet2} className="bulletImg" alt="bullet" />
                    <h4 className="bulletText">Select the platform you want to convert your playlist to</h4>
                    <br />
                    {companies.map((company) => {
                        return <MusicButton company={company} />
                    })}
                </div>
                <div className="bullet">
                    <img src={bullet3} className="bulletImg" alt="bullet" />
                    <h4 className="bulletText">Ta da!!</h4>
                    <br />
                    <ConvertedLinkBox
                        error={false}
                        link="http://www.sample-link.com"
                    />
                </div>
            </body>
        </>
    );
}

export default Home;