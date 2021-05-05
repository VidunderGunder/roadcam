import React from 'react';
import { Meta } from '@storybook/react';
import cameras from './road-cameras.json';
import { CamSearch } from './cam-search';
import { ICamInfo } from './cam-info';

export default {
  title: 'Camera Search',
  component: CamSearch,
  parameters: {
    layout: 'padded',
  },
} as Meta;

export const Example = () => {
  return (
    <div
      style={{
        width: '100%',
        height: 'calc(100vh - 5.75rem)',
      }}
    >
      <CamSearch
        position={[0, 0]}
        cameras={cameras.features as ICamInfo[]}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};
