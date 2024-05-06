'use client'

import {getUserLocation} from "@/app/lib/map/geolocation"
import { useEffect } from "react"

const GeoLocation = () => {
  useEffect(() => {
    getUserLocation()
  }, [])
  return <></>
}

export default GeoLocation;
