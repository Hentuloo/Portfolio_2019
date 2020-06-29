import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { useDispatch } from 'react-redux';

import { changeLanguage } from 'state/actions/langActions';

const Button = styled.button`
    position: relative;
    width: 40px;
    height: 40px;
    padding: 4px 0px 6px 0px;

    border: none;
    border-radius: 50%;
    letter-spacing: 1px;
    font-family: ${({ theme }) => theme.font.second};
    font-size: ${({ theme }) => theme.font.xs};
    font-weight: ${({ theme }) => theme.font.bold};
    background-color: ${({ theme }) => theme.color.gray[1]};
    cursor: none;

    &:hover {
        background-color: ${({ theme }) => theme.color.gray[2]};
    }

    &::before {
        content: '';
        position: absolute;
        width: 150%;
        height: 100%;
        left: 0%;
        top: 0%;
        padding: 20px;
        opacity: 0.4;
    }
    &:nth-of-type(1) {
        &::before {
            transform: translateX(-25%);
        }
    }

    ${({ active, theme }) =>
        active &&
        css`
            background-color: ${theme.color.brand[1]};
            &:hover {
                background-color: ${theme.color.brand[1]};
            }
        `};

    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        letter-spacing: 1px;
        margin-right: 13px;
        font-size: ${({ theme }) => theme.font.xxs};
        &::before {
            display: none;
        }
    }
`;
const Wrapper = styled.div`
    position: fixed;
    display: flex;
    max-width: 27%;
    right: 8px;
    top: 2px;
    z-index: 10;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        max-width: auto;
        left: 12px;
        top: 1vh;
    }
`;
const LanguageButtons = ({ currentLang }) => {
    const dispatch = useDispatch();

    const handleChangeLanguage = lang => {
        if (lang !== currentLang) {
            dispatch(changeLanguage(lang));
        }
    };

    return (
        <Wrapper>
            <Button
                type="button"
                active={currentLang === 'pl'}
                onClick={() => handleChangeLanguage('pl')}
            >
                PL
            </Button>
            <Button
                type="button"
                active={currentLang === 'en'}
                onClick={() => handleChangeLanguage('en')}
            >
                ENG
            </Button>
        </Wrapper>
    );
};

export default memo(LanguageButtons);

LanguageButtons.propTypes = {
    currentLang: PropTypes.string.isRequired,
};
