import React from 'react';
import { Story, Meta } from '@storybook/react';
import { MapView, IMapViewProps } from './map-view';

export default {
  title: 'Example/MapView',
  component: MapView,
} as Meta;

const Template: Story<IMapViewProps> = (args) => <MapView {...args} />;

export const Default = Template.bind({});
Default.args = {
  mapboxToken: process.env.MAPBOX_TOKEN,
};
