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
    display: grid;
    grid-template-columns: 55% 35% 10%;
    grid-template-rows: 45px 160px 70px auto;
    margin-top: 16px;
    @media (min-width: 550px) {
        grid-template-columns: 50% 30% 20%;
        grid-template-rows: 45px 210px 70px auto;
    }
    ${({ theme }) => theme.breakPointMobileLandscape} {
        top: 27%;
        grid-template-rows: 95px 1fr;
    }
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        grid-template-columns: auto 3% 200px 8%;
        grid-template-rows: 30px 280px 70px auto;
    }
`;

const MarkdownWrapper = styled.div`
    grid-column: 1/-1;
    grid-row: -2/-1;
    margin: 0px 15px;
    padding-bottom: 100vh;
    opacity: 0;
    animation: ${opacity} 0.6s 0.3s linear forwards;
    ${({ theme }) => theme.breakPointMobileLandscape} {
        grid-row: 2/3;
    }
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        grid-column: 1/2;
        grid-row: -3/-1;
        padding-bottom: 0px;
    }
`;
const ImageWrapper = styled.div`
    grid-column: 2/3;
    grid-row: 2/3;
    @media (min-width: 550px) {
        width: 30%;
    }
    ${({ theme }) => theme.breakPointMobileLandscape} {
        display: none;
    }
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        grid-column: 3/4;
        position: relative;
        width: 100%;
        height: auto;
        top: auto;
        right: auto;
    }

    /* Graph cms-image */
    img {
        position: relative;
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
        grid-column: 2/4;
        grid-row: 3/4;
        font-family: ${({ theme }) => theme.font.second};
        font-size: ${({ theme }) => theme.font.xxs};
        line-height: 70px;
        font-weight: 700;
        letter-spacing: 0px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
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
            <div></div>
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
                    alt="Kamil Chędkowski - zdjęcie"
                />
            </ImageWrapper>
            <EmailField>{email}</EmailField>
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
