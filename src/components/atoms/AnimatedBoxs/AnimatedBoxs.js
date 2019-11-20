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
   ${MobileRight}
  @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
    width: 22%;
    height: 40%;
    ${DesktopRight}
  }
 

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
   ${MobileLeft}
  @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
    width: 15%;
    height: 70%;
    left: auto;
    right: 22%;
    ${DesktopLeft}
  }
`;

const AnimatedBoxs = ({ langContext, pageContext }) => {
    const { currentPage, previousPage } = pageContext;
    let curentPageType;
    let previousPageType;

    if (currentPage === Constants[langContext].PATHS.portfolio) {
        curentPageType = 'portfolio';
    } else if (currentPage === Constants[langContext].PATHS.contact) {
        curentPageType = 'contact';
    } else if (currentPage === Constants[langContext].PATHS.projects) {
        curentPageType = 'projects';
    }
    if (previousPage === Constants[langContext].PATHS.portfolio) {
        previousPageType = 'portfolio';
    } else if (previousPage === Constants[langContext].PATHS.contact) {
        previousPageType = 'contact';
    } else if (previousPage === Constants[langContext].PATHS.projects) {
        previousPageType = 'projects';
    }
    // console.log({ curentPageType, previousPageType });
    // console.log(`curr-${curentPageType} prev-${previousPageType}`);
    return (
        <div>
            <LeftBox
                className={`curr-${curentPageType} prev-${previousPageType} `}
            />
            <RightBox
                className={`curr-${curentPageType} prev-${previousPageType} `}
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
