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

const PageWrapper = styled.div`
    opacity: 0;
    ${({ active }) =>
        !active &&
        css`
            position: absolute !important;
            height: 1px;
            width: 1px;
            overflow: hidden;
            clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
            clip: rect(1px, 1px, 1px, 1px);
        `}
    ${({ active }) =>
        active &&
        css`
            animation: ${opacity} 0.1s
                ${`${Constants.GENERAL.changePageDelay}s`} linear backwards;
            opacity: 1;
        `}
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
        ActivePage: { current },
        lang: currentLang,
    } = useSelector(({ ActivePage, language }) => ({
        ActivePage,
        lang: language,
    }));

    if (!photo) setData(useDataApi());

    const { mainPageContent, projectPage, projects } =
        currentLang === 'en' ? en : pl;

    return (
        <>
            <PageWrapper active={current === 'portfolio'}>
                <PortfolioPage
                    photo={photo}
                    content={mainPageContent}
                    email="chentulooo@gmail.com"
                    headLine="Kamil Chędkowski"
                />
            </PageWrapper>
            <PageWrapper active={current === 'projects'}>
                <ProjectsPage
                    projects={projects}
                    markdownContent={projectPage}
                />
            </PageWrapper>
            <PageWrapper active={current === 'contact'}>
                <ContactPage />
            </PageWrapper>
        </>
    );
};

export default SwitchPages;
