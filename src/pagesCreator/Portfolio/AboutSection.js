import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import pandaGround from 'images/pandaGround.svg';
import { ParagraphTitle, Paragraph } from 'components/atoms';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 50px 1fr 50px;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        grid-template-columns: 150px 1fr 150px;
        grid-row-gap: 80px;
    }
`;
const AliginRight = styled.div`
    grid-column: 1/-1;
    text-align: right;
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
const AliginLeft = styled.div`
    grid-column: 1/4;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        grid-column: 1/3;
        padding-bottom: 60px;
    }

    ${Paragraph}:first-child {
        font-size: ${({ theme }) => theme.font.s};
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

    return (
        <Wrapper className={className}>
            <AliginRight>
                <ParagraphTitle>{content[0].title}</ParagraphTitle>
                <Paragraph>{content[0].paragraph}</Paragraph>
            </AliginRight>

            <ImageWrapper>
                <Image src={pandaGround} />
            </ImageWrapper>

            <AliginLeft>
                <Paragraph as="h4" underline asTitle>
                    {content[1].title}
                </Paragraph>
                <Paragraph>{content[1].paragraph}</Paragraph>
            </AliginLeft>
        </Wrapper>
    );
};

AboutSection.propTypes = {
    content: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            paragraph: PropTypes.string,
        }),
    ).isRequired,
    className: PropTypes.string,
};
AboutSection.defaultProps = {
    className: '',
};

export default AboutSection;
