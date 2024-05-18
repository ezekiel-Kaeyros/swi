'use client';
import { useEffect, useRef, useState, useMemo } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import ShopMarker from './ShopMarker';
import { pointOfSales } from '@/core/utils/pointOfSalesData';
import { createMarker, buildContent, toggleHighlight } from './createMarker';

import styles from './mapview.module.css';
import { addPointOfSalesToRoute } from '@/redux/features/route-planning-slice';
import { useRoutePlanning } from '@/app/hooks/commons/useRoutePlanning';

interface GeoCodeMapProps {
  address: string;
  onMapClick?: boolean;
}

const GeoCodeMap: React.FC<GeoCodeMapProps> = ({ address, onMapClick }) => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const { dispatch, selectedRouteId } = useRoutePlanning();

  const mapContainer = useRef<any>(null);
  //const geocoder = useMemo(async () => await new google.maps.Geocoder(), []);
  let map: google.maps.Map | null = null;

  if (!apiKey) {
    throw new Error(
      'Google Maps API key is missing. Please check your environment configuration.'
    );
  }

  useEffect(() => {
    const loader = new Loader({
      apiKey,
      version: 'weekly',
    });

    loader.load().then(async () => {
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address: address }, async (results, status) => {
        if (status === 'OK' && results && results.length > 0) {
          const map = new google.maps.Map(mapContainer.current, {
            center: results[0].geometry.location,
            zoom: 15,
            mapId: '6fc7264e643ee8b1',
          });

          if (onMapClick) {
            map.addListener('click', (event: any) => {
              //onMapClick(event.latLng.lat(), event.latLng.lng());
            });
          }
        } else {
          console.error(
            `Geocode was not successful for the following reason: ${status}`
          );
        }
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address, apiKey, onMapClick]);

  return (
    <main className="w-full h-full relative z-0">
      <div ref={mapContainer} className={styles.mapContainer}></div>
    </main>
  );
};

export default GeoCodeMap;
