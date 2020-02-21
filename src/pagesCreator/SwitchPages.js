import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

import Constants from 'config/Constants';

import { useSelector } from 'react-redux';

import { useDataApi } from 'api/data';

import PortfolioPage from './Portfolio/PortfolioPage';
import ContactPage from './Contact/ContactPage';
import ProjectsPage from './Projects/ProjectsPage';

const opacity = keyframes`
0%{
    opacity:0;
}
100%{
    opacity:1;
}
`;

const Wrapper = styled.div`
    position: relative;
`;

const PageWrapper = styled.div`
    opacity: 0;
    position: absolute;
    top: 0%;
    width: 100%;
    transform-origin: top;
    overflow: hidden;
    ${({ active }) =>
        !active &&
        css`
            z-index: -5;
            transform: scaleY(0.01);
        `}
    ${({ active, firstOpen }) => {
        if (firstOpen && firstOpen) {
            return css`
                opacity: 1;
                transform: scaleY(1);
            `;
        }
        if (active) {
            return css`
                animation: ${opacity} 0.1s
                    ${`${Constants.GENERAL.changePageDelay}s`} linear backwards;
                opacity: 1;
                transform: scaleY(1);
            `;
        }
        return css``;
    }}
`;

const SwitchPages = () => {
    const [{ photo, pl, en }, setData] = useState({
        photo: null,
        pl: {
            mainPageContent: null,
            projectPage: null,
            projects: null,
        },
        en: {
            mainPageContent: null,
            projectPage: null,
            projects: null,
        },
    });

    const {
        ActivePage: { current, previous },
        lang: currentLang,
    } = useSelector(({ ActivePage, language }) => ({
        ActivePage,
        lang: language,
    }));

    if (!photo) setData(useDataApi());

    const { mainPageContent, projectPage, projects } =
        currentLang === 'en' ? en : pl;
    return (
        <Wrapper>
            <PageWrapper
                firstOpen={current === previous}
                active={current === 'portfolio'}
            >
                <PortfolioPage
                    photo={photo}
                    content={mainPageContent}
                    email="chentulooo@gmail.com"
                    headLine="Kamil Chędkowski"
                />
            </PageWrapper>
            <PageWrapper active={current === 'projects'}>
                <ProjectsPage projects={projects} data={projectPage} />
            </PageWrapper>
            <PageWrapper active={current === 'contact'}>
                <ContactPage />
            </PageWrapper>
        </Wrapper>
    );
};

export default SwitchPages;
