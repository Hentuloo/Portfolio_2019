import React, { memo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Constants from 'config/Constants';

import BrandImage from './BrandImage';
import BrandName from './BrandName';
import AboutSection from './AboutSection';

const Wrapper = styled.section`
    display: grid;
    grid-template-columns: 1fr 110px 12%;
    grid-template-rows: 65px 160px 40px auto;
    margin-top: 0px;
    padding-bottom: 200px;
    @media (min-width: 550px) {
        grid-template-columns: 1fr 140px 8%;
        grid-template-rows: 45px 200px 90px auto;
    }
    ${({ theme }) => theme.breakPointMobileLandscape} {
        top: 27%;
        grid-template-rows: 95px 1fr;
    }
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        padding-bottom: 0px;
        grid-template-columns: 1fr 3% 160px 5%;
        grid-template-rows: 30px 230px 70px auto;
    }
`;
const StyledBrandImage = styled(BrandImage)`
    grid-column: 2/3;
    grid-row: 2/3;
    ${({ theme }) => theme.breakPointMobileLandscape} {
        display: none;
    }
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        grid-column: 3/4;
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
const StyledAboutSection = styled(AboutSection)`
    grid-column: 1/-1;
    grid-row: 4/-1;
    width: 85%;
    margin: 0px auto;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        grid-column: 1/2;
        grid-row: 3/-1;
        width: 75%;
        margin: 0px auto 0px 40px;
    }
    @media (min-width: ${({ theme }) => theme.breakPointLarge}) {
        width: 60%;
        margin: 0px auto 0px 60px;
    }
`;
const Portfolio = ({ content, photo, className }) => {
    const lang = useSelector(({ language }) => language);
    const { email } = Constants[lang].CONTENT;

    return (
        <Wrapper className={className}>
            <BrandName />
            <div></div>
            <StyledBrandImage photo={photo} />
            <EmailField>{email}</EmailField>
            <StyledAboutSection content={content} />
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
