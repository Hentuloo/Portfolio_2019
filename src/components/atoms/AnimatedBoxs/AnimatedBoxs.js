import React from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';

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

const AnimatedBoxs = () => {
    const { current, previous } = useSelector(state => state.ActivePage);
    return (
        <div>
            <LeftBox className={`curr-${current} prev-${previous} `} />
            <RightBox className={`curr-${current} prev-${previous} `} />
        </div>
    );
};

export default AnimatedBoxs;
