/* eslint-disable no-shadow */
import React, { useContext, useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { TimelineLite } from 'gsap';
import Context from '../Context';

import { ButtonSC } from './Button';
import { setOrderByNewActive } from '../utils';
import {
    introAnimation,
    setInRowAnimation,
    setAsActiveAnimation,
    removeFromActivePositionAnimation,
} from './gsapAnimations';

export const ButtonsWrapperSC = styled.div`
    position: absolute;
    display: flex;
    width: 100%;

    height: 60px;
    top: -65px;
    left: 0%;
    z-index: 2;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        max-width: 500px;
        height: 80px;
        top: -85px;
    }
    ${({ active }) => css`
        ${ButtonSC}:nth-child(${active + 1}){
            opacity:1;
        }`}
`;

export const ButtonsWrapper = ({ children }) => {
    const { active, prevActive } = useContext(Context);

    const wrapperRef = useRef(null);
    const [btnsOrder, setButtonsOrder] = useState([]);

    const getSetupNodes = () => ({
        buttons: [...wrapperRef.current.children],
        wrapper: wrapperRef.current,
    });

    const setButtonsPositionByOrder = newOrder => {
        const { buttons, wrapper } = getSetupNodes();

        const activeBtnIndex = newOrder[0];
        const lastBtnIndex = newOrder[newOrder.length - 1];
        const btnsWithoutAvtiveOrder = newOrder.slice(1, newOrder.length - 1);

        const tl = new TimelineLite();
        tl.addLabel('start')
            .add(
                setInRowAnimation(buttons, btnsWithoutAvtiveOrder, wrapper),
                'start',
            )
            .add(setAsActiveAnimation(buttons[activeBtnIndex]), 'start')
            .add(
                removeFromActivePositionAnimation(
                    wrapper,
                    buttons[lastBtnIndex],
                ),
                'start+=0.3',
            );
    };

    const setButtonAsActiveAnimation = activeIndex => {
        const { buttons } = getSetupNodes();
        return setAsActiveAnimation(buttons[activeIndex]);
    };

    const changeActiveButtonIndex = actvie => {
        const newOrder = setOrderByNewActive(btnsOrder, actvie);
        setButtonsOrder(newOrder);
        return newOrder;
    };

    useEffect(() => {
        if (prevActive === null) {
            // init animation
            const { buttons } = getSetupNodes();
            const tl = new TimelineLite();

            setButtonsOrder(buttons.map((btn, i) => i));

            tl.add(introAnimation(buttons)).add(
                setButtonAsActiveAnimation(active),
                '-=0.4',
            );
        } else {
            const newOrder = changeActiveButtonIndex(active);
            setButtonsPositionByOrder(newOrder);
        }
    }, [active]);

    return (
        <ButtonsWrapperSC ref={wrapperRef} active={active}>
            {children}
        </ButtonsWrapperSC>
    );
};

ButtonsWrapper.propTypes = {
    children: PropTypes.node,
};
ButtonsWrapper.defaultProps = {
    children: null,
};
