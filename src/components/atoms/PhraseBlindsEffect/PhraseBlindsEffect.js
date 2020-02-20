import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { Power2 } from 'gsap/all';

export const Wrapper = styled.p`
    position: fixed;
    top: 10px;
    left: 15px;
    margin: 0px;
    display: flex;
    flex-direction: column;
    font-size: ${({ theme }) => theme.font.l};
    line-height: ${({ theme }) => theme.font.l};
    font-family: ${({ theme }) => theme.font.second};
    font-weight: ${({ theme }) => theme.font.bold};
    text-transform: uppercase;

    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        left: 260px;
        top: 35px;
        line-height: ${({ theme }) => theme.font.xxl};
        font-size: ${({ theme }) => theme.font.xxl};
    }
`;

const AnimatedBox = styled.div`
    position: absolute;
    width: 50%;
    height: 100%;
    top: 0%;
    left: 0%;
    background-color: ${({ theme }) => theme.color.brand[0]};
    transform-origin: right 50%;
    ${({ gray }) =>
        gray &&
        css`
            left: 50%;
            background-color: ${({ theme }) => theme.color.gray[0]};
        `}
`;

const PharseBlindsEffect = ({
    children,
    className,
    tl,
    startLabel,
    endLabel,
    ...props
}) => {
    const firstBox = useRef(null);
    const secondBox = useRef(null);

    useEffect(() => {
        if (!tl) return;

        const boxes = [firstBox.current, secondBox.current];

        if (startLabel) tl.addLabel(startLabel);

        tl.staggerTo(
            boxes,
            0.8,
            {
                scaleX: 0,
                ease: Power2.easeInOut,
            },
            0.2,
            'start',
        );

        if (endLabel) tl.addLabel(endLabel);
    }, []);

    return (
        <Wrapper className={className} {...props}>
            {children}
            <AnimatedBox ref={firstBox} />
            <AnimatedBox gray ref={secondBox} />
        </Wrapper>
    );
};
PharseBlindsEffect.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    // eslint-disable-next-line react/forbid-prop-types
    tl: PropTypes.any,
    startLabel: PropTypes.string,
    endLabel: PropTypes.string,
};
PharseBlindsEffect.defaultProps = {
    className: '',
    tl: null,
    startLabel: null,
    endLabel: null,
};

export default PharseBlindsEffect;
