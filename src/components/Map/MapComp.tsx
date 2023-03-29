import React from "react";
import GoogleMapReact from "google-map-react";
import "../../CSS/components/Map/Map.scss";

interface MapProps {
 lat: number;
 lng: number;
}

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

const MapComp = ({lat, lng}: MapProps) => {
  const zoom = 11;

return (
  <div style={{ height: '300px', width: '100%' }}>
  <GoogleMapReact
    bootstrapURLKeys={{ key: "AIzaSyBMSulbefyIZbyU2njvyxT_hDvbdZE3jto" }}
    defaultCenter={{lat, lng }}
    defaultZoom={zoom}
  >
    <AnyReactComponent
      lat={lat}
      lng={lng}
      text="My Marker"
    />
  </GoogleMapReact>
</div>
  );
};

export default MapComp;
