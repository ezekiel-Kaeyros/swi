'use client'

import { InfoWindow } from '@vis.gl/react-google-maps';



// this component is an example of how we can wrap a content with infowindow component
const AddToRouteInfoview = () => {
    return (
        <InfoWindow>
            The card for info of POS goes here!!
        </InfoWindow>
    );
}

export default AddToRouteInfoview;