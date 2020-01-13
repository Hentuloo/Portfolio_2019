import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import LineSecondary from 'images/projectBoxLineSecondary.svg';
import ProjectImage from './ProjectImage';
import TitleWithLinks from './TitleWithLinks';
import Icons from './Icons';

const Wrapper = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    min-height: 130px;
    flex-direction: column;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.grayFirst};
    box-shadow: 0 0 20px 1px ${({ theme }) => theme.grayDark};
    font-family: ${({ theme }) => theme.font.second};
    font-weight: 700;
    &:hover {
        /* Inner image in ProjectImage component */
        .innerImage {
            transform: scale(1);
        }
    }
`;

const Description = styled.p`
    flex-grow: 1;
    padding: 5px 10px 10px;
    font-size: ${({ theme }) => theme.font.xxs};
    line-height: ${({ theme }) => theme.font.s};
    letter-spacing: 0px;
    font-weight: 600;
    word-spacing: 4px;

    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        padding: 0px 30px;
    }
`;

const LineWrapper = styled.div`
    position: relative;
    height: 30px;
    width: 100%;
    pointer-events: none;
    transform: translate(0px, -150%);
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        transform: translate(0px, -160%);
    }
    @media (min-width: ${({ theme }) => theme.breakPointMiddle}) {
        transform: translate(0px, -180%);
    }
    @media (min-width: ${({ theme }) => theme.breakPointLarge}) {
        transform: translate(0px, -200%);
    }
`;

const LineBox = styled.div`
    position: absolute;
    width: 100%;
    height: 400px;
    top: 50%;
    transform: translate(0%, -50%);
    overflow: hidden;
`;

const Line = styled.img`
    position: absolute;
    width: 110%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
`;

const ProjectBox = ({ data }) => {
    const { title, description, gitLink, liveLink, photo, technologies } = data;
    return (
        <Wrapper>
            <ProjectImage photo={photo} title={title} />
            <TitleWithLinks
                title={title}
                gitLink={gitLink}
                liveLink={liveLink}
            ></TitleWithLinks>
            <Description>{description}</Description>
            <LineWrapper>
                <LineBox>
                    <Line src={LineSecondary} role="presentation" alt="" />
                </LineBox>
            </LineWrapper>
            <Icons technologies={technologies} />
        </Wrapper>
    );
};
ProjectBox.propTypes = {
    data: PropTypes.objectOf(Object),
};
ProjectBox.defaultProps = {
    data: null,
};
export default ProjectBox;
