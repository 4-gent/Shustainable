import React, { useState } from "react"
import carOne from '../public/images/carouselOne.jpg';
import carTwo from '../public/images/carouselTwo.jpg';
import carThree from '../public/images/carouselThree.jpg';
import { Carousel } from "react-bootstrap";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage
} from 'mdb-react-ui-kit';
import '../public/introCarousel.css';

export default function IntroCarousel(){
    const[activeIndex, setActiveIndex] = useState(0);
    const handleNext = () => {
        const nextIndex = activeIndex + 1;
        if(nextIndex < 3){
            setActiveIndex(nextIndex)
        }
        else{
            window.location.href = '/signup'
            setActiveIndex(0)
        }
    }
    
    return(
            <Carousel 
                className="IntroCarousel" 
                slide={false} 
                variant="dark" 
                controls={false} 
                interval={null}
                activeIndex={activeIndex}
                onSelect={() => {}}
            >
                <Carousel.Item>
                    <MDBCard className="IntroCarouselItem">
                        <MDBCardImage src={carOne} className="carImage" />
                        <MDBCardBody>
                            <MDBCardTitle>Identify</MDBCardTitle>
                            <br />
                            <MDBCardText>Identify whether or not the plastic is recyclable through your camera</MDBCardText>
                            <br />
                            <button className="carBtn1" onClick={handleNext}>NEXT</button>
                        </MDBCardBody>
                    </MDBCard>
                </Carousel.Item>
                <Carousel.Item>
                    <MDBCard className="IntroCarouselItem">
                        <MDBCardImage src={carTwo} className="carImage" />
                        <MDBCardBody>
                            <MDBCardTitle>Set Goals</MDBCardTitle>
                            <br />
                            <MDBCardText>Set goals, earn badges, and compete with friends</MDBCardText>
                            <br />
                            <button className="carBtn2" onClick={handleNext}>NEXT</button>
                        </MDBCardBody>
                    </MDBCard>
                </Carousel.Item>
                <Carousel.Item>
                    <MDBCard className="IntroCarouselItem">
                        <MDBCardImage src={carThree} className="carImage" />
                        <MDBCardBody>
                            <MDBCardTitle>Learn</MDBCardTitle>
                            <br />
                            <MDBCardText>Learn more about the types of plastic and get tips on being more eco-friendly</MDBCardText>
                            <br />
                            <button className="carBtn3" onClick={handleNext}>SIGN UP</button>
                        </MDBCardBody>
                    </MDBCard>
                </Carousel.Item>
            </Carousel>
    )
}