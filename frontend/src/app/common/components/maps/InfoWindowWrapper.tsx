'use client'

import { InfoWindow } from '@vis.gl/react-google-maps';



// this component is an example of how we can wrap a content with infowindow component
const InfoWindowWrapper = () => {
    return (
        <InfoWindow>
            <p className='color-primary'>Hello World!!</p>
        </InfoWindow>
    );
}

export default InfoWindowWrapper;