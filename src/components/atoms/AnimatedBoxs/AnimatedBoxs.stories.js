import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import LeftBox from './LeftBox';
import RightBox from './RightBox';

const label = 'type';
const options = {
  portfolio: 'portfolio',
  projekty: 'projekty',
  kontakty: 'kontakty',
};
const defaultValue = 'first';
const groupId = 'GROUP-ID1';

storiesOf('AnimatedBoxs', module).add('basic', () => {
  const value = select(label, options, defaultValue, groupId);
  return (
    <>
      <LeftBox currentPath={value} previousPath={value} />
      <RightBox currentPath={value} previousPath={value} />
    </>
  );
});
