// import { IActivity } from "@/redux/features/types";


export const getAllActivitiesForPOS = (activities: [], channelCluster: string) => {

  console.log(activities, channelCluster, "????")

  // THE MAP IS ADDED TO INSERT THE NAME OF THE ACTIVITY IN EACH ACTIVITY ITEM
    const isChannelClusterInActivities = activities?.map((activ: any) => {
        const activitieIt = activ?.activitieItems?.filter ((activIt: any) => {
          return activIt?.channelClusters[0]?._id === channelCluster
        }).map ((activIt: any) => {
          return {
            ...activIt, 
            channeCName: activ?.name, 
            selected: false, 
          }
        })
        return activitieIt
    }).flat(); 

    return isChannelClusterInActivities

}


export const getAllActivitiesForPOSOnLoad = (activities: [], routeActivities: [], channelCluster: string) => {

  const flatenAllActivitiesItems = activities?.map((activity: any) => {
    const activitieIt = activity?.activitieItems?.map((actityItem: any) => {
      return actityItem
    })
    return activitieIt
  }).flat()

  const activitiesFortheRouteOnly = routeActivities?.map((routeActivity: any) => {
    let finalResult: any = []
    flatenAllActivitiesItems?.forEach((element: any) => {
      if (element?._id === routeActivity?._id) {
        finalResult.push(element)
      }
    });
    return finalResult
  }).flat()

  console.log(flatenAllActivitiesItems, activitiesFortheRouteOnly, "????>>>")

  const activitieIt = activitiesFortheRouteOnly?.filter ((activIt: any) => {
    return activIt?.channelClusters[0]?._id === channelCluster
  })
  // .map ((activIt: any) => {
  //   return {
  //     ...activIt, 
  //     channeCName: activ?.name, 
  //     selected: false, 
  //   }
  // })

  console.log(activitieIt, ";;;;")

  return activitieIt

  // // THE MAP IS ADDED TO INSERT THE NAME OF THE ACTIVITY IN EACH ACTIVITY ITEM
  //   const isChannelClusterInActivities = activitiesFortheRouteOnly?.map((activ: any) => {
  //       const activitieIt = activ?.activitieItems?.filter ((activIt: any) => {
  //         return activIt?.channelClusters[0] === channelCluster
  //       }).map ((activIt: any) => {
  //         return {
  //           ...activIt, 
  //           channeCName: activ?.name, 
  //           selected: false, 
  //         }
  //       })

  //       return activitieIt
  //   }).flat(); 

  //   return isChannelClusterInActivities

}
