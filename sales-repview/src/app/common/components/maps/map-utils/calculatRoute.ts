export async function calculateAndDisplayRoute(
    directionsService: google.maps.DirectionsService,
    directionsRenderer: google.maps.DirectionsRenderer,
    currentRoute: any,
    color?: string,
  ) {
    // This code needs to be refactored to be dynamic
    let routesInfo;

    console.log('current route', currentRoute);
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
        // dispatch result from here
        directionsRenderer.setDirections(result);
      })
      .catch((e: any) => {
        alert('Could not display directions due to:' + e);
      });
  }