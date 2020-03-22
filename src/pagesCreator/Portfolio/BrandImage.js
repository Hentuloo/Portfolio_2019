import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getGraphcmsImg } from 'config/utils';

import { circlesGray, circlesCornerGray } from 'images/Circles';

const Wrapper = styled.div`
    position: relative;
`;
const ImageWrapper = styled.div``;
const Image = styled.img`
    position: absolute;
    top: 0%;
    left: 0%;
    max-width: 100%;
    max-height: 80vh;
`;
const TopCircles = styled.img`
    position: absolute;
    width: 65px;
    right: 0%;
    top: 0%;
    z-index: -1;
    transform: translate(8%, -8%);
    z-index: 2;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        width: 85px;
    }
`;
const BottomCircles = styled.img`
    position: absolute;
    width: 90px;
    left: 0%;
    bottom: 0%;
    z-index: -1;
    transform: translate(-35%, 8%);
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        width: 135px;
    }
`;

const BrandImage = ({ photo, className }) => {
    return (
        <Wrapper className={className}>
            <TopCircles src={circlesCornerGray} />
            <ImageWrapper>
                <Image
                    src={getGraphcmsImg(photo, 200)}
                    alt="Kamil Chędkowski - zdjęcie"
                />
            </ImageWrapper>
            <BottomCircles src={circlesGray} />
        </Wrapper>
    );
};

BrandImage.propTypes = {
    className: PropTypes.string,
    photo: PropTypes.shape({
        handle: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
    }).isRequired,
};

BrandImage.defaultProps = {
    className: '',
};

export default BrandImage;
