import React from 'react';
import styled, { css } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { changeLanguage } from 'state/actions/langActions';
import Constants from 'config/Constants';

const Button = styled.button`
    position: relative;
    width: 45px;
    padding: 4px 0px 6px 0px;
    border: none;
    border-radius: 5px;
    letter-spacing: 1px;
    font-family: ${({ theme }) => theme.font.second};
    font-size: ${({ theme }) => theme.font.xs};
    font-weight: ${({ theme }) => theme.font.bold};
    background-color: ${({ theme }) => theme.graySecond};
    cursor: none;
    &:hover {
        background-color: ${({ theme }) => theme.grayThird};
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
            background-color: ${theme.redSecondary};
            &:hover {
                background-color: ${theme.redSecondary};
            }
        `};

    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        letter-spacing: 1px;
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
    z-index: 20;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        max-width: auto;
        left: 12px;
        top: 4px;
    }
`;
const LanguageButtons = () => {
    const dispatch = useDispatch();
    const {
        lang: currentLang,
        ActivePage: { current },
    } = useSelector(({ ActivePage, language }) => ({
        lang: language,
        ActivePage,
    }));

    const handleChangeLanguage = lang => {
        if (lang !== currentLang) {
            // const { origin } = window.location;
            // window.location.href = `${origin}/${lang}/#${Constants[lang].PATHS[current]}`;
            window.history.pushState(
                null,
                null,
                `/${lang}/${Constants[lang].PATHS[current]}`,
            );

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

export default LanguageButtons;
