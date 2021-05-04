import React from 'react';

/* eslint-disable-next-line */
export interface HelloWorldProps {}

export const HelloWorld: React.VFC<HelloWorldProps> = (props) => {
  return (
    <div {...props}>
      <h3>Hello World!</h3>
    </div>
  );
};
