import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getGraphcmsImg } from 'config/utils';

import mockyImage from 'images/mockyImage.svg';
import LinePrimary from 'images/projectBoxLinePrimary.svg';
import { useImage } from 'hooks/useImage';

const ShadowImage = styled.img`
    display: none;

    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        position: absolute !important;
        top: 0%;
        width: 100%;
        filter: blur(5px);
        display: block;
    }
`;
export const Image = styled.img`
    position: absolute !important;
    top: 0%;
    position: absolute;
    width: 100%;

    top: 0%;
    transition: transform 0.8s ${({ theme }) => theme.blindsAnimation};

    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        transform: scale(0.8);
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
`;

const ProjectImage = ({ photo, title, loading }) => {
    const url = getGraphcmsImg(photo, 320);
    const [image] = useImage(loading ? null : url);

    if (loading || image === undefined) {
        return (
            <Wrapper role="presentation">
                <Image src={mockyImage} alt="Ładowanie obrazka" />
                <Line src={LinePrimary} alt="Ozdobna linia" />
            </Wrapper>
        );
    }

    return (
        <Wrapper role="presentation">
            <ShadowImage src={url} alt={title} />
            <Image src={url} alt={title} />
            <Line src={LinePrimary} alt="Ozdobna linia" />
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
    loading: PropTypes.bool,
};
ProjectImage.defaultProps = {
    loading: false,
};

export default ProjectImage;
