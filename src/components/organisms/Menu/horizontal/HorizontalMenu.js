import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ListWrapper from './ListWrapper';

const Wrapperr = styled.nav`
    position: fixed;
    width: 100%;
    height: 100px;
    bottom: 0%;
    left: 0%;
    z-index: 14;
    ${({ theme }) => theme.breakPointMobileKeyboard} {
        display: none;
    }
`;

const HorizontalMenu = ({ currentLang, showContent }) => {
    return (
        <Wrapperr>
            <ListWrapper lang={currentLang} showContent={showContent} />
        </Wrapperr>
    );
};
HorizontalMenu.propTypes = {
    currentLang: PropTypes.string.isRequired,
    showContent: PropTypes.bool.isRequired,
};

export default memo(HorizontalMenu);
