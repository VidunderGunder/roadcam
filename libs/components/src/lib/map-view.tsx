import React, { useState } from 'react';
import { use100vh } from 'react-div-100vh';
import MapGL from 'react-map-gl';

interface IMapboxState {
  latitude: number;
  longitude: number;
  zoom: number;
}
type MapboxStateSet = React.SetStateAction<IMapboxState>;
type MapboxStateSetDispatch = React.Dispatch<
  React.SetStateAction<IMapboxState>
>;

export interface IMapViewProps {
  mapboxToken?: string;
  defaultLatitude?: number;
  defaultLongitude?: number;
  defaultZoom?: number;
}

export default MapView;
export const MapView: React.FC<IMapViewProps> = ({
  mapboxToken,
  defaultLatitude = 59.133257,
  defaultLongitude = 8.711183,
  defaultZoom = 6.5,
  ...props
}) => {
  const height = use100vh();
  const [viewport, setViewport]: [
    viewport: IMapboxState,
    setViewport: MapboxStateSetDispatch
  ] = useState({
    latitude: defaultLatitude,
    longitude: defaultLongitude,
    zoom: defaultZoom,
  });

  return (
    <div style={{ height: height, maxHeight: '100%' }} {...props}>
      <MapGL
        {...viewport}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxApiAccessToken={mapboxToken}
        onViewportChange={(nextViewport: MapboxStateSet) =>
          setViewport(nextViewport)
        }
      >
        {props.children}
      </MapGL>
    </div>
  );
};
