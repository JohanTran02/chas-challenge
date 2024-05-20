'use client'

// Mapbox 
import ReactMapGL, { NavigationControl, GeolocateControl, Marker, Popup} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import style from "@/app/ui/style/map/mapbox.module.css";
import { getUserLocation } from "@/app/lib/map/geolocation";
import Geocoder from "./Geocoder";

// Json - Tillfällig test data till nålarna på kartan. 
import data from '@/json/map-activities.json'; 

// Image
import Image from 'next/image'
import map_pin from '@/public/map-pin.svg'

// Hooks
import { useEffect, useState } from "react";
import { Activity } from "@/app/lib/definitions";
import Searchbar from "./Searchbar";

const Mapbox = () => {
  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
	const [coords, setCoords] = useState<GeolocationCoordinates | undefined>()
	const [popup, setPopup] = useState<{showPopup: 'open' | 'close', index: number}>({showPopup: 'close', index: 0})
	const activities: Activity[] = data.activities; 
	
	useEffect(() => {
		getUserLocation("get", setCoords);
		console.log(activities)
	}, [])

	// console.log(coords, popup)
  return (
		<div className={style.mainStyle}>
			{
				(coords !== undefined) &&
				<ReactMapGL
					mapboxAccessToken={mapboxToken}
					mapStyle="mapbox://styles/mapbox/streets-v12"
					style={
						{background: '#f6f5ef', 
						height: '100vh', 
						width: '100vw', 
						position: 'absolute', 
						inset:'-100px 0 0 0', 
						zIndex: '2', 
						cursor: 'auto', 
						}
					}
					initialViewState={ coords ? 
						{latitude: coords.latitude, longitude: coords.longitude, zoom: 11} : 
						{latitude: 59.20, longitude: 18.03, zoom: 5}
					}
					maxZoom={20}
					minZoom={0}
					>
					<GeolocateControl
						style={{borderRadius: '50%'}}
						position="bottom-right" 
						trackUserLocation 
					/>

					<NavigationControl 
						position="bottom-right" 
						style={{borderRadius: '10px'}}
					/>

					<ul>
						{activities.map((activity, index) => {
							const {id, coordinates: {latitude, longitude}} = activity; 
							return (
								<Marker

									key={id}
									// onClick = få upp popup
									onClick={() => setPopup({showPopup: 'open', index: index})}
									latitude={latitude}
									longitude={longitude}
									color="red">
										<Image src={map_pin} height={32} width={32} alt="map pin"/>
								</Marker>
							)})
						}
					</ul>
					
					{popup.showPopup === "open"  && ( 
						<Popup 
						latitude={activities[popup.index].coordinates.latitude} 
						longitude={activities[popup.index].coordinates.longitude} 
						closeButton={true}
						closeOnClick={false}
						focusAfterOpen={true}
						onOpen={() => console.log('The popup is open!')}
							onClose={() => setPopup({showPopup: 'close', index: 0})}
							style={{paddingBottom: '20px'}}
							children={
								<article className="py-4 px-5">
									<h1 className="font-semibold text-xl pb-2">{activities[popup.index].name}</h1>
									<p className="leading-relaxed">{activities[popup.index].description}</p>
								</article>
							}
							/>)
						}
						<Geocoder />	
						<Searchbar />
      	</ReactMapGL>
			}
		</div>
  )
}


export default Mapbox;
