import React from 'react';
import BingMaps from 'bingmaps-react';

const MapComponent = ({ bingMapsKey }) => {
    return (
        <BingMaps 
            bingMapsKey="AjQXrGd9QzEvPpo05CGtl1TL0t_crpx8VqjFvSwuBpUVvOQwf76-b2OwGmppmrVM"
            height="500px"
            mapOptions={{
                navigationBarMode: "square",
            }}
            width="500px"
            viewOptions={{
                center: {latitude: 47.6062, longitude: -122.3321},
                mapTypeId: "road",
            }}
        />
    );
};

export default MapComponent;
