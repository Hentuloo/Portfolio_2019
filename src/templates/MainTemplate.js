import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import AnimatedBoxs from 'components/atoms/AnimatedBoxs/AnimatedBoxs';
import BackgroundBlock from 'components/atoms/BackgroundBlock/BackgroundBlock';
import SwitchLanguage from 'components/atoms/SwitchLanguage/SwitchLanguage';
import HeaderName from 'components/atoms/HeaderName/HeaderName';

import Menu from 'components/molecules/Menu/Menu';

import ShadowPharse from 'components/atoms/ShadowPharse/ShadowPharse';
import GridBlocksAnimation from 'components/atoms/GridBlocksAnimation/GridBlocksAnimation';

const show = keyframes`
100%{
  opacity:1;
}
`;
const hide = keyframes`
99.9%{
  opacity:0;
}
100%{
  opacity:0;
  display:none;
}
`;

const BeforeGridBlocks = styled.div`
    opacity: 1;
    animation: ${hide} 0s 2.5s linear forwards;
`;

const BlockWithDelayOpacity = styled.div`
    opacity: 0;
    animation: ${show} 0.1s 2.6s linear forwards;
`;

const Content = styled.div`
    flex-grow: 1;
`;
const ContentMenuWrapper = styled.div`
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        display: flex;
        padding-left: 150px;
    }
`;
const StyledShadowPharse = styled.div`
        &::after{
            ${ShadowPharse}
            content: ${({ pharse }) => (pharse ? `'${pharse}'` : 'Hello')};
            color: rgb(225, 224, 224);
            z-index: -10;
        }           
`;

const MainTemplate = ({ children, isPortfolio }) => {
    const pharse = isPortfolio ? 'Hello' : '<.../>';
    return (
        <>
            <BeforeGridBlocks>
                <HeaderName as="h1">
                    <span>Kamil</span>
                    <span>Chędkowski</span>
                </HeaderName>
            </BeforeGridBlocks>
            <BlockWithDelayOpacity>
                <AnimatedBoxs />
                <SwitchLanguage />
                <ContentMenuWrapper>
                    <Menu />
                    <Content>{children}</Content>
                </ContentMenuWrapper>
            </BlockWithDelayOpacity>
            <StyledShadowPharse pharse={pharse} />
            <BackgroundBlock pharse={pharse} />
            <GridBlocksAnimation />
        </>
    );
};

MainTemplate.propTypes = {
    children: PropTypes.objectOf(Object),
    isPortfolio: PropTypes.bool.isRequired,
};
MainTemplate.defaultProps = {
    children: null,
};
export default MainTemplate;
