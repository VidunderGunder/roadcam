import { Meta } from '@storybook/react';
import React from 'react';
import { HelloWorld, HelloWorldProps } from './hello-world';

export default {
  component: HelloWorld,
  title: 'HelloWorld',
  parameters: {
    layout: 'centered',
  },
} as Meta;

export const primary = () => {
  const props: HelloWorldProps = {};
  return <HelloWorld {...props} />;
};
