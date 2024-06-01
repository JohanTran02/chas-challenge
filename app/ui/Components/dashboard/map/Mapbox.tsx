'use client'

// Mapbox 
import ReactMapGL, { NavigationControl, GeolocateControl, Marker, Popup, Layer, Source, MapboxStyle } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { getUserLocation } from "@/app/lib/map/geolocation";
import Geocoder from "./Geocoder";
import style from '@/app/ui/style/map/mapbox.module.css'

// Hooks
import { useEffect, useState } from "react";
import { MapboxStyleProp, Stampinfo } from "@/app/lib/definitions";
import Searchbar from "./Searchbar";

// Image
import ImageHandler from "@/app/ui/ImageHandler";

// Redux
import { RootState } from "@/app/lib/redux/store";
import { useSelector } from "react-redux";


// TS definition for props
type props = {
	styleProp: Partial<MapboxStyleProp>;
	geocontrol: boolean,
	navcontrol: boolean;
	interactive: boolean;
	latitude?: string;
	longitude?: string;
	name?: string;
	facts?: string;
	trackResize: boolean
}

const Mapbox = ({ styleProp, geocontrol, navcontrol, interactive, latitude, longitude, name, facts, trackResize }: props) => {
	const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
	const markerInfo = useSelector((state: RootState) => state.map.markerInfo);

	const [coords, setCoords] = useState<GeolocationCoordinates | undefined>();
	const [popup, setPopup] = useState<'open' | 'close'>('close')

	useEffect(() => {
		getUserLocation("watch", setCoords);
	}, [setCoords])

	const intitialView = (markerInfo: Stampinfo | null, coords: GeolocationCoordinates | undefined) => {
		if (latitude && longitude) return { latitude: Number(latitude), longitude: Number(longitude), zoom: 15 }
		if (markerInfo) return { latitude: Number(markerInfo.latitude), longitude: Number(markerInfo.longitude), zoom: 15 }
		return coords ? { latitude: coords.latitude, longitude: coords.longitude, zoom: 11 } :
			{ latitude: 59.20, longitude: 18.03, zoom: 5 }
	}
	return (
		<div /* className={style.mainStyle} */>
			{
				(coords !== undefined) &&
				<ReactMapGL
					mapboxAccessToken={mapboxToken}
					mapStyle="mapbox://styles/mapbox/streets-v12"
					style={{
						background: styleProp.background,
						height: styleProp.height,
						width: styleProp.width,
						position: 'absolute',
						borderRadius: styleProp.borderRadius ? styleProp.borderRadius : undefined,
						inset: styleProp.inset,
						zIndex: styleProp.zIndex,
						cursor: styleProp.cursor,
						translate: styleProp.translate ? styleProp.translate : undefined,
					}}
					interactive={interactive}
					initialViewState={intitialView(markerInfo, coords)}
					maxZoom={20}
					minZoom={0}
					trackResize={trackResize ? trackResize : undefined}
				>

					{geocontrol &&
						<>
							<GeolocateControl
								style={{ borderRadius: '50%' }}
								position="bottom-right"
								trackUserLocation
							/>
							<Geocoder />
							<Searchbar />
						</>
					}

					{navcontrol && <NavigationControl
						position="bottom-right"
						style={{ borderRadius: '10px' }}
					/>}

					{(markerInfo || (latitude || longitude)) &&
						<>

							{
								<Marker
									// onClick = få upp popup
									onClick={() => setPopup('open')}
									latitude={markerInfo ? Number(markerInfo.latitude) : Number(latitude)}
									longitude={markerInfo ? Number(markerInfo.longitude) : Number(longitude)}
									color="red">
									<ImageHandler image={{
										src: "map-pin.svg",
										height: 0,
										width: 0,
										alt: "map pin",
										className: "object-cover object-center size-4"
									}} />
								</Marker>}

							{(popup === "open" && !longitude) && <Popup
								latitude={markerInfo ? Number(markerInfo.latitude) : Number(latitude)}
								longitude={markerInfo ? Number(markerInfo.longitude) : Number(longitude)}
								closeButton={true}
								closeOnClick={false}
								focusAfterOpen={true}
								onOpen={() => console.log('The popup is open!')}
								onClose={() => setPopup('close')}
								style={{ paddingBottom: '20px' }}>
								<article className="py-4 px-5">
									<h1 className="font-semibold text-xl pb-2">{markerInfo ? markerInfo.name : name}</h1>
									<p className="leading-relaxed">{markerInfo ? markerInfo.facts : facts}</p>
								</article>
							</Popup>}
						</>
					}
				</ReactMapGL>
			}
		</div>
	)
}


export default Mapbox;
