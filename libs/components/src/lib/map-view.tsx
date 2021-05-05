import React, { useState } from 'react';
import { use100vh } from 'react-div-100vh';
import MapGL from 'react-map-gl';
import { InteractiveMapProps } from 'react-map-gl/src/components/interactive-map';

interface IMapboxState {
  latitude: number;
  longitude: number;
  zoom: number;
}
type MapboxStateSet = React.SetStateAction<IMapboxState>;
type MapboxStateSetDispatch = React.Dispatch<
  React.SetStateAction<IMapboxState>
>;

export interface IMapViewProps extends InteractiveMapProps {
  mapboxToken?: string;
  defaultLatitude?: number;
  defaultLongitude?: number;
  defaultZoom?: number;
  defaultBearing?: number;
  defaultPitch?: number;
  disable?: boolean;
}

export const MapView: React.FC<IMapViewProps> = ({
  mapboxToken,
  defaultLatitude = 59.133257,
  defaultLongitude = 8.511183,
  defaultZoom = 6,
  defaultBearing = 0,
  defaultPitch = 0,
  disable = false,
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
    bearing: defaultBearing,
    pitch: defaultPitch,
  });

  return (
    <div
      style={{
        height: height,
        maxHeight: '100%',
        width: '100%',
      }}
    >
      <MapGL
        {...viewport}
        width="100%"
        height="100%"
        mapStyle="mapbox://styles/mapbox/dark-v10"
        onViewportChange={(nextViewport: MapboxStateSet) => {
          if (disable) return;
          setViewport(nextViewport);
        }}
        mapboxApiAccessToken={mapboxToken}
        {...props}
      >
        {props.children}
      </MapGL>
    </div>
  );
};
