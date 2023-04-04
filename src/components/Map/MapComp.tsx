import React, { ReactElement, useCallback, useState } from "react";
import { Status, Wrapper } from "@googlemaps/react-wrapper";
import MyMap from "./MyMap";

type Coordinates = {
  position: {
    lat: number;
    lng: number;
  };
};

const render = (status: Status): ReactElement => {
  if (status === Status.FAILURE) return <div>Error..</div>;
  return <div>Loading..</div>;
};
const googleMapsApiKey = "AIzaSyBMSulbefyIZbyU2njvyxT_hDvbdZE3jto";


export const GoogleMaps: React.FC<Coordinates> = ({position}) => {

  return (
    <Wrapper apiKey={googleMapsApiKey} render={render}>
    <MyMap  center={position} zoom={15}/>
  </Wrapper>
  )
};

export default GoogleMaps;
