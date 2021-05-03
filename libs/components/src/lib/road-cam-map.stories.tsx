import React from 'react';
import { Story, Meta } from '@storybook/react';
import { RoadCamMap, IRoadCamMapProps } from './road-cam-map';

export default {
  title: 'RoadCamMap',
  component: RoadCamMap,
} as Meta;

const Template: Story<IRoadCamMapProps> = (args) => <RoadCamMap {...args} />;

export const Default = Template.bind({});
Default.args = {
  mapboxToken: process.env.NX_MAPBOX_TOKEN,
};
