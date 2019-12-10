import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import PropTypes from 'prop-types';

import Constants from 'config/Constants';
import withContext from 'hoc/withContext';

import Portfolio from './Portfolio';
import Contact from './Contact';
import Projects from './Projects';

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

const SwitchViews = ({ pageContext: { currentPage } }) => {
    return (
        <>
            <PageWrapper active={currentPage === 'portfolio'}>
                <Portfolio />
            </PageWrapper>
            <PageWrapper active={currentPage === 'projects'}>
                <Projects />
            </PageWrapper>
            <PageWrapper active={currentPage === 'contact'}>
                <Contact />
            </PageWrapper>
        </>
    );
};

SwitchViews.propTypes = {
    pageContext: PropTypes.shape({
        previousPage: PropTypes.string.isRequired,
        currentPage: PropTypes.string.isRequired,
        onChangePage: PropTypes.oneOfType([PropTypes.func, () => null]),
    }).isRequired,
};

export default withContext(SwitchViews);
