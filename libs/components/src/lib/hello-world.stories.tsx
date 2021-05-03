import React from 'react';
import { HelloWorld, HelloWorldProps } from './hello-world';

export default {
  component: HelloWorld,
  title: 'Components',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: HelloWorldProps = {};

  return <HelloWorld {...props} />;
};
