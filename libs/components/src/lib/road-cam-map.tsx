import React, { useMemo, useRef, useState } from 'react';
import { Layer, MapRef, Marker, Source } from 'react-map-gl';
import Cluster from './cluster';
import { MapMarker } from './map-marker';
import { MapView, IMapViewProps } from './map-view';
import camJson from './road-cameras.json';

interface ICameraInfo {
  type: string;
  properties: {
    tags: unknown[];
    symbol: string;
    label: { text: string };
    locked: boolean;
    video: string;
    photo: string;
    customPopup: string;
    layerId: string;
    icon: {
      iconUrl: string;
      iconRetinaUrl: string;
      iconSize: [number, number];
      iconAnchor: [number, number];
      popupAnchor: [number, number];
    };
  };
  id: string;
  geometry: {
    type: string;
    coordinates: [number, number];
  };
}

export interface IRoadCamMapProps extends IMapViewProps {
  cameras: ICameraInfo[];
}

const Cameras = ({ cameras }) => {
  const Markers = useMemo(() => {
    return cameras.map((cam: ICameraInfo) => {
      return (
        <Marker
          key={cam.id}
          longitude={cam.geometry.coordinates[0]}
          latitude={cam.geometry.coordinates[1]}
          // offsetLeft={}
          // offsetTop={}
        >
          <MapMarker label={cam.properties.label.text} />
        </Marker>
      );
    });
  }, [cameras]);

  return Markers;
};

export const RoadCamMap: React.VFC<IRoadCamMapProps> = (props) => {
  return (
    <MapView {...props}>
      <Cameras cameras={camJson.features as ICameraInfo[]} />
    </MapView>
  );
};
