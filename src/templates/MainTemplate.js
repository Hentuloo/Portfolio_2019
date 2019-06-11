import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AnimatedBoxs from 'components/atoms/AnimatedBoxs/AnimatedBoxs';
import BackgroundBlock from 'components/atoms/BackgroundBlock/BackgroundBlock';
import Menu from 'components/molecules/Menu/Menu';

const Content = styled.div`
  flex-grow: 1;
`;
const ContentMenuWrapper = styled.div`
  @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
    display: flex;
    padding-left: 150px;
  }
`;

const MainTemplate = ({
  children,
  onChangePage,
  previousPage,
  currentPage,
}) => {
  return (
    <div>
      <AnimatedBoxs previousPage={previousPage} currentPage={currentPage} />
      <ContentMenuWrapper>
        <Menu onChangePage={onChangePage} currentPage={currentPage} />
        <Content>{children}</Content>
      </ContentMenuWrapper>
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
