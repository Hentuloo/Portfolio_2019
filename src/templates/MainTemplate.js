import React from 'react';
import AnimatedBoxs from 'components/atoms/AnimatedBoxs/AnimatedBoxs';
import Menu from 'components/molecules/Menu/Menu';
import PropTypes from 'prop-types';

const MainTemplate = ({ children }) => {
  return (
    <div>
      <Menu />
      <AnimatedBoxs />
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
