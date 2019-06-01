import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import RightAnimatedBox from './RightAnimatedBox';

const label = 'type';
const options = {
  rectangle: 'rectangle',
  square: 'square',
  center: 'center',
};
const defaultValue = 'rectangle';
const groupId = 'GROUP-ID1';

storiesOf('RightAnimatedBox', module).add('basic', () => {
  const value = select(label, options, defaultValue, groupId);
  return <RightAnimatedBox type={value} />;
});
