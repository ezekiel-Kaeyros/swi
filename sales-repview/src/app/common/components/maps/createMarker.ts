import { IPointOfSalesType } from '@/core/utils/types';

export const createMarker = async (
  shopDetails: IPointOfSalesType,
  map: any,
  onClick: boolean,
  selectedRouteId: number,
  dispatch: any,
  currentRoute?: any,
  addPointOfSalesToRoute?: any
) => {
  // Import the AdvancedMarkerElement library
  const { AdvancedMarkerElement } = (await google.maps.importLibrary(
    'marker'
  )) as google.maps.MarkerLibrary;

  // Default point of sales icon
  const defaultPointOfSalesIcon = document.createElement('img');
  defaultPointOfSalesIcon.src = '/icons/defaultMarkerIcon.svg';

  // Active or selected point of sales icon
  const activePointOfSalesIcon = document.createElement('img');
  activePointOfSalesIcon.src = '/icons/activeMarkerIcon.svg';

  let currentPointOfSales = currentRoute?.pointOfSales;

  const marker = new AdvancedMarkerElement({
    position: {
      lat: shopDetails.position.lat,
      lng: shopDetails.position.lng,
    },
    map: map,
    content: defaultPointOfSalesIcon,
  });

  currentPointOfSales?.map((pos: any) => {
    if (pos?.id === shopDetails.id) {
      marker.content = activePointOfSalesIcon;
    }
  });
  // Add a right-click event listener for the marker
  marker.addListener('dblclick', () => {
    console.log('double click');
  });

  const addToPosToRoute = (routeId: 1, posId: number) => {
    dispatch(
      addPointOfSalesToRoute({
        routeId: selectedRouteId,
        posId: shopDetails?.id,
      })
    );
  };

  // Add a click event listener for the marker (optional)
  if (onClick) {
    marker.addListener('click', () => {
      const infoBubble = buildContent(shopDetails, addToPosToRoute);

      infoBubble.open({
        anchor: marker,
        map,
      });
    });
  }
};

// Adding custom info window on map

export function buildContent(shopDetails: any, addToPosToRoute: any) {
  const content = document.createElement('div');

  const listOfTasks = shopDetails?.tasks?.map(
    (task: any) =>
      `<li class='bg-buttonPrimary w-fit text-white rounded-full mt-2 py-1 px-3 text-sm mr-2'>${task}</li>`
  );

  const buttonElement = `<button id='button' class="bg-buttonPrimary  hover:opacity-80  w-fit text-xs rounded-full text-white px-4 py-2">
  Add to route
</button>`;

  content.classList.add('property');
  content.innerHTML = `
  <div class="bg-white max-w-[20rem] text-[#2C353A] p-4 rounded-xl">
        <Image
          class="rounded-xl w-full h-16 object-cover"
          src="./images/victoryGardenImage.jpg"
          alt="Image of the shop"
        />
        <div class="w-full mt-2">
          <h1 class="font-bold">${shopDetails?.name}</h1>
          <h3 class="opacity-80 text-sm pr-4 pb-2">
           ${shopDetails?.shopLocation}
          </h3>

          <div class="flex items-center   gap-2 w-full justify-start flex-wrap">
            <div class="flex items-center pr-2 h-8 bg-[#CCEAF7] px-3 py-1 rounded-full">
              <img src="/icons/moneyIconRed.svg" alt="money icon" />
              <h1 class="text-sm ml-1.5">${shopDetails?.firstStat}</h1>
            </div>
            <div class="flex items-center pr-2 h-8 bg-[#CCEAF7] px-3 py-1 rounded-full">
              <Image src="/icons/trend-upIcon.svg" alt="Trend icon" />
              <h1 class="text-sm ml-1.5">${shopDetails?.secondStat}</h1>
            </div>
            <div class="flex items-center pr-2 h-8 bg-[#CCEAF7] px-3 py-1 rounded-full">
              <Image src="/icons/contactIconGreen.svg" alt="Contact icon" />
              <h1 class="text-sm ml-1.5">${shopDetails?.contact} </h1>
            </div>

            <div class="flex items-center pr-2 h-8 bg-[#CCEAF7] px-3 py-1 rounded-full">
              <Image src="/icons/userIconGreen.svg" alt="User icon" />
              <h1 class="text-sm ml-1.5">${shopDetails?.shopOwner} </h1>
            </div>
          </div>
          <h1 class="font-bold mt-2">Tasks</h1>
          <ul class="flex flex-wrap">
          
          ${listOfTasks ? listOfTasks : 'No tasks added'} 
          
          </ul>
          <div class="mt-6 flex w-full ml-auto">
           ${listOfTasks ? '' : buttonElement} 
          </div>
        </div>
      </div>
      `;

  // Triggers the action of add to a point of sales
  const button = content.querySelector('#button');

  const infowindow = new google.maps.InfoWindow({
    content: content,
  });

  button?.addEventListener('click', () => {
    addToPosToRoute(shopDetails?.id);
    infowindow?.close();
  });

  return infowindow;
}

export function toggleHighlight(markerView: any, property: any) {
  if (markerView.content.classList.contains('highlight')) {
    markerView.content.classList.remove('highlight');
    markerView.zIndex = null;
  } else {
    markerView.content.classList.add('highlight');
    markerView.zIndex = 1;
  }
}
