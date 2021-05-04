import { text } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react';
import React from 'react';
import { FullscreenMessage } from './fullscreen-message';

export default {
  component: FullscreenMessage,
  title: 'FullscreenMessage',
} as Meta;

export const primary = () => {
  return (
    <FullscreenMessage>{text('Message', 'Hello World!')}</FullscreenMessage>
  );
};
