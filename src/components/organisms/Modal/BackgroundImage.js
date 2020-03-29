import React from 'react';
import styled from 'styled-components';

import circlesRightBottom from 'images/Circles/circlesRightBottom.svg';

export const CirclesImageWrapper = styled.div`
    position: absolute;
    width: 213px;
    height: 174px;
    right: 0%;
    bottom: 0px;
    z-index: -1;
`;
const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
`;

export const BackgroundImage = () => {
    return (
        <CirclesImageWrapper type="presentation">
            <Image src={circlesRightBottom} />
        </CirclesImageWrapper>
    );
};
