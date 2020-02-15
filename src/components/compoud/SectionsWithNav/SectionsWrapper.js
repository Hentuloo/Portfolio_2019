import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Context from './Context';

import { Section } from './Section';

export const SectionsWrapperSC = styled.section`
    padding: 40px 20px 0px;
    ${({ active }) => css`
        ${Section}:nth-child(${active + 1}){
            opacity:1;
        }`}
`;

export const SectionsWrapper = ({ children }) => {
    const { active } = useContext(Context);

    return <SectionsWrapperSC active={active}>{children}</SectionsWrapperSC>;
};
SectionsWrapper.propTypes = {
    children: PropTypes.node,
};
SectionsWrapper.defaultProps = {
    children: null,
};
