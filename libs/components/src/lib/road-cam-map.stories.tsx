import React from 'react';
import { Story, Meta } from '@storybook/react';
import { RoadCamMap } from './road-cam-map';
import { IMapViewProps } from './map-view';
import { ICamInfo } from './cam-info';
import useFetch from 'use-http';

export default {
  title: 'RoadCamMap',
  component: RoadCamMap,
} as Meta;

export const Default = () => {
  const uri = 'http://localhost:3333/roadcam.geojson';
  const { loading, error, data } = useFetch(uri, {}, []);
  return (
    <RoadCamMap
      mapboxToken={process.env.NX_MAPBOX_TOKEN}
      cameras={(data?.features ?? []) as ICamInfo[]}
      loading={loading}
      error={!!error}
    />
  );
};
