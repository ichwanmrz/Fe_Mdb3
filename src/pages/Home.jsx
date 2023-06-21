import React from 'react';
import './home.css';
import {Image, Button} from 'react-bootstrap';
import cover from "../images/ichwan.jpg";
import Posts from '../components/Posts';
import Hello from '../components/Hello';


const Home = () => {
    return (
    <div className="home">
        <section className="text  col-6">
            <Hello name="Ichwan Mirza"/>
            <h1 className='p-3 rounded-1' style={{backgroundColor:"grey"}}>Make <br/><b>The Remote Work</b><br/>From Now</h1>
            <p style={{fontStyle: "italic"}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime iste dolor, a eos voluptatibus ea placeat corrupti. Iste, minus corrupti?
            </p>
            <Button>Learn more about me</Button>
            <div className="logo2">
                
            </div>
        </section>
        <section>
            <Image className="cover w-100 col-12 p-5 ms-5 border border-5 border-dark bg-secondary rounded-3 img-fluid" src={cover}/>
        </section>
     
    </div>
    )
}
export default Home