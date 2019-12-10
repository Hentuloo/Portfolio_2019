import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import withContext from 'hoc/withContext';

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
    right: 21.999%;
    ${DesktopLeft}
  }
`;

const AnimatedBoxs = ({ pageContext: { currentPage, previousPage } }) => {
    return (
        <div>
            <LeftBox className={`curr-${currentPage} prev-${previousPage} `} />
            <RightBox className={`curr-${currentPage} prev-${previousPage} `} />
        </div>
    );
};
AnimatedBoxs.propTypes = {
    pageContext: PropTypes.shape({
        previousPage: PropTypes.string.isRequired,
        currentPage: PropTypes.string.isRequired,
        onChangePage: PropTypes.oneOfType([PropTypes.func, () => null]),
    }).isRequired,
};

export default withContext(AnimatedBoxs);
