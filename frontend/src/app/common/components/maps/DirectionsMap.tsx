'use client';
import { useEffect, useRef, useState, useMemo } from 'react';
import { Map } from '@vis.gl/react-google-maps';
import { Loader } from '@googlemaps/js-api-loader';
import { pointOfSales } from '@/utils/pointOfSalesData';
import { createMarker, buildContent, toggleHighlight } from './createMarker';

import styles from './mapview.module.css';
import { addPointOfSalesToRoute } from '@/redux/features/route-planning-slice';
import { useRoutePlanning } from '@/app/hooks/useRoutePlanning';

interface GeoCodeMapProps {
  address?: string;
  onMapClick?: (lat: number, lng: number) => void;
}

const DirectionsMap: React.FC<GeoCodeMapProps> = () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const { dispatch, routes, selectedRouteId } = useRoutePlanning();

  const mapContainer = useRef<any>(null);
  //const geocoder = useMemo(async () => await new google.maps.Geocoder(), []);
  let map: google.maps.Map | null = null;

  if (!apiKey) {
    throw new Error(
      'Google Maps API key is missing. Please check your environment configuration.'
    );
  }
  let currentRoute = routes.find((route) => route?.id === selectedRouteId);

  useEffect(() => {
    const loader = new Loader({
      apiKey,
      version: 'weekly',
    });

    loader.load().then(async () => {
      const directionsService = new google.maps.DirectionsService();
      const directionsRenderer = new google.maps.DirectionsRenderer({
        suppressMarkers: false,
        suppressInfoWindows: false,
      });
      const map = new google.maps.Map(mapContainer.current, {
        center: { lat: 4.092514935854556, lng: 9.746774077059367 },
        zoom: 18,
        mapId: '6fc7264e643ee8b1',
      });

      directionsRenderer.setMap(map);
      calculateAndDisplayRoute(directionsService, directionsRenderer);

      // Display custom marker
      currentRoute?.pointOfSales.map((pos: any) =>
        createMarker(pos, map, true, selectedRouteId as number, dispatch)
      );
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentRoute?.pointOfSales, currentRoute?.pointOfSales?.tasks]);

  function calculateAndDisplayRoute(
    directionsService: any,
    directionsRenderer: any
  ) {
    // This code needs to be refactored to be dynamic
    const pos = currentRoute?.pointOfSales;
    const origin = {
      lat: pos[0].position.lat,
      lng: pos[0].position.lng,
    };

    const destination = {
      lat: pos[pos.length - 1].position.lat,
      lng: pos[pos.length - 1].position.lng,
    };

    const trimmedPos = [...pos.slice(1, -1)];

    const wayPoints = trimmedPos.map((point: any) => {
      const waypoint = {
        location: {
          lat: point.position.lat,
          lng: point.position.lng,
        },
        stopover: true,
      };

      return waypoint;
    });

    directionsService
      .route({
        origin: origin,
        destination: destination,
        waypoints: wayPoints,
        travelMode: google.maps.TravelMode.DRIVING,
      })
      .then((result: any) => {
        directionsRenderer.setDirections(result);
      })
      .catch((e: any) => {
        alert('Could not display directions due to:' + e);
      });
  }

  return (
    <main className="w-full h-full relative z-0">
      <div ref={mapContainer} className={styles.mapContainer}></div>
    </main>
  );
};

export default DirectionsMap;
