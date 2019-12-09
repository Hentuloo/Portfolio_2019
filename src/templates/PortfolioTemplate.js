import React, { Component } from 'react';
import styled, { keyframes, css } from 'styled-components';
import PropTypes from 'prop-types';
import GraphImg from 'graphcms-image';
import HeaderName from 'components/atoms/HeaderName/HeaderName';
import Markdown from 'components/molecules/Markdown/Markdown';

import Constants from 'config/Constants';
import withContext from 'hoc/withContext';

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
        padding-right: 22%;
        padding-bottom: 0px;
        transform: translate(0%, 0%);

        div::before {
            content: '';
            position: absolute;
            top: 0%;
            right: 0%;
            width: 15.2vw;
            height: 80px;
            background-color: ${({ theme }) => theme.redFirst};
            z-index: -1;
        }
    }
    @media (min-width: ${({ theme }) => theme.breakPointLarge}) {
        padding-right: 22vw;
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

    span {
        display: none;
    }
    img {
        position: absolute;
        max-width: 100%;
        max-height: 80vh;
        transform: translateY(-110%);
        ${({ loadStatus }) =>
            loadStatus &&
            css`
                animation: ${imageAnimation} 0.5s 0.4s
                    ${({ theme }) => theme.blindsAnimation} forwards;
            `}
    }
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
        span {
            display: block;
            width: 100%;
            font-size: ${({ theme }) => theme.font.xxs};
            font-weight: ${({ theme }) => theme.font.light};
            letter-spacing: 0px;
            text-align: center;
            text-transform: uppercase;
            padding: 10px 0px;
            letter-spacing: -0.8px;
            display: block;
        }
    }
`;

const Wrapper = styled.section`
    display: flex;
`;
class Portfolio extends Component {
    state = { load: false };

    render() {
        const { content, photo, langContext } = this.props;
        const { load } = this.state;
        const { email, headLine } = Constants[langContext].CONTENT;
        return (
            <Wrapper>
                <HeaderName as="h1">
                    <span>{headLine[0]}</span>
                    <span>{headLine[1]}</span>
                </HeaderName>
                <ImageWrapper loadStatus={load}>
                    <GraphImg
                        image={photo}
                        maxWidth={600}
                        fadeIn={false}
                        blurryPlaceholder={false}
                        backgroundColor={false}
                        onLoad={() => this.setState({ load: true })}
                    />
                    <span>{email}</span>
                </ImageWrapper>
                <MarkdownWrapper>
                    <Markdown markdown={content} />
                </MarkdownWrapper>
            </Wrapper>
        );
    }
}

Portfolio.propTypes = {
    langContext: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    photo: PropTypes.shape({
        handle: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
    }).isRequired,
};
export default withContext(Portfolio);
