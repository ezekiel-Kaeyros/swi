'use client';
import { Map, Marker } from '@vis.gl/react-google-maps';


const  MarkerWrapper = () => {
    const position = { lat: 61.2176, lng: -149.8997 };

    console.log('I am the one executing in the map now!!');
    return (
        <Marker position={position} />
    );
}

export default MarkerWrapper;