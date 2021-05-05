import React from 'react';
import { Meta } from '@storybook/react';

import { SearchBar } from './search-bar';

export default {
  title: 'Search Bar',
  component: SearchBar,
  parameters: {
    layout: 'centered',
  },
} as Meta;

export const Example = () => {
  return <SearchBar />;
};
