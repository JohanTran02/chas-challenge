// style
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'

// tools
import MapBoxGeocoder from '@mapbox/mapbox-gl-geocoder'; 
import mapboxgl from 'mapbox-gl';
import { useControl } from 'react-map-gl'
import { mapboxFetch } from './Searchbar';

const Geocoder = () => {
  const controls = new MapBoxGeocoder({
    accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN as string, 
    placeholder: 'Sök här',
    marker: true,
    mapboxgl: mapboxgl,
    collapsed: true,
    autocomplete: true,
    language: 'sv',
  });

  // controls.on('result', (e) => {
  //   console.log(e.result)
  //   mapboxFetch(e.result.context[0].mapbox_id)  
  // })
  useControl(() => controls);
  return null;  
}

export default Geocoder;
