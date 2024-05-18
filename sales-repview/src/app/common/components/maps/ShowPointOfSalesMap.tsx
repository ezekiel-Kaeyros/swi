/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { createMarker } from './createMarker';

import styles from './mapview.module.css';
import { addPointOfSalesToRoute } from '@/redux/features/route-planning-slice';
import { useRoutePlanning } from '@/app/hooks/commons/useRoutePlanning';
import { updateSelectedPlace } from '@/redux/features/create-point-of-sale-slice';
import { usePointOfSales } from '@/app/hooks/commons/usePointOfSales';

interface ShopPointOfSalesMapProps {
  address?: string;
  onMapClick?: boolean;
}

const ShopPointOfSalesMap: React.FC<ShopPointOfSalesMapProps> = ({
  address,
  onMapClick,
}) => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const { dispatch, routes, selectedRouteId } = useRoutePlanning();
  const { pointOfSales } = usePointOfSales();

  const mapContainer = useRef<any>(null);
  const searchRef = useRef<any>(null);
  const input = useRef<any>(null);
  const infoWindowContent = useRef<any>(null);

  //const geocoder = useMemo(async () => await new google.maps.Geocoder(), []);
  let map: google.maps.Map;

  if (!apiKey) {
    throw new Error(
      'Google Maps API key is missing. Please check your environment configuration.'
    );
  }

  let currentRoute = routes?.find((route) => route?.id === selectedRouteId);

  useEffect(() => {
    const loader = new Loader({
      apiKey,
      version: 'weekly',
    });
    const searchOptions = {
      fields: ['formatted_address', 'geometry', 'name'],
      strictBounds: false,
    };

    loader.load().then(async () => {
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address: address }, async (results, status) => {
        if (status === 'OK' && results && results.length > 0) {
          const map = new google.maps.Map(mapContainer.current, {
            center: results && results[0].geometry.location,
            zoom: 14,
            mapId: '6fc7264e643ee8b1',
          });

          pointOfSales?.map((pos: any) =>
            createMarker(
              pos,
              map,
              true,
              selectedRouteId,
              dispatch,
              currentRoute,
              addPointOfSalesToRoute
            )
          );

          if (onMapClick) {
            map.addListener('click', (event: any) => {
              const { latLng } = event;
              //onMapClick(event.latLng.lat(), event.latLng.lng());
              console.log('Map got clicked');
              console.log('Coordinates clicked', latLng.lat(), latLng.lng());

              dispatch(
                updateSelectedPlace({
                  latitude: latLng.lat(),
                  longitude: latLng.lng(),
                })
              );
            });
          }
        } else {
          console.error(
            `Geocode was not successful for the following reason: ${status}`
          );
        }
      });
      searchPlaces(map, input, searchRef, searchOptions);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    address,
    apiKey,
    onMapClick,
    selectedRouteId,
    currentRoute,
    pointOfSales,
  ]);

  const searchPlaces = async (
    map: google.maps.Map,
    input: React.MutableRefObject<any>,
    searchRef: React.MutableRefObject<any>,
    searchOptions: any
  ) => {
    console.log('Map object', google.maps.places);

    map?.controls[google.maps.ControlPosition.TOP_LEFT].push(searchRef.current);

    const searchBox = new google.maps.places.Autocomplete(
      input.current,
      searchOptions
    );

    // Bias the SearchBox results towards current map's viewport.
    map?.addListener('bounds_changed', () => {
      searchBox.setBounds(map.getBounds() as google.maps.LatLngBounds);
    });

    searchBox.addListener('places_changed', () => {
      const places = searchBox.getPlace();
      // Listen for the event fired when the user selects a prediction and retrieve
      // more details for that place.
      // if(places && places.length == 0) {
      //   return;
      // }

      // const bounds = new google.maps.LatLngBounds();

      // places?.forEach((place) => {
      //   if(!place.geometry || !place.geometry.location) {
      //     console.log("Returned place contains no geometry");
      //     return;
      //   }

      //   if(place.geometry.viewport) {
      //     bounds.union(place.geometry.viewport);
      //   } else {
      //     bounds.extend(place.geometry.location);
      //   }
      // });
      // map.fitBounds(bounds);
    });

    // autocomplete.bindTo('bounds', map);

    // const infowindow = new google.maps.InfoWindow();

    // infowindow.setContent(infoWindowContent.current);

    // autocomplete.addListener("place_changed", () => {
    //   infowindow.close();
    //   const place = autocomplete.getPlace();

    //   if(!place.geometry || !place.geometry.location) {
    //     alert("No details available for input: '" + place.name + "'");
    //     return;
    //   }

    //   if(place.geometry.viewport) {
    //     map.fitBounds(place.geometry.viewport);
    //   } else {
    //     map.setCenter(place.geometry.location);
    //     map.setZoom(17);
    //   }

    // })
  };

  return (
    <>
      <div ref={searchRef} className="relative max-w-sm py-4 z-10">
        <input
          className="appearance-none relative border rounded-xl w-full py-4 px-12 leading-tight border-gray-300 bg-transparent focus:outline-none focus:border-buttonPrimary focus:dark:bg-cardDark dark:text-white pr-16"
          placeholder="search"
          ref={input}
        />
      </div>

      <main className="w-full h-full relative z-0">
        <div ref={mapContainer} className={styles.mapContainer}></div>
      </main>

      <div
        id="infowindow-content"
        className="bg-cardDark p-4 rounded-xl"
        ref={infoWindowContent}
      >
        <span
          id="place-name"
          className="title hover:opacity-90 p-2 bg-bgColorDark"
        ></span>
        <br />
        <span
          id="place-address"
          className="hover:opacity-90 p-2 bg-bgColorDark"
        ></span>
      </div>
    </>
  );
};

export default ShopPointOfSalesMap;
