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
        padding-bottom: 100px;
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
        width: 42%;
        height: calc(100vh - 400px);
        bottom: 0%;
        right: 3%;
    }
    @media (min-width: ${({ theme }) => theme.breakPointLarge}) {
        width: 45%;
        height: calc(100vh - 500px);
    }
`;
const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
`;

const AboutSection = ({ className }) => {
    return (
        <Wrapper className={className}>
            <AliginRight>
                <ParagraphTitle>Coś o mnie</ParagraphTitle>
                <Paragraph>
                    Zajmuje się pisaniem stron internetowych już od czterech
                    lat, a swoje pierwsze kroki robiłem w technikum. Od tego
                    czasu zdążyłem poznać sposoby budowania serwisów od strony
                    Front-end jak i Back-end, ucząc się głownie z kursów online
                    i dokumentacji, ale najwięcej zmagając się z własnymi
                    projektami które staram się dodawać na bieżąco gdy czegoś
                    nowego się nauczę.
                </Paragraph>
            </AliginRight>
            <ImageWrapper>
                <Image src={pandaGround} />
            </ImageWrapper>

            <AliginLeft>
                <Paragraph as="h4" underline asTitle>
                    Nie tylko kod!
                </Paragraph>
                <Paragraph>
                    W między czasie: gram na trąbce, trochę biegam, słucham
                    podcastów oraz audiobooki i coraz częściej projektuję
                    layouty/grafiki te ostatnie to głównie wektorowe.
                </Paragraph>
            </AliginLeft>
        </Wrapper>
    );
};

AboutSection.propTypes = {
    className: PropTypes.string,
};
AboutSection.defaultProps = {
    className: '',
};

export default AboutSection;
