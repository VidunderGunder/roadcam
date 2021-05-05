import React, { useMemo } from 'react';
import { Marker } from 'react-map-gl';
import { MapMarker } from './map-marker';
import { MapView, IMapViewProps } from './map-view';
import { ICamInfo } from './cam-info';
import useFetch from 'use-http';
import { FullscreenMessage } from './fullscreen-message';

const Cameras = ({ cameras }) => {
  const Markers = useMemo(() => {
    return cameras.map((cam: ICamInfo) => {
      return (
        <Marker
          key={`marker-${cam.id}`}
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

interface RoadCamMapProps extends IMapViewProps {
  cameras?: ICamInfo[];
  loading?: boolean;
  error?: boolean;
}

export const RoadCamMap: React.VFC<RoadCamMapProps> = ({
  cameras = [],
  loading = false,
  error = false,
  ...props
}) => {
  return (
    <MapView
      {...props}
      style={{ zIndex: loading || error || cameras.length === 0 ? 0 : 0 }}
    >
      {loading ? (
        <FullscreenMessage>Fetching cameras...</FullscreenMessage>
      ) : error ? (
        <FullscreenMessage>
          Something went wrong. Refresh or contact site owner.
        </FullscreenMessage>
      ) : !loading && !error && cameras.length === 0 ? (
        <FullscreenMessage>No cameras available.</FullscreenMessage>
      ) : null}
      <Cameras cameras={cameras} />
    </MapView>
  );
};
