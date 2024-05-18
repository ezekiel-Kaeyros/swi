import { RoadItemType } from "@/redux/features/types";

export async function calculateAndDisplayRoute(
    directionsService: google.maps.DirectionsService,
    directionsRenderer: google.maps.DirectionsRenderer,
    currentRoute: any,
    color?: string,
  ) {
    // This code needs to be refactored to be dynamic
    let routesInfo;

    console.log('current route', currentRoute);
    const pos = currentRoute?.roadItems;
    console.log("CURRENT POS: ", currentRoute?.roadItems);
    // const origin = {
    //   lat: pos[0].position.lat,
    //   lng: pos[0].position.lng,
    // };

    // const destination = {
    //   lat: pos[pos.length - 1].position.lat,
    //   lng: pos[pos.length - 1].position.lng,
    // };

    const origin = {
      lat: pos[0].posId?.latitude,
      lng: pos[0].posId?.longitude,
    };

    const destination = {
      lat: pos[pos.length - 1].posId?.latitude,
      lng: pos[pos.length - 1].posId?.longitude,
    };

    console.log(origin, destination, "ori-dest")

    const trimmedPos = [...pos.slice(1, -1)];

    const wayPoints = trimmedPos.map((point: RoadItemType) => {
      const waypoint = {
        location: {
          lat: point?.posId?.latitude,
          lng: point?.posId?.longitude,
        },
        // location: {
        //   lat: point.position.lat,
        //   lng: point.position.lng,
        // },
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