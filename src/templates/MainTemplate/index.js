import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import { PhraseBlindsEffect } from 'components/atoms';
import {
    AnimatedBoxs,
    LanguageButtons,
    GridBlocksAnimation,
} from 'components/molecules';

import { Menu } from 'components/organisms';
import CustomBackgrounView from './CustomBackgrounView';

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
    animation: ${hide} 0s 3s linear forwards;
`;

const BlockWithDelayOpacity = styled.div`
    opacity: 0;
    animation: ${show} 0.1s 3.1s linear forwards;
`;

const Content = styled.div`
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        flex-grow: 1;
    }
`;
const ContentWrapper = styled.div`
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        display: flex;
        padding-left: 150px;
    }
`;

const MainTemplate = ({ children }) => {
    return (
        <>
            <BeforeGridBlocks>
                <PhraseBlindsEffect as="h1">
                    <span>Kamil</span>
                    <span>Chędkowski</span>
                </PhraseBlindsEffect>
            </BeforeGridBlocks>
            <BlockWithDelayOpacity>
                <AnimatedBoxs />
                <LanguageButtons />
                <ContentWrapper>
                    <Menu />
                    <Content>{children}</Content>
                </ContentWrapper>
            </BlockWithDelayOpacity>
            <CustomBackgrounView />
            <GridBlocksAnimation />
        </>
    );
};

MainTemplate.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MainTemplate;
