'use client'

import { InfoWindow } from '@vis.gl/react-google-maps';



// this component is an example of how we can wrap a content with infowindow component
const FilterInfoView = () => {
    return (
        <InfoWindow>
            The filter component goes here!!
        </InfoWindow>
    );
}

export default FilterInfoView;