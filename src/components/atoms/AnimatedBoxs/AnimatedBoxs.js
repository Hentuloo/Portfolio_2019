import React from 'react';
import PropTypes from 'prop-types';
import LeftBox from './LeftBox';
import RightBox from './RightBox';

const AnimatedBoxs = ({ currentPage, previousPage }) => {
  // console.log(currentPage);
  // console.log(previousPage);
  return (
    // Random for reset animation
    <div key={Math.random()}>
      <LeftBox currentPage={currentPage} previousPage={previousPage} />
      <RightBox currentPage={currentPage} previousPage={previousPage} />
    </div>
  );
};
AnimatedBoxs.propTypes = {
  previousPage: PropTypes.string,
  currentPage: PropTypes.string,
};
AnimatedBoxs.defaultProps = {
  previousPage: 'portfolio',
  currentPage: 'portfolio',
};
export default AnimatedBoxs;
