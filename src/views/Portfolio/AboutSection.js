import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import aboutPageImage from 'images/aboutPageImage.svg';
import { ParagraphTitle, Paragraph } from 'components/atoms';
import HobbiesWithButtons from './HobbiesWithButtons';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 50px 1fr 50px;
    grid-row-gap: 30px;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        grid-template-columns: 150px 1fr 150px;
        grid-row-gap: 80px;
    }
`;
const AliginRight = styled.div`
    max-width: 625px;
    grid-column: 1/-1;
    text-align: right;
    justify-self: end;
    ${ParagraphTitle} {
        &::after {
            left: auto;
            right: 0%;
        }
    }
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        grid-column: -3/-1;
    }
`;

const ImageWrapper = styled.div`
    grid-column: 1/-1;
    width: 100%;
    height: 250px;
    margin: -20px auto;
    z-index: -1;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        position: fixed;
        width: 45%;
        height: calc(100% - 300px);
        bottom: 6%;
        right: -3%;
    }
    @media (min-width: ${({ theme }) => theme.breakPointLarge}) {
        bottom: -3%;
        right: 3%;
    }
`;
const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
`;

const AboutSection = ({ className, content }) => {
    if (!content) return null;

    const { title, paragraph } = content[0];
    return (
        <Wrapper className={className}>
            <AliginRight>
                <ParagraphTitle>{title}</ParagraphTitle>
                <Paragraph dangerouslySetInnerHTML={{ __html: paragraph }} />
            </AliginRight>

            <ImageWrapper>
                <Image src={aboutPageImage} />
            </ImageWrapper>

            <HobbiesWithButtons data={content.slice(1)} />
        </Wrapper>
    );
};

AboutSection.propTypes = {
    content: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.arrayOf(PropTypes.string),
            ]),
            paragraph: PropTypes.string,
        }),
    ).isRequired,
    className: PropTypes.string,
};
AboutSection.defaultProps = {
    className: '',
};

export default AboutSection;
