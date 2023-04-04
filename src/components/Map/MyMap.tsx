import { LegacyRef, MutableRefObject, useEffect, useRef } from "react";

export default function MyMap({
    center,
    zoom,
  }: {
    center: google.maps.LatLngLiteral;
    zoom: number;
  }) {
    const ref = useRef<any>();
  
    useEffect(() => {
      let map = new window.google.maps.Map(ref.current, {
        center,
        zoom,
      });

      let marker = new window.google.maps.Marker({
        position: center,
        map: map, });
        marker.setMap(map);
        
      //create a marker 
        // marker: new window.google.maps.Marker({
        //   position: center,
        //   map: map,
        // }),
    });
  

    return <div ref={ref} id="map" />;
  } 