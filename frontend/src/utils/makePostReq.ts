import { getUserCookies } from "@/cookies/cookies"
import { BASE_URL } from "./constants"

const headers = {
  Authorization: `Bearer ${getUserCookies()}`, 
  'content-type': 'application/json', 
  'Access-Control-Allow-Origin': '*'
}

export const makeGetReques = async (url: any) => {
  try {
    const response = await fetch (
      `${ url }`, {
        method: 'GET',
        headers
      }
    )
    const result =  await response.json()
    return result
  } catch (error) {
    alert(`Something went wrong (${error})`)
    return error
  }
}

export const makePostReques = async (url: any, finalData: any) => {
    try {
      console.log(finalData, "finalDatafinalData")
      const response = await fetch (`${ url }`, {
        method: "POST", 
        headers,
        body: JSON.stringify(finalData), 
      })
      const result =  await response.json()
      return result
    } catch (error) {
      alert(`Something went wrong (${error})`)
      return error
    }
}

export const makePutReques = async (url: any, finalData: any) => {
  try {
    const response = await fetch (`${ url }`, {
      method: "PUT", 
      headers,
      body: JSON.stringify(finalData), 
    })
    const result =  await response.json()
    return result
  } catch (error) {
    alert(`Something went wrong (${error})`)
    return error
  }
}