import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AnimatedBoxs from 'components/atoms/AnimatedBoxs/AnimatedBoxs';
import BackgroundBlock from 'components/atoms/BackgroundBlock/BackgroundBlock';
import SwitchLanguage from 'components/atoms/SwitchLanguage/SwitchLanguage';
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

const MainTemplate = ({ children }) => {
  return (
    <>
      <AnimatedBoxs />
      <SwitchLanguage />
      <ContentMenuWrapper>
        <Menu />
        <Content>{children}</Content>
      </ContentMenuWrapper>
      <BackgroundBlock />
    </>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.objectOf(Object),
};
MainTemplate.defaultProps = {
  children: null,
};
export default MainTemplate;
