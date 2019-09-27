import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import withContext from 'hoc/withContext';
import Constants from 'config/Constants';

// animations for Box
import MobileRight from './MobileAnimations/MobileRight';
import MobileLeft from './MobileAnimations/MobileLeft';
import DesktopRight from './DesktopAniamtions/DesktopRight';
import DesktopLeft from './DesktopAniamtions/DesktopLeft';

const RightBox = styled.div`
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

const LeftBox = styled.div`
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

const AnimatedBoxs = ({ langContext, pageContext }) => {
  const { currentPage, previousPage } = pageContext;
  const pagesPaths = {
    portfolio: Constants[langContext].PATHS.portfolio,
    contact: Constants[langContext].PATHS.contact,
    projects: Constants[langContext].PATHS.projects,
  };

  return (
    // Random for reset animation
    <div key={Math.random()}>
      <LeftBox
        pagesPaths={pagesPaths}
        currentPage={currentPage}
        previousPage={previousPage}
      />
      <RightBox
        pagesPaths={pagesPaths}
        currentPage={currentPage}
        previousPage={previousPage}
      />
    </div>
  );
};
AnimatedBoxs.propTypes = {
  langContext: PropTypes.string.isRequired,
  pageContext: PropTypes.shape({
    previousPage: PropTypes.string.isRequired,
    currentPage: PropTypes.string.isRequired,
    onChangePage: PropTypes.oneOfType([PropTypes.func, () => null]),
  }).isRequired,
};

export default withContext(AnimatedBoxs);
