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
  background-color: ${({ theme }) => theme.color.brand[0]};
  width: 120px;
  height: 160px;
  right: 0%;
  top: 0%;
  z-index: -2;
  will-change: transform;
   /* ${MobileRight} */
  @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
    width: 160px;
    height: 210px;
    ${DesktopRight}
  }
 

`;

const LeftBox = styled.div`
  position: fixed;
  background-color: ${({ theme }) => theme.color.brand[1]};
  width: 80px;
  height: 180px;
  left: 0%;
  top: -90px;
  z-index: -2;
  will-change: transform;
  transform: rotate(-17deg);
   /* ${MobileLeft} */
  @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
   width: 150px;
  height: 190px;
  left: 240px;
  top: -75px;
    transform: rotate(-25deg);
    /* ${DesktopLeft} */
  }
`;
const StaticGrayBlock = styled.div`
    display: none;
    position: fixed;
    width: 500px;
    height: 1000px;
    top: -74px;
    right: 88px;
    background-color: ${({ theme }) => theme.color.gray[3]};
    transform-origin: left bottom;
    transform: rotate(35deg) translate(29%, 13%);
    z-index: -2;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        display: block;
    }
`;

const AnimatedBoxs = () => {
    const { current, previous } = useSelector(state => state.ActivePage);
    return (
        <div>
            <LeftBox className={`curr-${current} prev-${previous} `} />
            <RightBox className={`curr-${current} prev-${previous} `} />
            <StaticGrayBlock />
        </div>
    );
};

export default AnimatedBoxs;
