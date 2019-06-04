import React from 'react';
import styled, { keyframes } from 'styled-components';
import AnimatedBoxs from 'components/atoms/AnimatedBoxs/AnimatedBoxs';
import Menu from 'components/molecules/Menu/Menu';
import PropTypes from 'prop-types';

const opacity = keyframes`
from{
opacity:0;
}
to{
opacity:1
}
`;

const BackgroundBlock = styled.div`
  width: 120vw;
  height: 250vw;
  position: fixed;
  top: 100%;
  left: 100%;
  transform-origin: 50% center;
  transform: translate(-47%, -84%) rotate(26deg);
  background-color: ${({ theme }) => theme.grayFirst};
  z-index: -3;
`;
const ContentWrapper = styled.div`
  opacity: 0;
  animation: ${opacity} 0.2s 0.7s linear forwards;
`;
const MainTemplate = ({ children }) => {
  return (
    <div>
      <Menu />
      <AnimatedBoxs />
      <BackgroundBlock />
      <ContentWrapper>{children}</ContentWrapper>
    </div>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.arrayOf(Object),
};
MainTemplate.defaultProps = {
  children: null,
};
export default MainTemplate;
