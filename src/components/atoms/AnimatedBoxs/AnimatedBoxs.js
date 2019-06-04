import React from 'react';
import LeftBox from './LeftBox';
import RightBox from './RightBox';

const AnimatedBoxs = () => {
  let { previousPath } = window;
  let currentPath = window.location.pathname;
  if (
    previousPath === undefined ||
    previousPath === '' ||
    previousPath === '/'
  ) {
    previousPath = 'portfolio';
  } else {
    previousPath = previousPath.substring(1);
  }
  if (currentPath === undefined || currentPath === '' || currentPath === '/') {
    currentPath = 'portfolio';
  } else {
    currentPath = window.location.pathname.substring(1);
  }
  // console.log(previousPath);
  // console.log(currentPath);
  return (
    <>
      <LeftBox currentPath={currentPath} previousPath={previousPath} />
      <RightBox currentPath={currentPath} previousPath={previousPath} />
    </>
  );
};

export default AnimatedBoxs;
