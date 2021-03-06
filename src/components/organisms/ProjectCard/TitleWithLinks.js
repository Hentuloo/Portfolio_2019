import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TittleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0px 15px 0px 20px;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        padding: 0px 5px 0px 10px;
    }
`;

const Title = styled.h2`
    margin: 0px;
    font-family: ${({ theme }) => theme.font.first};
    line-height: ${({ theme }) => theme.font.s};
    font-size: ${({ theme }) => theme.font.medium};
    text-transform: uppercase;
    font-weight: 300;
    color: ${({ theme }) => theme.color.brand[0]};

    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        margin-top: 8px;
        font-size: ${({ theme }) => theme.font.xs};
        line-height: ${({ theme }) => theme.font.xs};
    }
    @media (min-width: ${({ theme }) => theme.breakPointMiddle}) {
        margin: 15px 10px 0px 25px;
    }
    @media (min-width: ${({ theme }) => theme.breakPointLarge}) {
        font-size: ${({ theme }) => theme.font.s};
    }
`;

const LinksWrapper = styled.div`
    display: flex;
    height: 40px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.font.xxs};
    transform: translateY(-20px);
    @media (min-width: ${({ theme }) => theme.breakPointMiddle}) {
        height: 60px;
    }
    @media (min-width: ${({ theme }) => theme.breakPointLarge}) {
        transform: translateY(-10px);
    }
`;

const LinkButton = styled.a`
    position: relative;
    height: 30px;
    padding: 2px 7px 0px;
    margin: 2px 4px;
    border-radius: 10px;
    line-height: ${({ theme }) => theme.font.l};
    text-decoration: none;
    letter-spacing: 0.04em;
    color: black;
    cursor: none;

    &::before {
        position: absolute;
        content: '';
        width: 40%;
        height: 2px;
        bottom: 0%;
        left: 50%;
        transform: translate(-50%, 0%);
        background-color: ${({ theme }) => theme.color.brand[1]};
    }
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        height: 34px;
    }
`;

const TitleWithLinks = ({ title, gitLink, liveLink }) => {
    return (
        <TittleWrapper>
            <Title>{title}</Title>
            <LinksWrapper>
                {gitLink && (
                    <LinkButton
                        target="_blank"
                        rel="noopener noreferrer"
                        href={gitLink}
                    >
                        Github
                    </LinkButton>
                )}
                {liveLink && (
                    <LinkButton
                        target="_blank"
                        rel="noopener noreferrer"
                        href={liveLink}
                    >
                        LIVE
                    </LinkButton>
                )}
            </LinksWrapper>
        </TittleWrapper>
    );
};

TitleWithLinks.propTypes = {
    title: PropTypes.string.isRequired,
    gitLink: PropTypes.string,
    liveLink: PropTypes.string,
};

TitleWithLinks.defaultProps = {
    gitLink: null,
    liveLink: null,
};

export default TitleWithLinks;
