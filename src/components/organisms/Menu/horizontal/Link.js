import React, { useRef, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TimelineLite } from 'gsap';

import { activeElementAnimation, hideAndShowAnimation } from './anim';

const Wrapper = styled.a`
    position: relative;
    display: block;
    height: 100%;
`;

const IconWrapper = styled.div`
    position: absolute;
    width: 64%;
    max-height: 100%;
    bottom: -7%;
    left: 50%;
    margin: 0px auto;
    transform: translate(-50%, 0%);
`;
const Icon = styled.img`
    width: 100%;
`;

const Link = ({ icon, active, opposite, inCenter, ...props }) => {
    const iconRef = useRef();
    const generalTl = useMemo(() => new TimelineLite(), []);

    useEffect(() => {
        const iconNode = iconRef.current;

        if (active) {
            generalTl.add(
                activeElementAnimation(iconNode).delay(opposite ? 0.2 : 0),
            );
        } else {
            generalTl.to(iconNode, 0.5, { y: 0 });
        }
    }, [active]);

    if (opposite && inCenter) {
        const iconNode = iconRef.current;
        generalTl.add(hideAndShowAnimation(iconNode));
    }

    return (
        <Wrapper {...props}>
            <span className="sr-only">Projekty</span>
            <IconWrapper ref={iconRef}>
                <Icon src={icon} />
            </IconWrapper>
        </Wrapper>
    );
};
Link.propTypes = {
    icon: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    opposite: PropTypes.bool,
    inCenter: PropTypes.bool,
};
Link.defaultProps = {
    opposite: false,
    inCenter: false,
};

export default Link;
