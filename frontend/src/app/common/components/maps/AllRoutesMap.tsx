'use client';
import { useEffect, useRef, useState, useMemo } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { createMarker } from './createMarker';

import styles from './mapview.module.css';
import { addPointOfSalesToRoute } from '@/redux/features/route-planning-slice';
import { useRoutePlanning } from '@/app/hooks/useRoutePlanning';

interface GeoCodeMapProps {
  onMapClick?: (lat: number, lng: number) => void;
}

const AllRoutesMap: React.FC<GeoCodeMapProps> = () => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const { dispatch, selectedRouteId, routes } = useRoutePlanning();
  console.log('ROUTES', routes);

  const mapContainer = useRef<any>(null);
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
      // eslint-disable-next-line react-hooks/exhaustive-deps
      map = new google.maps.Map(mapContainer.current, {
        center: { lat: 3.8852761566538545, lng: 11.502079803888337 },
        zoom: 12,
        mapId: '6fc7264e643ee8b1',
      });

      // Display all routes
      routes.forEach((route) => {
        let color = generateRandomBrightColor();

        map && displayRoute(map, route, color);
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routes]);

  function displayRoute(map: google.maps.Map, route: any, routeColor: string) {
    const directionsService = new google.maps.DirectionsService();

    const pos = route?.pointOfSales;
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
        const directionsRenderer = new google.maps.DirectionsRenderer({
          suppressMarkers: false,
          suppressInfoWindows: false,
          polylineOptions: {
            strokeColor: routeColor,
            strokeWeight: 4,
          },
        });
        directionsRenderer.setMap(map);
        directionsRenderer.setDirections(result);
      })
      .catch((e: any) => {
        alert('Could not display directions due to:' + e);
      });

    // Display custom markers
    route?.pointOfSales.forEach((pos: any) =>
      createMarker(pos, map, true, route?.id, dispatch)
    );
  }

  const generateRandomBrightColor = (() => {
    const letters = '0123456789ABCDEF';
    const usedColors = new Set();

    return () => {
      let color = '#';

      // Generating a random bright color
      do {
        for (let i = 0; i < 6; i++) {
          const index = Math.floor(Math.random() * 16);
          color += letters[index];
        }
      } while (usedColors.has(color));

      // Add the generated color to the set to avoid repeats
      usedColors.add(color);

      // Reset the set when all possible colors are used (unlikely, but possible)
      if (usedColors.size === 16777216) {
        usedColors.clear();
      }

      return color;
    };
  })();

  return (
    <main className="w-full h-full relative z-0">
      <div ref={mapContainer} className={styles.mapContainer}></div>
    </main>
  );
};

export default AllRoutesMap;
