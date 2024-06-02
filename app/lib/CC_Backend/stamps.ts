import { Dispatch, SetStateAction } from "react";
import { StampCategories, Stampinfo } from "../definitions";
import { UnknownAction } from "@reduxjs/toolkit";

export const getStampsInfo = async(endpoint: 'getstampinfo' | 'getcategorywithstamps', query: 'stampId' | 'categoryId', value: number, accessToken : string) => {
  
  if(!accessToken) return;

    try {
      const response = await fetch(`https://natureai.azurewebsites.net/stamps/${endpoint}?${query}=${value}`, {
        headers:{
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        }
      }); 
      
      if(!response.ok){
        console.log(response.status, response.statusText);
      }
      
      const data = await response.json() as Stampinfo | StampCategories; 
      console.log(data);
      return data

    } catch (error) {
      console.log(error)
    }
  
}

export const getCompletedStamps = async (accestoken: string, setIsLoading: Dispatch<SetStateAction<boolean>>, dispatch: Dispatch<UnknownAction>) => {
  try {
    const response = await fetch( 'https://natureai.azurewebsites.net/stamps/getuserscollectedstamps',{
      headers:{
        'Content-Type': 'application/json', 
        'Authorization': `Bearer ${accestoken}`
      }
    })

    if(!response.ok) {
      throw new Error(`${response.status}, ${response.statusText}`); 
    }

    const data = await response.json()
    dispatch({type: 'stamp/setCollectStamps', payload: data})
    setIsLoading(false); 
    // console.log(data); 
    return data; 

  } catch (error) {
    console.log(error); 
  }
}