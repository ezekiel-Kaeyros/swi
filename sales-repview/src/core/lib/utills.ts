

export function truncateText(text: string, maxLength: number) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
}

export const convertAndDownloadCSV = (agentData: any) => {
  let objUrl = "/"
  if (agentData.length > 0) {

      let final_value = []; 
      // if(incrementalFiltering === true) {
      //     final_value = agentData
      // } else {
      //     final_value = attendances
      // }
      
      const titleKeys = Object.keys(agentData[0])
      // console.log("titleKeys: ", titleKeys)
  
      const refinedData = []
      refinedData.push(titleKeys)
  
      agentData.forEach((item: any) => {
          refinedData.push(Object.values(item))  
          // console.log("refinedData: ", refinedData)
      })

      let csvContent = ''
  
      refinedData.forEach(row => {
          csvContent += row.join(',') + '\n'; 
          // console.log("refinedData: ", csvContent)
      })
  
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8,' })
      // console.log("blob: ", blob)
  
      objUrl = URL.createObjectURL(blob)
      // console.log("objUrl: ", objUrl)
  }
  return objUrl;
}