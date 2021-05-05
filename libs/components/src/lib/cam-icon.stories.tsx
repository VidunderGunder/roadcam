import React from 'react';
import { Meta } from '@storybook/react';

import CamIcon from './cam-icon';

export default {
  title: 'Camera Icon',
  component: CamIcon,
  parameters: {
    layout: 'centered',
  },
} as Meta;

export const Example = () => {
  return <CamIcon />;
};
