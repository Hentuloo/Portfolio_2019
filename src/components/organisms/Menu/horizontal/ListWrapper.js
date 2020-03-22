import React, { useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Constants from 'config/Constants';
import waveSvg from 'images/MenuWave.svg';

import { form, home, projects } from 'images/menuIcons';

import {
    useChangePageEffect,
    hidePages,
    showPage,
} from 'hooks/useChangePageEffect';

import gsap from 'gsap';
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

const ListWrapper = () => {
    const changePage = useChangePageEffect();
    const waveRef = useRef();
    const wrapperRef = useRef();

    const lang = useSelector(({ language }) => language);
    const { entryPage, refs, onChangeCallbacks, entryPageLoaded } = useSelector(
        ({ Pages }) => Pages,
    );

    const handleChangePage = useCallback(
        (e, pageName) => {
            e.preventDefault();
            if (refs[pageName] === null) return null;
            const links = [...wrapperRef.current.childNodes].slice(0, 3);

            const tl = changeActiveLinkAnim(waveRef.current, links, pageName);

            tl.add(hidePages(refs, pageName), '-=0.8')
                .addLabel('showPage')
                .add(() => {
                    onChangeCallbacks.forEach(fn => {
                        fn(pageName);
                    });
                }, 'showPage-=0.34')
                .add(showPage(refs[pageName]), 'showPage-=0.26')
                .add(() => {
                    changePage(pageName);
                }, '+=0.35');
            return tl;
        },
        [JSON.stringify(refs), onChangeCallbacks.length],
    );

    useEffect(() => {
        const links = [...wrapperRef.current.childNodes].slice(0, 3);
        changeActiveLinkAnim(waveRef.current, links, entryPage);
    }, []);

    useEffect(() => {
        if (!entryPageLoaded) return;
        gsap.timeline().add(showMenu(wrapperRef.current), '+=1.1');
    }, [entryPageLoaded]);

    return (
        <Wrapper ref={wrapperRef}>
            <ListElement>
                <Link
                    href={`#${Constants[lang].PATHS.projects}`}
                    onClick={e => handleChangePage(e, 'projects')}
                    icon={projects}
                />
            </ListElement>
            <ListElement>
                <Link
                    href={`#${Constants[lang].PATHS.portfolio}`}
                    onClick={e => handleChangePage(e, 'portfolio')}
                    inCenter
                    icon={home}
                />
            </ListElement>
            <ListElement>
                <Link
                    href={`#${Constants[lang].PATHS.contact}`}
                    onClick={e => handleChangePage(e, 'contact')}
                    icon={form}
                />
            </ListElement>
            <WaveImageWrapper ref={waveRef}>
                <WaveImage src={waveSvg} />
            </WaveImageWrapper>
        </Wrapper>
    );
};

export default ListWrapper;
