import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

import Constants from 'config/Constants';

import { useSelector } from 'react-redux';

import PortfolioTemplate from 'templates/PortfolioTemplate';
import ContactTemplate from 'templates/ContactTemplate';
import ProjectsTemplate from 'templates/ProjectsTemplate';

import { useDataApi } from 'api/data';

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

const SwitchTemplates = () => {
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
                <PortfolioTemplate
                    photo={photo}
                    content={mainPageContent}
                    email="chentulooo@gmail.com"
                    headLine="Kamil Chędkowski"
                />
            </PageWrapper>
            <PageWrapper active={current === 'projects'}>
                <ProjectsTemplate
                    projects={projects}
                    markdownContent={projectPage}
                />
            </PageWrapper>
            <PageWrapper active={current === 'contact'}>
                <ContactTemplate />
            </PageWrapper>
        </>
    );
};

export default SwitchTemplates;
