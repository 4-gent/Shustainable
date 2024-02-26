import React from "react";
import Navigation from "../components/navbar";
import IntroCarousel from "../components/introCarousel";
import '../public/intro.css'
import Banner from "../components/banner";

export default function Intro(){
    return(
        <div className="intro">
            <nav>
                <Banner />
            </nav>
            <IntroCarousel />
        </div>
    )
}