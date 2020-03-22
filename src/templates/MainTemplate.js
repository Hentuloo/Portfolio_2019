import React, { useMemo, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import gsap from 'gsap';

import { PhraseBlindsEffect, BackgroundView } from 'components/atoms';
import {
    BackgroudBoxes,
    LanguageButtons,
    GridBlocksAnimation,
    startGridAnimation,
    endGridAnimation,
} from 'components/molecules';

import { Menu } from 'components/organisms';
import { useSelector } from 'react-redux';
import BackgroundViewWithImage from './BackgroundViewWithImage';

const StartAnimation = styled.div`
    opacity: 1;
`;

const ShowAfterStartAnimation = styled.div`
    opacity: 0;
    pointer-events: none;
`;

const Content = styled.div`
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        flex-grow: 1;
    }
`;
const ContentWrapper = styled.div`
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        display: flex;
        padding-left: 150px;
    }
`;

const MainTemplate = ({ children }) => {
    const [throttledContent, setThrottledContent] = useState(false);
    const { entryPageLoaded } = useSelector(({ Pages }) => Pages);

    const beforeAnimationNode = useRef(null);
    const afterAnimationNode = useRef(null);
    const gridBlocksRef = useRef(null);

    const generalTl = useMemo(() => gsap.timeline({ delay: 1 }), []).addLabel(
        'start',
    );

    useEffect(() => {
        const blocks = gridBlocksRef.current.children;

        generalTl.add(startGridAnimation(blocks), '+=0.1').add(() => {
            setThrottledContent(true);
            generalTl.set(beforeAnimationNode.current, { opacity: 0 });
        });
    }, []);

    useEffect(() => {
        if (!entryPageLoaded) return;

        const blocks = gridBlocksRef.current.children;
        generalTl
            .set(afterAnimationNode.current, {
                opacity: 1,
                pointerEvents: 'auto',
            })
            .add(endGridAnimation(blocks));
    }, [entryPageLoaded]);

    return (
        <>
            <StartAnimation ref={beforeAnimationNode}>
                <PhraseBlindsEffect as="h1" tl={generalTl}>
                    <span>Kamil</span>
                    <span>Chędkowski</span>
                </PhraseBlindsEffect>
                <BackgroundViewWithImage />
            </StartAnimation>
            <ShowAfterStartAnimation ref={afterAnimationNode}>
                <BackgroudBoxes />
                <LanguageButtons />
                <ContentWrapper>
                    <Menu />
                    {throttledContent && <Content>{children}</Content>}
                </ContentWrapper>
                <BackgroundView />
            </ShowAfterStartAnimation>
            <GridBlocksAnimation ref={gridBlocksRef} />
        </>
    );
};

MainTemplate.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MainTemplate;
