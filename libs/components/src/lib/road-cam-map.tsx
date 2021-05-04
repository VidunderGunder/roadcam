import React, { useMemo } from 'react';
import { Marker } from 'react-map-gl';
import { MapMarker } from './map-marker';
import { MapView, IMapViewProps } from './map-view';
import camJson from './road-cameras.json';
import { ICamInfo } from './cam-info';

export interface IRoadCamMapProps extends IMapViewProps {
  cameras: ICamInfo[];
}

const Cameras = ({ cameras }) => {
  const Markers = useMemo(() => {
    return cameras.map((cam: ICamInfo) => {
      return (
        <Marker
          longitude={cam.geometry.coordinates[0]}
          latitude={cam.geometry.coordinates[1]}
          css={`
            height: 0;
            width: 0;
          `}
        >
          <div
            css={`
              position: relative;
              bottom: 50%;
              right: 50%;
            `}
          >
            <MapMarker cam={cam} />
          </div>
        </Marker>
      );
    });
  }, [cameras]);

  return Markers;
};

export const RoadCamMap: React.VFC<IRoadCamMapProps> = (props) => {
  return (
    <MapView {...props}>
      <Cameras cameras={camJson.features as ICamInfo[]} />
    </MapView>
  );
};
