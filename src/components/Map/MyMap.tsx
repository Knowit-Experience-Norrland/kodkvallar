import { useEffect, useRef } from "react";

//get map from google maps api
export default function MyMap({
  center,
  zoom,
}: {
  center: google.maps.LatLngLiteral;
  zoom: number;
}) {
  const ref = useRef<any>();

  useEffect(() => {
    //create map with our center and zoom
    let map = new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
    //add marker to map
    let marker = new window.google.maps.Marker({
      position: center,
      map: map,
    });
    marker.setMap(map);
  });

  return <div ref={ref} id="map" />;
}
