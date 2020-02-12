import React from 'react';
import { useSelector } from 'react-redux';
import { PhraseBlindsEffect } from 'components/atoms';
import Constants from 'config/Constants';

const BrandName = () => {
    const lang = useSelector(({ language }) => language);
    const { headLine } = Constants[lang].CONTENT;

    return (
        <PhraseBlindsEffect as="h1">
            <span>{headLine[0]}</span>
            <span>{headLine[1]}</span>
        </PhraseBlindsEffect>
    );
};

export default BrandName;
