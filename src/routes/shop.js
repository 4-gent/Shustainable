import React, { useState } from "react";
import Navigation from "../components/navbar";
import ShopTemplate from "../components/ShopTemplate";
import '../public/shop.css'
import BingMaps from 'bingmaps-react';
import map from '../public/images/map.jpg'

export default function Shop(){
    return(
        <div className="shopBackground">
            <nav>
                <Navigation />
            </nav>
            <div className="mapDisplay">
            {/* <BingMaps 
                bingMapsKey="AjQXrGd9QzEvPpo05CGtl1TL0t_crpx8VqjFvSwuBpUVvOQwf76-b2OwGmppmrVM"
                height="500px"
                mapOptions={{
                    navigationBarMode: "square",
                }}
                width="100%"
                viewOptions={{
                    center: {latitude: 42.360081, longitude: -71.058884},
                    mapTypeId: "road",
                }}
            /> */}
                <img className="mapDisplay" src={map}/>
            </div>
            <div className="shops">
                <ShopTemplate className="template" imgName={'download'} shopName={`The Hack Foundation`} shopDesc={`Giving nonprofits the financial tools they need to make an impact and maintain transparent finances.`} />
                <ShopTemplate className="template" imgName={'download'} shopName={`1951 Coffee`} shopDesc={`Promoting the well-being of the refugee community in the US through job training and employment.`} />
                <ShopTemplate className="template" imgName={'download'} shopName={`The Dancing Cat`} shopDesc={`Animal Rescure organization dedicated to saving at-risk cats from the San Jose Animal Care Center.`} />
                <ShopTemplate className="template" imgName={'download'} shopName={`Friends of Hoover Durant Public Library`} shopDesc={`To bring a public library branch back to neighborhoods in West Oakland, California.`} />
                <ShopTemplate className="template" imgName={'download'} shopName={`BridgeGood`} shopDesc={`Empower diverse students to design for social good by offering inclusive tech access, design opportunities, and equipping job seekers with professional resources.`} />
                <ShopTemplate className="template" imgName={'download'} shopName={`QueerLife Space`} shopDesc={`Provices affordable, evidence-based mental health services to the LGBTIQIA+ community in the Bay Area.`} />
                <ShopTemplate className="template" imgName={'download'} shopName={`ARTZ Philadelphia`} shopDesc={`Enhance well-being of people living with dementia and their care partners through joyful interactions around arts and culture.`} />
            </div>
        </div>
    )
}