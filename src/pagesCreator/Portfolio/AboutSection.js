import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import pandaGround from 'images/pandaGround.svg';
import { ParagraphTitle, Paragraph } from 'components/atoms';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 50px 1fr 50px;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        grid-row-gap: 60px;
    }
`;
const AliginRight = styled.div`
    grid-column: 2/-1;
    text-align: right;
    ${ParagraphTitle} {
        &::after {
            left: auto;
            right: 0%;
        }
    }
`;
const AliginLeft = styled.div`
    grid-column: 1/4;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        grid-column: 1/3;
    }

    ${Paragraph}:first-child {
        font-size: ${({ theme }) => theme.font.s};
    }
`;

const ImageWrapper = styled.div`
    grid-column: 1/-1;
    width: 96%;
    height: 200px;
    margin: -20px auto;
    z-index: -1;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        position: fixed;
        width: 36%;
        height: calc(100vh - 350px);
        bottom: 0%;
        right: 3%;
    }
    @media (min-width: ${({ theme }) => theme.breakPointLarge}) {
        width: 46%;
        height: calc(100vh - 300px);
    }
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
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
                <Paragraph underline asTitle>
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
