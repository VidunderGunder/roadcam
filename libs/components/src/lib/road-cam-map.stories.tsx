import React from 'react';
import { Meta } from '@storybook/react';
import { RoadCamMap } from './road-cam-map';
import { ICamInfo } from './cam-info';
import useFetch from 'use-http';
import roadCameras from './road-cameras.json';

export default {
  title: 'Camera Map',
  component: RoadCamMap,
} as Meta;

const token = process.env.NX_MAPBOX_TOKEN;

export const LocalJSON = () => {
  return (
    <RoadCamMap
      mapboxToken={token}
      cameras={roadCameras.features as ICamInfo[]}
    />
  );
};

export const NodeExpressLocal = () => {
  const uri = 'http://localhost:3333/api/cameras';
  const { loading, error, data } = useFetch(uri, {}, []);
  return (
    <RoadCamMap
      mapboxToken={token}
      cameras={(data?.features ?? []) as ICamInfo[]}
      loading={loading}
      error={!!error}
    />
  );
};

export const NodeExpressMongoDB = () => {
  const uri = 'http://localhost:3333/api/cameras-mongodb';
  const { loading, error, data } = useFetch(uri, {}, []);
  return (
    <RoadCamMap
      mapboxToken={token}
      cameras={(data?.features ?? []) as ICamInfo[]}
      loading={loading}
      error={!!error}
    />
  );
};
