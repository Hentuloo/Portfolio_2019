import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// animations for Box
import MobileRight from './MobileAnimations/MobileRight';
import DesktopRight from './DesktopAniamtions/DesktopRight';

const Box = styled.div`
  position: fixed;
  background-color: ${({ theme }) => theme.redFirst};
  width: 30%;
  height: 33%;
  right: 0%;
  top: 0%;
  z-index: -2;
  will-change: transform;
  @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
    width: 22%;
    height: 40%;
  }
  ${MobileRight}
  ${DesktopRight}
`;
const RightBox = ({ currentPage, previousPage }) => (
  <Box currentPage={currentPage} previousPage={previousPage} />
);

RightBox.propTypes = {
  currentPage: PropTypes.string,
  previousPage: PropTypes.string,
};
RightBox.defaultProps = {
  currentPage: 'portfolio',
  previousPage: 'portfolio',
};

export default RightBox;
