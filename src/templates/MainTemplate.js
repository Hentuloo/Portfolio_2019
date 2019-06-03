import React from 'react';
import LeftAnimatedBox from 'components/atoms/LeftAnimatedBox/LeftAnimatedBox';
import Menu from 'components/molecules/Menu/Menu';
import PropTypes from 'prop-types';

const MainTemplate = ({ children }) => {
  return (
    <div>
      <Menu />
      <LeftAnimatedBox />
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
