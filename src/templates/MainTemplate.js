import React from 'react';
import styled from 'styled-components';
import AnimatedBoxs from 'components/atoms/AnimatedBoxs/AnimatedBoxs';
import Menu from 'components/molecules/Menu/Menu';
import PropTypes from 'prop-types';

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

const MainTemplate = ({ children }) => {
  return (
    <div>
      <Menu />
      <AnimatedBoxs />
      <BackgroundBlock />
      <>{children}</>
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
