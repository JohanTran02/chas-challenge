'use client'

// Mapbox 
import Map, { NavigationControl, GeolocateControl, Marker, Popup} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import style from "@/app/ui/style/map/mapbox.module.css";
import { getUserLocation } from "@/app/lib/map/geolocation";

// Json - Tillfällig test data till nålarna på kartan. 
import data from '@/json/map-activities.json'; 

// Image
import Image from 'next/image'
import map_pin from '@/public/map-pin.svg'

// Hooks
import { useEffect, useState } from "react";
import { Activity } from "@/app/lib/definitions";

const Mapbox = () => {
  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
	const [coords, setCoords] = useState<GeolocationCoordinates | undefined>()
	const [popup, setPopup] = useState<{showPopup: 'open' | 'close', index: number}>({showPopup: 'close', index: 0})
	const activities: Activity[] = data.activities; 
	
	useEffect(() => {
		getUserLocation("watch", setCoords);
		console.log(activities)
	}, [])

	// console.log(coords, popup)
  return (
		<div className={style.mainStyle}>
			{
				(coords !== undefined) &&
				<Map
					mapboxAccessToken={mapboxToken}
					mapStyle="mapbox://styles/mapbox/streets-v12"
					style={{height: '100vh', width: '100vw', position: 'relative', zIndex: '2', cursor: 'auto'}}
					initialViewState={ coords ? 
						{latitude: coords.latitude, longitude: coords.longitude, zoom: 11} : 
						{latitude: 59.20, longitude: 18.03, zoom: 5}
					}
					maxZoom={20}
					minZoom={0}
					>
					<GeolocateControl 
						position="bottom-right" 
						trackUserLocation={true} 
						style={{borderRadius: '50%'}}
					/>

					<NavigationControl 
						position="bottom-right" 
						style={{borderRadius: '10px'}}
					/>

					<ul>
						{activities.map((activity, index) => {
							const {id, coordinates: {latitude, longitude}} = activity; 
							return (
								<li key={id}>
									<Marker
										// onClick = få upp popup
										onClick={() => setPopup({showPopup: 'open', index: index})}
										latitude={latitude}
										longitude={longitude}
										color="red">
										<Image src={map_pin} height={32} width={32} alt="map pin"/>
									</Marker>
								</li>
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
      	</Map>
			}
		</div>
  )
}


export default Mapbox;
