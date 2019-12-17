import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import { useSelector } from 'react-redux';

import {
    AnimatedBoxs,
    LanguageButtons,
    PhraseBlindsEffect,
    BackgroundPhrase,
    GridBlocksAnimation,
} from 'components/atoms';

import { Menu } from 'components/molecules';

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
const ContentWrapper = styled.div`
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        display: flex;
        padding-left: 150px;
    }
`;

const MainTemplate = ({ children }) => {
    const { current } = useSelector(state => state.ActivePage);

    const phrase = current === 'portfolio' ? 'Hello' : '<.../>';

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
            <BackgroundPhrase phrase={phrase} />
            <GridBlocksAnimation />
        </>
    );
};

MainTemplate.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MainTemplate;
