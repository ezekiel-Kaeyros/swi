import React, { useState, ReactNode }  from 'react';
import { MapControl } from '@vis.gl/react-google-maps';

interface MapControlProps {
    position: any;
    children: ReactNode;
}

const MapControlWrapper: React.FC<MapControlProps> = ({ position, children }) => {
    return (
        <MapControl position={position}>
            {children}
        </MapControl>
    );
}

export default MapControlWrapper;