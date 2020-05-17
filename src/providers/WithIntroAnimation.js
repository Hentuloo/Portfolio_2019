import React, { useMemo, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { PhraseBlindsEffect } from 'components/atoms';
import {
    GridBlocksAnimation,
    startGridAnimation,
    endGridAnimation,
} from 'components/molecules';

import gsap from 'gsap';
import BackgroundViewWithImage from 'templates/BackgroundViewWithImage';

const StartAnimation = styled.div`
    opacity: 1;
`;

const ShowAfterStartAnimation = styled.div`
    opacity: 0;
    pointer-events: none;
`;

export const WithIntroAnimation = ({ showContent, setShowContent, render }) => {
    const [loaded, setLoaded] = useState(false);

    const beforeAnimationNode = useRef(null);
    const afterAnimationNode = useRef(null);
    const gridBlocksRef = useRef(null);

    const generalTl = useMemo(() => gsap.timeline({ delay: 1 }), []).addLabel(
        'start',
    );

    useEffect(() => {
        const blocks = gridBlocksRef.current.children;

        generalTl.add(startGridAnimation(blocks), '+=0.1').add(() => {
            setShowContent(true);
            generalTl.set(beforeAnimationNode.current, { opacity: 0 });
        });

        setLoaded(true);
    }, []);

    useEffect(() => {
        if (!loaded) return;

        const blocks = gridBlocksRef.current.children;
        generalTl
            .set(afterAnimationNode.current, {
                opacity: 1,
                pointerEvents: 'auto',
            })
            .add(endGridAnimation(blocks));
    }, [loaded]);

    return (
        <>
            {!showContent && (
                <StartAnimation ref={beforeAnimationNode}>
                    <PhraseBlindsEffect as="h1" tl={generalTl}>
                        <span>Kamil</span>
                        <span>Chędkowski</span>
                    </PhraseBlindsEffect>
                    <BackgroundViewWithImage />
                </StartAnimation>
            )}
            <ShowAfterStartAnimation ref={afterAnimationNode}>
                {render()}
            </ShowAfterStartAnimation>
            <GridBlocksAnimation ref={gridBlocksRef} />
        </>
    );
};

WithIntroAnimation.propTypes = {
    render: PropTypes.func.isRequired,
    showContent: PropTypes.bool.isRequired,
    setShowContent: PropTypes.func.isRequired,
};
