// ShopMarker.js
import React, { useEffect, useRef } from 'react';
import GeoCodeMap from './GeoCodeMap';
import { addPointOfSalesToRoute } from '@/redux/features/route-planning-slice';
import { useDispatch } from 'react-redux';
import './mapview.module.css';
import { useRoutePlanning } from '@/app/hooks/commons/useRoutePlanning';

interface ShopMarkerType {
  shopDetails: any;
  onClick: boolean;
  map: any;
}

const ShopMarker: React.FC<ShopMarkerType> = ({
  shopDetails,
  onClick,
  map,
}) => {
  const markerRef = useRef<any>(null);
  const { dispatch } = useRoutePlanning();

  useEffect(() => {
    const createMarker = async () => {
      // Import the AdvancedMarkerElement library
      const { AdvancedMarkerElement } = (await google.maps.importLibrary(
        'marker'
      )) as google.maps.MarkerLibrary;

      const marker = new AdvancedMarkerElement({
        position: shopDetails.position,
        map: map,
        content: buildContent(shopDetails),
      });

      markerRef.current = marker;

      // Add a right-click event listener for the marker
      marker.addListener('rightclick', () => {
        toggleHighlight(marker, shopDetails);
      });

      // Add a click event listener for the marker (optional)
      if (onClick) {
        marker.addListener('click', () => {
          //dispatch appropriate action
          dispatch(addPointOfSalesToRoute({ routeId: 1, shopDetails }));
        });
      }
    };

    createMarker();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shopDetails, onClick]);

  function buildContent(shopDetails: any) {
    const content = document.createElement('div');

    content.classList.add('property');
    content.innerHTML = `
      <div class="icon">
          <i aria-hidden="true" class="fa fa-icon fa-${shopDetails.type}" title="${shopDetails.type}"></i>
          <span class="fa-sr-only">${shopDetails.type}</span>
      </div>
      <div class="details">
          <div class="price">${shopDetails.price}</div>
          <div class="address">${shopDetails.address}</div>
          <div class="features">
          <div>
              <i aria-hidden="true" class="fa fa-bed fa-lg bed" title="bedroom"></i>
              <span class="fa-sr-only">bedroom</span>
              <span>${shopDetails.bed}</span>
          </div>
          <div>
              <i aria-hidden="true" class="fa fa-bath fa-lg bath" title="bathroom"></i>
              <span class="fa-sr-only">bathroom</span>
              <span>${shopDetails.bath}</span>
          </div>
          <div>
              <i aria-hidden="true" class="fa fa-ruler fa-lg size" title="size"></i>
              <span class="fa-sr-only">size</span>
              <span>${shopDetails.size} ft<sup>2</sup></span>
          </div>
          </div>
      </div>
      `;
    return content;
  }

  function toggleHighlight(markerView: any, property: any) {
    if (markerView.content.classList.contains('highlight')) {
      markerView.content.classList.remove('highlight');
      markerView.zIndex = null;
    } else {
      markerView.content.classList.add('highlight');
      markerView.zIndex = 1;
    }
  }

  return <div>Hello</div>; // The actual marker is handled through the Google Maps API
};

export default ShopMarker;
