'use client'
import { useEffect } from "react";


const Searchbar = () => {
  

  useEffect(() => {
    // mapboxFetch('solna'); 
  }, [])
  return (
    null
  )
}

export default Searchbar

export const mapboxFetch = async (data:  string) => {
    const apikey = process.env.NEXT_PUBLIC_MAPBOX_TOKEN
    const promise = await fetch(`https://api.mapbox.com/search/searchbox/v1/retrieve/${data}?session_token=${apikey}&access_token=${apikey}`)
    const json = await promise.json();
    const name = await json.features[0].properties.name; 
    const placeFormatted = await json.features[0].properties.place_formatted; 
    console.log(name, placeFormatted, json);
    return json; 
  }