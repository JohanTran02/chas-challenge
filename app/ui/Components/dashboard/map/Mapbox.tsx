'use client'

// Mapbox 
import ReactMapGL, { NavigationControl, GeolocateControl, Marker, Popup, Layer, Source} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import style from "@/app/ui/style/map/mapbox.module.css";
import { getUserLocation } from "@/app/lib/map/geolocation";
import Geocoder from "./Geocoder";

// Json - Tillfällig test data till nålarna på kartan. 
import data from '@/json/map-activities.json'; 

// Hooks
import { useEffect, useState } from "react";
import { Stampinfo } from "@/app/lib/definitions";
import Searchbar from "./Searchbar";

// Image
import Image from 'next/image'
import map_pin from '@/public/map-pin.svg'

// Redux
import { RootState } from "@/app/lib/redux/store";
import { useSelector } from "react-redux";

const Mapbox = () => {
	const markerInfo = useSelector((state: RootState) => state.map.markerInfo);

	// const activities: Activity[] = data.activities; 
  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
	
	const [coords, setCoords] = useState<GeolocationCoordinates | undefined>();
	const [popup, setPopup] = useState<'open' | 'close'>('close')
	
	useEffect(() => {
		getUserLocation("get", setCoords);
		console.log(markerInfo)
	}, [])

	const intitialView = (markerInfo: Stampinfo | null, coords: GeolocationCoordinates | undefined) => {
		if(markerInfo) return {latitude: Number(markerInfo.latitude), longitude: Number(markerInfo.longitude), zoom: 11}
		return coords ? {latitude: coords.latitude, longitude: coords.longitude, zoom: 11} : 
		{latitude: 59.20, longitude: 18.03, zoom: 5}
	}
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
					initialViewState={intitialView(markerInfo, coords)}
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

					{markerInfo && 
						<>
							<Marker
								// onClick = få upp popup
								onClick={() => setPopup('open')}
								latitude={Number(markerInfo.latitude)}
								longitude={Number(markerInfo.longitude)}
								color="red">
									<Image src={map_pin} height={32} width={32} alt="map pin"/>
							</Marker>

							{popup === "open" && <Popup
								latitude={Number(markerInfo.latitude)}
								longitude={Number(markerInfo.longitude)}
								closeButton={true}
								closeOnClick={false}
								focusAfterOpen={true}
								onOpen={() => console.log('The popup is open!')}
								onClose={() => setPopup('close')}
								style={{paddingBottom: '20px'}}
								children={
									<article className="py-4 px-5">
										<h1 className="font-semibold text-xl pb-2">{markerInfo.name}</h1>
										<p className="leading-relaxed">{markerInfo.facts}</p>
									</article>
								}
								/>}
						</>
					}
						<Geocoder />	
						<Searchbar />
      	</ReactMapGL>
			}
		</div>
  )
}


export default Mapbox;
