import React from 'react';
import { Meta } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import { MapMarker, IMapMarkerProps } from './map-marker';

export default {
  title: 'MapMarker',
  component: MapMarker,
  parameters: {
    layout: 'centered',
  },
} as Meta;

export const Default = () => {
  return (
    <MapMarker
      label={text('Label', 'Marker Label')}
      iconSize={[40, 40]}
      iconAnchor={[20, 20]}
      popupAnchor={[0, -20]}
    />
  );
};
