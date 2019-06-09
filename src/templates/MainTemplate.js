import React from 'react';
import PropTypes from 'prop-types';
import AnimatedBoxs from 'components/atoms/AnimatedBoxs/AnimatedBoxs';
import BackgroundBlock from 'components/atoms/BackgroundBlock/BackgroundBlock';
import Menu from 'components/molecules/Menu/Menu';

const MainTemplate = ({
  children,
  onChangePage,
  previousPage,
  currentPage,
}) => {
  return (
    <div>
      <Menu onChangePage={onChangePage} currentPage={currentPage} />
      <AnimatedBoxs previousPage={previousPage} currentPage={currentPage} />
      <div>{children}</div>
      <BackgroundBlock />
    </div>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.objectOf(Object),
  onChangePage: PropTypes.func.isRequired,
  previousPage: PropTypes.string,
  currentPage: PropTypes.string,
};
MainTemplate.defaultProps = {
  children: null,
  previousPage: 'portfolio',
  currentPage: 'portfolio',
};
export default MainTemplate;
