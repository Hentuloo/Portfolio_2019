import React, { useRef, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Constants from 'config/Constants';
import waveSvg from 'images/MenuWave.svg';

import { form, home, projects } from 'images/menuIcons';
import { TimelineLite } from 'gsap';
import Link from './Link';

const Wrapper = styled.ul`
    position: relative;
    display: grid;
    width: 100%;
    height: 100%;
    grid-auto-flow: column;
    list-style: none;
    margin: 0px;
    padding: 0px;
`;
const ListElement = styled.li`
    z-index: 16;
`;

const WaveImageWrapper = styled.div`
    position: absolute;
    display: grid;
    width: 170vw;
    max-height: 100%;
    align-items: flex-end;
    left: calc(-33vw - 2%);
    bottom: -5%;
    z-index: 15;
    will-change: transform;
    &::after {
        position: absolute;
        content: '';
        width: 25vw;
        height: 25vw;
        left: calc(50% - 12.5vw);
        top: -32px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.color.gray[0]};
    }
`;
const WaveImage = styled.img`
    width: 100%;
`;

const ListWrapper = ({ changePage }) => {
    const waveRef = useRef();
    const elementRef = useRef();
    const generalTl = useMemo(() => new TimelineLite(), []);

    const lang = useSelector(({ language }) => language);
    const { current, previous } = useSelector(({ ActivePage }) => ActivePage);

    useEffect(() => {
        const waveNode = waveRef.current;
        const links = elementRef.current.childNodes;
        const linkWidth = links[0].offsetWidth;

        if (current === 'portfolio') {
            generalTl.to(waveNode, 0.8, { x: 0 });
        } else if (current === 'projects') {
            generalTl.to(waveNode, 0.8, { x: -linkWidth });
        } else if (current === 'contact') {
            generalTl.to(waveNode, 0.8, { x: linkWidth });
        }
    }, [current]);

    const opposite =
        (current === 'projects' && previous === 'contact') ||
        (previous === 'projects' && current === 'contact');

    return (
        <Wrapper>
            <ListElement ref={elementRef}>
                <Link
                    href={`#${Constants[lang].PATHS.projects}`}
                    onClick={e => changePage(e, 'projects')}
                    active={current === 'projects'}
                    opposite={opposite}
                    icon={projects}
                />
            </ListElement>
            <ListElement>
                <Link
                    href={`#${Constants[lang].PATHS.portfolio}`}
                    onClick={e => changePage(e, 'portfolio')}
                    active={current === 'portfolio'}
                    opposite={opposite}
                    inCenter
                    icon={home}
                />
            </ListElement>
            <ListElement>
                <Link
                    href={`#${Constants[lang].PATHS.contact}`}
                    onClick={e => changePage(e, 'contact')}
                    active={current === 'contact'}
                    opposite={opposite}
                    icon={form}
                />
            </ListElement>
            <WaveImageWrapper ref={waveRef}>
                <WaveImage src={waveSvg} />
            </WaveImageWrapper>
        </Wrapper>
    );
};

ListWrapper.propTypes = {
    changePage: PropTypes.func.isRequired,
};

export default ListWrapper;
