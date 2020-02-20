import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Constants from 'config/Constants';

const Wrapper = styled.div`
    position: relative;
    display: grid;
    margin: 0px;
    font-size: ${({ theme }) => theme.font.l};
    line-height: ${({ theme }) => theme.font.l};
    font-family: ${({ theme }) => theme.font.second};
    font-weight: ${({ theme }) => theme.font.bold};
    text-transform: uppercase;

    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        left: 110px;
        top: 35px;
        line-height: ${({ theme }) => theme.font.xxl};
        font-size: ${({ theme }) => theme.font.xxl};
    }
`;

const BrandName = () => {
    const lang = useSelector(({ language }) => language);
    const { headLine } = Constants[lang].CONTENT;

    return (
        <Wrapper as="h1">
            <span>{headLine[0]}</span>
            <span>{headLine[1]}</span>
        </Wrapper>
    );
};

export default BrandName;
