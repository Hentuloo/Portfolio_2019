import React, { useEffect, useRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { TimelineLite } from 'gsap';

import PortfolioPage from './Portfolio/PortfolioPage';
import ContactPage from './Contact/ContactPage';
import ProjectsPage from './Projects/ProjectsPage';

const PageWrapper = styled.div`
    opacity: 0;
    position: absolute;
    top: 0%;
    width: 100%;
    transform-origin: top;
    overflow: hidden;
`;
const Switcher = ({ photo, mainPageContent, projects, projectPage }) => {
    const currentPage = useSelector(({ ActivePage }) => ActivePage.current);
    const portfolioRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    const generalTl = useMemo(() => new TimelineLite(), []);

    const hidden = useMemo(() => ({ opacity: 0, scaleY: 0 }), []);
    const visible = useMemo(() => ({ opacity: 1, delay: 0.4, zIndex: 1 }), []);

    useEffect(() => {
        const pages = [
            portfolioRef.current,
            projectsRef.current,
            contactRef.current,
        ];
        const setAsActive = index => {
            pages.forEach(pageNode => generalTl.set(pageNode, hidden));
            generalTl.set(pages[index], { scaleY: 1 });
            generalTl.to(pages[index], 0.1, visible);
        };
        if (currentPage === 'portfolio') setAsActive(0);
        if (currentPage === 'projects') setAsActive(1);
        if (currentPage === 'contact') setAsActive(2);
    }, [currentPage]);

    return (
        <>
            <PageWrapper ref={portfolioRef}>
                <PortfolioPage
                    photo={photo}
                    content={mainPageContent}
                    email="chentulooo@gmail.com"
                    headLine="Kamil Chędkowski"
                />
            </PageWrapper>
            <PageWrapper ref={projectsRef}>
                <ProjectsPage projects={projects} data={projectPage} />
            </PageWrapper>
            <PageWrapper ref={contactRef}>
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
