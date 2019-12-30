import React from 'react';
import styled, { css, keyframes } from 'styled-components';

import Constants from 'config/Constants';

import { useSelector } from 'react-redux';

import PortfolioTemplate from 'templates/PortfolioTemplate';
import ContactTemplate from 'templates/ContactTemplate';
import ProjectsTemplate from 'templates/ProjectsTemplate';

import { getDataByLanguage } from 'config/utils';

const opacity = keyframes`
to{
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
                ${`${Constants.GENERAL.changePageDelay}s`} linear forwards;
        `}
`;

const SwitchViews = () => {
    const {
        ActivePage: { current },
        lang,
    } = useSelector(({ ActivePage, language }) => ({
        ActivePage,
        lang: language,
    }));

    const {
        projects,
        mainPageMarkdown,
        photo,
        projectPageMarkdown,
    } = getDataByLanguage(lang);

    return (
        <>
            <PageWrapper active={current === 'portfolio'}>
                <PortfolioTemplate
                    photo={photo}
                    content={mainPageMarkdown}
                    email="chentulooo@gmail.com"
                    headLine="Kamil Chędkowski"
                />
            </PageWrapper>
            <PageWrapper active={current === 'projects'}>
                <ProjectsTemplate
                    projects={projects}
                    markdownContent={projectPageMarkdown}
                />
            </PageWrapper>
            <PageWrapper active={current === 'contact'}>
                <ContactTemplate />
            </PageWrapper>
        </>
    );
};

export default SwitchViews;
