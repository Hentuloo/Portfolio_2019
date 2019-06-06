import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AnimatedBoxs from 'components/atoms/AnimatedBoxs/AnimatedBoxs';
import Menu from 'components/molecules/Menu/Menu';

const Layout = styled.div``;
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

const MainTemplate = ({
  children,
  onChangePage,
  previousPage,
  currentPage,
}) => {
  return (
    <div>
      <Layout>
        <Menu onChangePage={onChangePage} currentPage={currentPage} />
        <AnimatedBoxs previousPage={previousPage} currentPage={currentPage} />
        <BackgroundBlock />
      </Layout>
      <div>{children}</div>
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
