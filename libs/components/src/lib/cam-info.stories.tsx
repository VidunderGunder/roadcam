import React from 'react';
import { Meta } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import { CamInfo, camExample } from './cam-info';

export default {
  title: 'Camera Info Modal',
  component: CamInfo,
  parameters: {
    layout: 'centered',
  },
} as Meta;

export const Example = () => {
  return (
    <CamInfo
      cam={camExample}
      show
      onHide={() =>
        alert(
          "Modal should close now, but as this is just a demo where you can't get it back again, it doesn't really make sense to let you do so."
        )
      }
    />
  );
};
