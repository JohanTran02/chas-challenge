import { Dispatch, SetStateAction } from "react"

export function getUserLocation(type: 'watch' | 'get', dispatch: Dispatch<SetStateAction<GeolocationCoordinates | undefined>>){
  const success = (position: GeolocationPosition) => dispatch(position.coords)

  const error = (err: GeolocationPositionError) => {
    dispatch({latitude: 59.334591, longitude: 18.063240} as GeolocationCoordinates);
    console.log(err.message, '- Coordinates is set to Stockholm with zoom level 11.'); 
  }

  if(type === "get") return navigator.geolocation.getCurrentPosition(success, error);
  if(type === "watch") return navigator.geolocation.getCurrentPosition(success, error)
}