import PointOfSales from '@/core/models/Pos';
import Road from '@/core/models/Roads';
import RoadsItem from '@/core/models/RoadsItem';

export async function calculateAndDisplayRoute(
  directionsService: google.maps.DirectionsService,
  directionsRenderer: google.maps.DirectionsRenderer,
  currentRoute: PointOfSales[],
  color?: string
) {
  // console.log(currentRoute);
  // This code needs to be refactored to be dynamic
  let routesInfo;

  if (currentRoute) {
    // console.log(currentRoute[currentRoute?.length - 1]);
    const origin = {
      lat: currentRoute[0]?.latitude,
      lng: currentRoute[0]?.longitude,
    };
    // console.log(currentRoute[0]);
    // console.log(currentRoute.length);
    // console.log(currentRoute[currentRoute?.length - 1].latitude);

    const destination = {
      lat: currentRoute[currentRoute.length - 1]?.latitude,
      lng: currentRoute[currentRoute.length - 1]?.longitude,
    };

    const trimmedPos = [...currentRoute.slice(1, -1)];

    const wayPoints = trimmedPos.map((point: PointOfSales) => {
      const waypoint = {
        location: {
          lat: point?.latitude,
          lng: point?.longitude,
        },
        stopover: true,
      };
      return waypoint;
    });

    directionsService
      .route({
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidFerries: true,
        origin: origin,
        destination: destination,
        waypoints: wayPoints,
        travelMode: google.maps.TravelMode.DRIVING,
      })
      .then((result: any) => {
        // dispatch result from here
        directionsRenderer.setDirections(result);
        directionsRenderer.setOptions({
          suppressMarkers: true,
        });
      })
      .catch((e: any) => {
        alert('Could not display directions due to:' + e);
      });
  }
  // console.log('current route', currentRoute);
}
