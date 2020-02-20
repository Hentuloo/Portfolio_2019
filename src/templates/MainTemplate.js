import React, { useMemo, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { PhraseBlindsEffect, BackgroundView } from 'components/atoms';
import {
    BackgroudBoxes,
    LanguageButtons,
    GridBlocksAnimation,
} from 'components/molecules';

import { Menu } from 'components/organisms';
import { TimelineLite } from 'gsap';
import BackgroundViewWithImage from './BackgroundViewWithImage';

const StartAnimation = styled.div`
    opacity: 1;
`;

const ShowAfterStartAnimation = styled.div`
    opacity: 0;
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
    // const [startAnimationComplete, setStartAnimationComplete] = useState(false);
    const generalTl = useMemo(() => new TimelineLite({ delay: 2 }), []);
    const beforeAnimationNode = useRef(null);
    const afterAnimationNode = useRef(null);

    useEffect(() => {
        generalTl
            .addLabel('start')
            .to(
                afterAnimationNode.current,
                0,
                { opacity: 1 },
                'gridAnimationStart+=1.1',
            )
            .to(
                beforeAnimationNode.current,
                0,
                { opacity: 0 },
                'gridAnimationStart+=1.1',
            );
    }, []);

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
                    <Content>{children}</Content>
                </ContentWrapper>
                <BackgroundView />
            </ShowAfterStartAnimation>
            <GridBlocksAnimation
                tl={generalTl}
                startLabel="gridAnimationStart"
                endLabel="gridAnimationEnd"
            />
        </>
    );
};

MainTemplate.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MainTemplate;
