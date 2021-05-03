import React from 'react';
import { MapView, IMapViewProps } from './map-view';

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

const Cameras = () => {
  return <div>Cameras</div>;
};

export const RoadCamMap: React.VFC<IRoadCamMapProps> = (props) => {
  return (
    <MapView {...props}>
      <Cameras />
    </MapView>
  );
};
