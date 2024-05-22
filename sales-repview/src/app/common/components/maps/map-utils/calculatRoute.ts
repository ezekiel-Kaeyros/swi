import PointOfSales from '@/core/models/Pos';
import Road from '@/core/models/Roads';

export async function calculateAndDisplayRoute(
  directionsService: google.maps.DirectionsService,
  directionsRenderer: google.maps.DirectionsRenderer,
  currentRoute: Road,
  color?: string
) {
  // This code needs to be refactored to be dynamic
  let routesInfo;

  console.log('current route', currentRoute);
  const pos = currentRoute?.pos;
  const origin = {
    lat: pos[0].latitude,
    lng: pos[0].longitude,
  };

  const destination = {
    lat: pos[pos.length - 1].latitude,
    lng: pos[pos.length - 1].longitude,
  };

  const trimmedPos = [...pos.slice(1, -1)];

  const wayPoints = trimmedPos.map((point: PointOfSales) => {
    const waypoint = {
      location: {
        lat: point.latitude,
        lng: point.longitude,
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
