import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GraphImg from 'graphcms-image';

import LinePrimary from 'images/projectBoxLinePrimary.svg';

const ShadowImage = styled(GraphImg)`
    display: none;

    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        width: 100%;
        filter: blur(5px);
        display: block;
    }
`;

const Line = styled.img`
    width: 105%;
    pointer-events: none;
    transform: translate(-2.5%, -7%);
`;
const Wrapper = styled.div`
    position: relative;
    padding-bottom: 20px;
    overflow: hidden;
    border-radius: 8px 8px 0px 0px;
    min-height: 180px;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        min-height: 140px;
    }
    img {
        position: absolute !important;
        top: 0%;
    }
    .innerImage {
        position: absolute !important;
        width: 100%;

        top: 0%;
        transition: transform 0.8s ${({ theme }) => theme.blindsAnimation};

        @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
            transform: scale(0.8);
        }
    }
`;

const ProjectImage = ({ photo, title }) => {
    return (
        <Wrapper>
            <ShadowImage
                outerWrapperClassName="outImage"
                image={photo}
                alt={title}
                role="presentation"
            />
            <GraphImg
                outerWrapperClassName="innerImage"
                image={photo}
                maxWidth={600}
                alt={title}
            />
            <Line src={LinePrimary} role="presentation" alt="" />
        </Wrapper>
    );
};

const photoShape = {
    handle: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
};

ProjectImage.propTypes = {
    photo: PropTypes.shape(photoShape).isRequired,
    title: PropTypes.string.isRequired,
};

export default ProjectImage;
