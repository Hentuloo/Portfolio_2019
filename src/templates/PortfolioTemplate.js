import React, { useState, memo } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import GraphImg from 'graphcms-image';

import { PhraseBlindsEffect } from 'components/atoms';
import { Markdown } from 'components/organisms';
import Constants from 'config/Constants';

const imageAnimation = keyframes`
form{
  transform:translateY(-110%);
}
to{
  transform:translateY(0%);
}
`;
const opacity = keyframes`
100%{
opacity:1;
}
`;

const Wrapper = styled.section`
    display: flex;
`;

const MarkdownWrapper = styled.div`
    position: absolute;
    width: 90%;
    top: 47%;
    left: 50%;
    padding-bottom: 100px;
    transform: translate(-50%, 0%);
    opacity: 0;
    animation: ${opacity} 0.6s 0.3s linear forwards;
    @media (max-width: ${({ theme }) =>
            theme.breakPointMobile}) and (orientation: landscape) {
        top: 27%;
    }

    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        left: auto;
        right: -0.2%;
        top: auto;
        bottom: 10%;
        width: calc(100% - 180px);
        max-width: calc(800px + 22%);
        padding-right: 22.22%;
        padding-bottom: 0px;
        transform: translate(0%, 0%);
    }
    @media (min-width: ${({ theme }) => theme.breakPointLarge}) {
        max-width: calc(1100px + 22%);
        div {
            padding-right: 200px;
        }
    }
`;
const ImageWrapper = styled.div`
    position: fixed;
    top: 6%;
    right: 6%;
    width: 42%;
    height: 45%;
    overflow: hidden;
    @media (max-width: ${({ theme }) =>
            theme.breakPointMobile}) and (orientation: landscape) {
        background-color: red;
        display: none;
    }
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        top: 10%;
        right: auto;
        right: 0%;
        width: 22%;
        height: 90%;
        max-width: 420px;
        &::after {
            display: block;
            content: '';
            width: 100%;
            height: 100%;
            background-color: ${({ theme }) => theme.grayDark};
        }
    }
    /* Graph cms-image */
    img {
        position: absolute;
        max-width: 100%;
        max-height: 80vh;
        transform: translateY(-110%);
    }
    /* Reset animation on change page */
    &.reset {
        img {
            animation: ${imageAnimation} 0.5s
                ${`${Constants.GENERAL.changePageDelay + 0.1}s`}
                ${({ theme }) => theme.blindsAnimation} forwards;
        }
    }
    /* On first visit on page */
    &.firstLoad {
        img {
            animation: ${imageAnimation} 0.5s 3.5s
                ${({ theme }) => theme.blindsAnimation} forwards;
        }
    }
`;
const EmailField = styled.span`
    display: none;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        display: block;
        width: 100%;
        font-size: ${({ theme }) => theme.font.xxs};
        font-weight: ${({ theme }) => theme.font.light};
        letter-spacing: 0px;
        text-align: center;
        text-transform: uppercase;
        padding: 10px 0px;
        letter-spacing: -0.8px;
    }
`;

const Portfolio = ({ content, photo, className }) => {
    const [imageIsLoaded, setImageLoaded] = useState(false);

    const {
        ActivePage: { current, previous },
        lang,
    } = useSelector(({ ActivePage, language }) => ({
        ActivePage,
        lang: language,
    }));

    const { email, headLine } = Constants[lang].CONTENT;
    const firstLoad = current === previous && current === 'portfolio';
    return (
        <Wrapper className={className}>
            <PhraseBlindsEffect as="h1">
                <span>{headLine[0]}</span>
                <span>{headLine[1]}</span>
            </PhraseBlindsEffect>
            <ImageWrapper
                className={`${current === 'portfolio' ? 'reset ' : ''}${
                    firstLoad ? 'firstLoad ' : ''
                }`}
                loadStatus={imageIsLoaded}
            >
                <GraphImg
                    image={photo}
                    maxWidth={600}
                    fadeIn={false}
                    blurryPlaceholder={false}
                    backgroundColor={false}
                    onLoad={() => setImageLoaded(true)}
                />
                <EmailField>{email}</EmailField>
            </ImageWrapper>
            <MarkdownWrapper>
                <Markdown markdown={content} type="portfolio" />
            </MarkdownWrapper>
        </Wrapper>
    );
};

Portfolio.propTypes = {
    className: PropTypes.string,
    content: PropTypes.string.isRequired,
    photo: PropTypes.shape({
        handle: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
    }).isRequired,
};

Portfolio.defaultProps = {
    className: '',
};

export default memo(Portfolio, (prev, next) => prev.content === next.content);
