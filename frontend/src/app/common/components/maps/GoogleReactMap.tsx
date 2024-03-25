'use client';
import { Map, Marker, AdvancedMarker } from '@vis.gl/react-google-maps';
import MarkerWrapper from './MarkerWrapper';
import AdvancedMarkerWrapper from './AdvancedMarkerWrapper';
import ActivePOSMarker from '../../../../../public/icons/activeMarkerIcon.svg'




function GoogleReactMap () {
    const position = { lat: 61.2176, lng: -149.8997 };
    return (
        <Map center={position} zoom={10} mapId={'6fc7264e643ee8b1'}>
            <AdvancedMarkerWrapper position={position} active={true}>
                <p className='bg-black'>Hello!!</p>
            </AdvancedMarkerWrapper>
        </Map>
    );
}

export default GoogleReactMap;