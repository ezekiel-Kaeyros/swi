'use client'
import React, { useState, ReactNode } from 'react';
import { AdvancedMarker, useAdvancedMarkerRef, InfoWindow, Pin } from '@vis.gl/react-google-maps';
import InfoWindowWrapper from './InfoWindowWrapper';
import DefaultPOSMarker from '../../../../../public/icons/marker.svg'
import Image from 'next/image';
import Marker from '../markers/AddShopMarker';


interface AdvancedMarkerProps {
    position: {
        lat: number;
        lng: number;
    };
    children: ReactNode;
    active: boolean;
    markerColor?: string;
}

const AdvancedMarkerWrapper: React.FC<AdvancedMarkerProps> = ({ position, children, active, markerColor  }) => {
    const [markerRef, marker] = useAdvancedMarkerRef();
    const [infowindowShown, setInfowindowShown] = useState(false);

    console.log("Hello I am executing", position, markerColor);

    console.log('position of lat and long', position);

    const toggleInfoWindow = () => setInfowindowShown(previousState => ! previousState);

    const closeInfoWindow = () => setInfowindowShown(false);
    
    return (
        <AdvancedMarker
            ref={markerRef}
            onClick={toggleInfoWindow}
            position={position}
        >
            {/* <Image src={DefaultPOSMarker} alt='pos marker' style={{fill: '#FF0000'}}/> */}
            <Marker color={markerColor} />
             {/* <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} /> */}
            {infowindowShown && (
                <InfoWindow anchor={marker} onCloseClick={closeInfoWindow}>
                    {children}
                </InfoWindow>
            )}
        </AdvancedMarker>
    );
}

export default AdvancedMarkerWrapper;