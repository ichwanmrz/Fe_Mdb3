import React from 'react';
import './home.css';
import {Image, Button} from 'react-bootstrap';
import cover from "../images/image-hero-desktop.png";
import databiz from "../images/client-databiz.svg";
import audiophile from "../images/client-audiophile.svg";
import meet from "../images/client-meet.svg";
import maker from "../images/client-maker.svg";

const Home = () => {
    return (
    <div className="home">
        <section className="text">
            <h1>Make <br/>Remote Work</h1>
            <p>
                Get Your team in sync, no matter  your location
                Get Your team in sync, no matter  your location
                Get Your team in sync, no matter  your location
                Get Your team in sync, no matter  your location
            </p>
            <Button>Learn more</Button>
            <div className="logo2">
                <Image src={databiz}/>
                <Image src={audiophile}/>
                <Image src={meet}/>
                <Image src={maker}/>
            </div>
        </section>
        <section>
            <Image className="cover" src={cover}/>
        </section>
    </div>
    )
}
export default Home