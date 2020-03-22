import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useSetPage } from 'hooks/useChangePageEffect';

import { useSelector, useDispatch } from 'react-redux';
import { setEntryPageLoaded } from 'state/actions/pagesActions';

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
    const dispatch = useDispatch();
    const [loadRestPages, setLoadRestPages] = useState(false);
    const { entryPageLoaded, entryPage, refs } = useSelector(
        ({ Pages }) => Pages,
    );

    const setPage = useSetPage();

    useEffect(() => {
        setPage(entryPage, refs);
        dispatch(setEntryPageLoaded(true));
    }, []);

    useEffect(() => {
        if (!entryPageLoaded) return;
        setTimeout(() => setLoadRestPages(true), 1700);
    }, [entryPageLoaded]);

    return (
        <>
            <PageWrapper className="PortfolioPage">
                {(entryPage === 'portfolio' || loadRestPages === true) && (
                    <PortfolioPage
                        photo={photo}
                        content={mainPageContent}
                        email="chentulooo@gmail.com"
                        headLine="Kamil Chędkowski"
                    />
                )}
            </PageWrapper>
            <PageWrapper className="ProjectsPage">
                {(entryPage === 'projects' || loadRestPages === true) && (
                    <ProjectsPage projects={projects} data={projectPage} />
                )}
            </PageWrapper>
            <PageWrapper className="PageWrapper">
                {(entryPage === 'contact' || loadRestPages === true) && (
                    <ContactPage />
                )}
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
