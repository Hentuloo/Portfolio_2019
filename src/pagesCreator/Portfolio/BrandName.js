import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { PhraseBlindsEffect } from 'components/atoms';
import Constants from 'config/Constants';

const StyledPhraseBlindsEffect = styled(PhraseBlindsEffect)`
    position: relative;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        left: 110px;
        top: 35px;
    }
`;

const BrandName = () => {
    const lang = useSelector(({ language }) => language);
    const { headLine } = Constants[lang].CONTENT;

    return (
        <StyledPhraseBlindsEffect as="h1">
            <span>{headLine[0]}</span>
            <span>{headLine[1]}</span>
        </StyledPhraseBlindsEffect>
    );
};

export default BrandName;
