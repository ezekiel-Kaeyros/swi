import { IActivity } from './features/types';

// export function updateTasksInPointOfSales(
//   routes: any,
//   routeId: number,
//   posId: number,
//   task: string | undefined,
//   currentActivity: IActivity
// ) {
//   // Find the route with the specified routeId
//   const routeToUpdate = routes.find(
//     (route: { id: number }) => route.id.toString() === routeId.toString()
//   );

//   if (routeToUpdate) {
//     // Find the pointOfSales with the specified posId
//     const pointOfSalesToUpdate = routeToUpdate.pointOfSales.find(
//       (pos: { id: number }) => pos?.id?.toString() === posId?.toString()
//     );

//     if (pointOfSalesToUpdate) {
//       // Check if the tasks array exists, if not, create it
//       if (!pointOfSalesToUpdate.hasOwnProperty('tasks')) {
//         pointOfSalesToUpdate.tasks = [];
//       }

//       // Check if the task already exists in the tasks array
//       const taskIndex = pointOfSalesToUpdate.tasks.indexOf(currentActivity);

//       if (taskIndex !== -1) {
//         // If the task exists, remove it
//         pointOfSalesToUpdate.tasks.splice(taskIndex, 1);
//       } else {
//         // If the task doesn't exist, add it
//         pointOfSalesToUpdate.tasks.push(currentActivity);
//       }
//     } else {
//       console.error(`Point of sales with ID ${posId} not found.`);
//     }
//   } else {
//     console.error(`Route with ID ${routeId} not found.`);
//   }

//   return routes;
// }

// Alternative
export function updateTasksInPointOfSales(
  routes: any,
  routeId: number,
  posId: number,
  task: IActivity // Change the parameter type to a single IActivity object
) {
  // Find the route with the specified routeId
  const routeToUpdate = routes.find(
    (route: { id: number }) => route.id.toString() === routeId.toString()
  );

  if (routeToUpdate) {
    // Find the pointOfSales with the specified posId
    const pointOfSalesToUpdate = routeToUpdate.pointOfSales.find(
      (pos: { id: number }) => pos?.id?.toString() === posId?.toString()
    );

    if (pointOfSalesToUpdate) {
      // Check if the tasks array exists, if not, create it
      if (!pointOfSalesToUpdate.hasOwnProperty('tasks')) {
        pointOfSalesToUpdate.tasks = [];
      }

      // Check if the task already exists in the tasks array
      const taskIndex = pointOfSalesToUpdate.tasks.findIndex(
        (t: IActivity) =>
          t?.name.toLocaleLowerCase().toString() ===
          task?.name?.toLocaleLowerCase().toString() // Adjust this line based on your actual object comparison criteria
      );

      console.log('tab index', taskIndex);

      if (taskIndex !== -1) {
        // If the task exists, remove it
        console.log('it exists');
        pointOfSalesToUpdate.tasks.splice(taskIndex, 1);
      } else {
        // Add the task to the tasks array
        pointOfSalesToUpdate.tasks.push(task);
      }
    } else {
      console.error(`Point of sales with ID ${posId} not found.`);
    }
  } else {
    console.error(`Route with ID ${routeId} not found.`);
  }

  return routes;
}

// Update task status

export function updateTaskStatus(
  data: any[],
  routeId: number,
  pointOfSalesId: number,
  activityId: number
): any[] {
  // Create a deep copy of the data structure
  const newData: any[] = JSON.parse(JSON.stringify(data));

  // Find the route with the given routeId in the copied data
  const route = newData.find(
    (route) => route?.id.toString() === routeId?.toString()
  );

  if (route) {
    // Find the pointOfSales with the given pointOfSalesId within the route
    const pointOfSales = route.pointOfSales.find(
      (pos: { id: number }) =>
        pos?.id?.toString() === pointOfSalesId?.toString()
    );

    if (pointOfSales) {
      // Find the task with the given activityId within the pointOfSales
      const task = pointOfSales.tasks.find(
        (task: { id: number }) => task.id.toString() === activityId?.toString()
      );

      if (task) {
        // Update the status to true
        task.status = true;

        // Return the entire updated data structure
        return newData;
      }
    }
  }

  // Return the original data structure if the route or pointOfSales is not found, or the task is not found
  return data;
}

// Add unique point of sales

export function addUniquePointOfSale(
  routesArray: any,
  routeId: number,
  newPointOfSale: any
) {
  routesArray.forEach((route: any) => {
    if (route?.id.toString() === routeId?.toString()) {
      const pointOfSaleExists = route.pointOfSales.some(
        (point: any) => point.id === newPointOfSale.id
      );

      if (!pointOfSaleExists) {
        route.pointOfSales.push(newPointOfSale);
      }
    }
  });

  return routesArray;
}

// Update the sales representative

export function updateSalesRepresentative(
  routes: any,
  routeId: number,
  newSalesRepresentative: string | undefined
) {
  // Find the route with the specified routeId
  const routeToUpdate = routes.find(
    (route: { id: number }) => route.id.toString() === routeId.toString()
  );

  if (routeToUpdate) {
    // Replace the entire salesRepresentative array with the new element
    routeToUpdate.salesRepresentative = [newSalesRepresentative];
  } else {
    console.error(`Route with ID ${routeId} not found.`);
  }

  return routes;
}

// Create a new trade channel

export const addTradeChannel = (
  data: any,
  clusterId: string | number,
  tradeChannelName: string
) => {
  return data.map((cluster: { id: string | number; tradeChannel: any }) => {
    if (cluster?.id.toString() === clusterId.toString()) {
      // Check if tradeChannel already exists
      const isTradeChannelExists = cluster?.tradeChannel?.find(
        (channel: { title: string }) => channel?.title === tradeChannelName
      );

      if (!isTradeChannelExists) {
        // If tradeChannel doesn't exist, create a new tradeChannel array

        const newTradeChannelArray = [
          ...(cluster?.tradeChannel || []),
          {
            key: cluster?.tradeChannel?.length + 1 || 1,
            title: tradeChannelName,
            description: [],
            content: [], // You can customize the content array based on your requirements
          },
        ];

        return {
          ...cluster,
          tradeChannel: newTradeChannelArray,
        };
      }
    }

    return cluster;
  });
};

// Add a sub content if it doesn't exist

export function addContentIfNotExist(
  name: string,
  channelClusters: any,
  clusterId: number | string,
  keyToBeUpdated: string | number,
  description: string[]
) {

  console.log("channelClusters", channelClusters)
  // Find the cluster with the specified ID
  const clusterToUpdate = channelClusters?.find(
    (cluster: { id: number | string }) =>
      cluster?.id.toString() === clusterId.toString()
  );

  // If the cluster is found
  if (clusterToUpdate) {
    // Find the tradeChannel with the specified key
    const tradeChannelToUpdate = clusterToUpdate?.tradeChannel?.find(
      (channel: { key: string | number }) =>
        channel?.key?.toString() === keyToBeUpdated?.toString()
    );

    // If the tradeChannel is found
    if (tradeChannelToUpdate) {
      // Check if the "content" key exists, if not, add it with an empty array
      if (!tradeChannelToUpdate?.hasOwnProperty('content')) {
        tradeChannelToUpdate.content = [
          {
            id: clusterToUpdate?.tradeChannel?.length + 1,
            description: [...description],
            title: name,
          },
        ];
      } else {
        tradeChannelToUpdate.content = [
          ...tradeChannelToUpdate?.content,
          {
            id: clusterToUpdate?.tradeChannel?.length + 1,
            description: [...description],
            title: name,
          },
        ];
      }
    } else {
      console.error(`TradeChannel with key ${keyToBeUpdated} not found.`);
    }
  } else {
    console.error(`Channel Cluster with ID ${clusterId} not found.`);
  }

  return channelClusters;
}
