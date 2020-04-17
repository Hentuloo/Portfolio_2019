import React from 'react';
import styled from 'styled-components';
import treeSvg from 'images/tree.svg';
import { circlesVertical } from 'images/Circles';

const ImageWrapper = styled.div`
    position: relative;
    display: grid;
    justify-items: flex-end;
    grid-column: 1 / span 1;
    border-radius: 15px;
    margin-left: 40px;
`;
const ImageTree = styled.img`
    height: 100%;
    max-width: 100%;
`;
const CirclesBackground = styled.img`
    position: absolute;
    left: 0%;
    top: 0%;
    height: 125%;
    transform: translate(-10%, -10%);
    z-index: -1;
`;

const TreeImage = () => {
    return (
        <ImageWrapper>
            <ImageTree src={treeSvg} />
            <CirclesBackground src={circlesVertical} />
        </ImageWrapper>
    );
};

export default TreeImage;
