import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import LeftAnimatedBox from './LeftAnimatedBox';

const label = 'type';
const options = {
  first: 'first',
  second: 'second',
  third: 'third',
};
const defaultValue = 'first';
const groupId = 'GROUP-ID1';

storiesOf('LeftAnimatedBox', module).add('basic', () => {
  const value = select(label, options, defaultValue, groupId);
  return <LeftAnimatedBox type={value} />;
});
