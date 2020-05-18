import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Paragraph } from 'components/atoms';
import { useChangeActiveElement } from 'hooks/useChangeActiveElement/useChangeActiveElement';
import { useSelector } from 'react-redux';
import Constants from 'config/Constants';
import rightArrow from 'images/rightArrow.svg';
import leftArrow from 'images/leftArrow.svg';

const Wrapper = styled.div`
    grid-column: 1/-2;
`;
const SectionsWrapper = styled.div`
    position: relative;
    display: grid;
    height: 90px;
    width: 300px;
    grid-auto-flow: column;
    overflow: hidden;
    @media (min-width: ${({ theme }) => theme.breakPointVeryLarge}) {
        height: 130px;
    }
`;
const Section = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0%;
    top: 0%;
    opacity: 0;
`;
const ButtonsWrapper = styled.div``;
const ArrowButton = styled.button`
    width: 70px;
    background-color: transparent;
    border: none;
    cursor: none;
    img {
        max-width: 100%;
    }
`;

const HobbiesWithButtons = ({ data }) => {
    if (!data.length === 0) return null;
    const currentLang = useSelector(({ language }) => language);
    const { parentRef, next, prev } = useChangeActiveElement();
    return (
        <Wrapper>
            <Paragraph as="span">
                {Constants[currentLang].CONTENT.InMeanTime}
            </Paragraph>
            <SectionsWrapper ref={parentRef}>
                {data.map(({ title, paragraph }, index) => (
                    <Section key={index}>
                        <Paragraph as="span" asTitle>
                            {title[0]}
                        </Paragraph>{' '}
                        <Paragraph as="span" asTitle red>
                            {title[1]}
                        </Paragraph>
                        <Paragraph
                            dangerouslySetInnerHTML={{
                                __html: paragraph,
                            }}
                        />
                    </Section>
                ))}
            </SectionsWrapper>
            <ButtonsWrapper>
                <ArrowButton
                    onClick={prev}
                    type="button"
                    title={Constants[currentLang].CONTENT.prev}
                >
                    <span className="sr-only">
                        {Constants[currentLang].CONTENT.prev}
                    </span>
                    <img
                        src={rightArrow}
                        alt={Constants[currentLang].CONTENT.prev}
                    />
                </ArrowButton>
                <ArrowButton
                    onClick={next}
                    type="button"
                    title={Constants[currentLang].CONTENT.next}
                >
                    <span className="sr-only">
                        {Constants[currentLang].CONTENT.next}
                    </span>
                    <img
                        src={leftArrow}
                        alt={Constants[currentLang].CONTENT.next}
                    />
                </ArrowButton>
            </ButtonsWrapper>
        </Wrapper>
    );
};

HobbiesWithButtons.propTypes = {
    data: PropTypes.arrayOf(PropTypes.any),
};
HobbiesWithButtons.defaultProps = {
    data: [],
};

export default HobbiesWithButtons;
