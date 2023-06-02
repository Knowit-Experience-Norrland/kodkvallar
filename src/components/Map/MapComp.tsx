import React from "react";
import { MapContainer, Marker, TileLayer } from 'react-leaflet'

// type for coordinates props
type Coordinates = {
  position: {
    lat: number;
    lng: number;
  };
};

 
const MapComp: React.FC<Coordinates> = ({position}) => {

  return (
    <MapContainer center={[position.lat, position.lng]} zoom={15} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[position.lat, position.lng]}>
  </Marker>
</MapContainer>
  );
}

export default MapComp;