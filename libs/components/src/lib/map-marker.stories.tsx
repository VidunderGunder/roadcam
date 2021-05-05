import React from 'react';
import { Meta } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { MapMarker } from './map-marker';
import { camExample } from './cam-info';
import { use100vh } from 'react-div-100vh';

export default {
  title: 'Camera Map Marker',
  component: MapMarker,
  parameters: {
    layout: 'centered',
  },
} as Meta;

export const WithCameraInfo = () => {
  return <MapMarker label={text('Label', 'Marker Label')} cam={camExample} />;
};

export const WithoutCameraInfo = () => {
  return <MapMarker label={text('Label', 'Marker Label')} />;
};
