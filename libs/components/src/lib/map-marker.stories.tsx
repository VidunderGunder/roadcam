import React from 'react';
import { Story, Meta } from '@storybook/react';

import { MapMarker, IMapMarkerProps } from './map-marker';

export default {
  title: 'Example/MapMarker',
  component: MapMarker,
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template: Story<IMapMarkerProps> = (args) => <MapMarker {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: '123456',
  coordinates: [0, 0],
  type: 'Point',
  label: 'Label',
  iconSize: [40, 40],
  iconAncor: [20, 20],
  popupAnchor: [0, -20],
} as IMapMarkerProps;
