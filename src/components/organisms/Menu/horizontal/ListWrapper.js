import React, { useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Constants from 'config/Constants';
import waveSvg from 'images/MenuWave.svg';

import { form, home, projects } from 'images/menuIcons';

import gsap from 'gsap';
import { getViewNameByUrl } from 'config/utils';
import Link from './Link';
import { changeActiveLinkAnim, showMenu } from './anim';

const Wrapper = styled.ul`
    position: relative;
    display: grid;
    width: 100%;
    height: 100%;
    grid-auto-flow: column;
    list-style: none;
    margin: 0px;
    padding: 0px;
    transform: translateY(100%);
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

const ListWrapper = ({ lang, showContent }) => {
    const waveRef = useRef();
    const wrapperRef = useRef();

    useEffect(() => {
        const links = [...wrapperRef.current.childNodes].slice(0, 3);
        changeActiveLinkAnim(waveRef.current, links, getViewNameByUrl());
    }, []);

    useEffect(() => {
        if (!showContent) return;
        gsap.timeline().add(showMenu(wrapperRef.current), '+=1.2');
    }, [showContent]);

    const hanldeChangePage = useCallback(pageName => {
        const links = [...wrapperRef.current.childNodes].slice(0, 3);
        changeActiveLinkAnim(waveRef.current, links, pageName);
    }, []);

    return (
        <Wrapper ref={wrapperRef}>
            <ListElement>
                <Link
                    onClick={() => hanldeChangePage('projects')}
                    to={`/${Constants[lang].PATHS.projects}`}
                    icon={projects}
                />
            </ListElement>
            <ListElement>
                <Link
                    onClick={() => hanldeChangePage('portfolio')}
                    to={`${Constants[lang].PATHS.portfolio}`}
                    icon={home}
                />
            </ListElement>
            <ListElement>
                <Link
                    onClick={() => hanldeChangePage('contact')}
                    to={`/${Constants[lang].PATHS.contact}`}
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
    lang: PropTypes.string.isRequired,
    showContent: PropTypes.bool.isRequired,
};
export default ListWrapper;
