import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useSetPage } from 'hooks/useChangePageEffect';

import { useDispatch, useSelector } from 'react-redux';
import { setPagesRefs } from 'state/actions/pagesActions';
import PortfolioPage from './Portfolio/PortfolioPage';
import ContactPage from './Contact/ContactPage';
import ProjectsPage from './Projects/ProjectsPage';

const PageWrapper = styled.div`
    opacity: 0;
    position: absolute;
    top: 0%;
    width: 100%;
    transform-origin: top;
`;
const Switcher = ({ photo, mainPageContent, projects, projectPage }) => {
    const entryPage = useSelector(({ Pages }) => Pages.entryPage);
    const dispatch = useDispatch();

    const setPages = useSetPage();

    useEffect(() => {
        const refs = {
            portfolio: '.PortfolioPage',
            projects: '.ProjectsPage',
            contact: '.PageWrapper',
        };
        dispatch(setPagesRefs(refs));
        setPages(entryPage, refs);
    }, []);

    return (
        <>
            <PageWrapper className="PortfolioPage">
                <PortfolioPage
                    photo={photo}
                    content={mainPageContent}
                    email="chentulooo@gmail.com"
                    headLine="Kamil Chędkowski"
                />
            </PageWrapper>
            <PageWrapper className="ProjectsPage">
                <ProjectsPage projects={projects} data={projectPage} />
            </PageWrapper>
            <PageWrapper className="PageWrapper">
                <ContactPage />
            </PageWrapper>
        </>
    );
};

Switcher.propTypes = {
    mainPageContent: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            paragraph: PropTypes.string,
        }),
    ).isRequired,
    photo: PropTypes.shape({
        handle: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
    }).isRequired,
    projectPage: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string,
            title: PropTypes.string,
            content: PropTypes.arrayOf(
                PropTypes.shape({
                    title: PropTypes.string,
                    paragraph: PropTypes.string,
                }),
            ),
        }),
    ).isRequired,
    projects: PropTypes.arrayOf(Object).isRequired,
};

export default Switcher;
