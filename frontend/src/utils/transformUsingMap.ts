import { IChannelCluster } from "@/redux/features/types"


export const tranformChannelCluster = (data: IChannelCluster[]) => {

    const newData = data?.map((channelCluster: IChannelCluster) => {
        console.log(channelCluster, "insisde the map functions...")
        return {
          id: channelCluster?._id, 
          name: channelCluster?.name, 
          tradeChannelContent: channelCluster?.trade_channels_id, 
        }
    })

    return newData

} 

export const extractArrayfromChannelCluster = (data: IChannelCluster[]) => {
    const transformedData = tranformChannelCluster (data)
    // console.log("___>>>___>>>", transformedData)
    const newData = transformedData?.map((data: any) => ({ id: data?.id, name: data?.name })); 
    // console.log("___>>>___>>>___", newData)
    return newData;
}