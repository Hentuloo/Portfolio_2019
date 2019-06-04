import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import AnimatedBoxs from './AnimatedBoxs';

const label = 'type';
const options = {
  first: 'first',
  second: 'second',
  third: 'third',
};
const defaultValue = 'first';
const groupId = 'GROUP-ID1';

storiesOf('AnimatedBoxs', module).add('basic', () => {
  const value = select(label, options, defaultValue, groupId);
  return <AnimatedBoxs type={value} />;
});
