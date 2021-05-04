import React from 'react';
import { use100vh } from 'react-div-100vh';

export const FullscreenMessage = (
  props: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLDivElement> &
    React.HTMLAttributes<HTMLDivElement>
) => {
  const height = use100vh();
  return (
    <div
      className="not-selectable"
      {...props}
      style={{
        // position: 'fixed',
        top: 0,
        left: 0,
        height: 0,
        ...props.style,
      }}
    >
      <div
        style={{
          width: '100%',
          height: height,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'grid',
          placeItems: 'center',
          filter: 'drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.375))',
        }}
        className="text-light"
      >
        {props.children}
      </div>
    </div>
  );
};
