import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// animations for Box
import MobileLeft from './MobileAnimations/MobileLeft';
import DesktopLeft from './DesktopAniamtions/DesktopLeft';

const Box = styled.div`
  position: fixed;
  background-color: ${({ theme }) => theme.redSecondary};
  width: 27%;
  height: 70%;
  left: 0%;
  top: 0%;
  z-index: -2;
  will-change: transform;
  @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
    width: 15%;
    height: 70%;
    left: auto;
    right: 22%;
  }
  ${MobileLeft}
  ${DesktopLeft}
`;

const AnimatedBoxs = ({ currentPage, previousPage }) => (
  <Box currentPage={currentPage} previousPage={previousPage} />
);
AnimatedBoxs.propTypes = {
  currentPage: PropTypes.string,
  previousPage: PropTypes.string,
};
AnimatedBoxs.defaultProps = {
  currentPage: 'portfolio',
  previousPage: 'portfolio',
};
export default AnimatedBoxs;
