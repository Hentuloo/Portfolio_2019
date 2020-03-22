import React, { useState, useCallback, useEffect } from 'react';
import gsap from 'gsap';
import { Context } from '../Context';
import { setOrderByNewActive, elementsByOrder } from '../utils';

import {
    introAnimation,
    selectItemAnimation,
    hideElements,
} from '../Buttons/gsapAnimations';

export const connect = WrapperedComponent => {
    return props => {
        const buttonsClass = 'SWN-Button';

        const [paused, setPaused] = useState(true);
        const [rerenderCount, setRerenderCount] = useState(0);
        const [btnsOrder, setButtonsOrder] = useState([]);
        const [throttledButtons, setThrottledButtons] = useState(null);
        const [{ withAnim, active, updateOrder }, newActiveFn] = useState({
            active: null,
            withAnim: true,
            updateOrder: false,
        });
        const [generalTl] = useState(gsap.timeline());

        const setNewActive = (
            newActive,
            triggerAnim = true,
            triggerUpdateOrder = true,
        ) => {
            newActiveFn({
                active: newActive,
                withAnim: triggerAnim,
                updateOrder: triggerUpdateOrder,
            });
        };

        const getButtons = useCallback(
            () => [...document.querySelectorAll(`.${buttonsClass}`)],
            [],
        );

        const selectNewActiveButton = newOrder => {
            const elementsByNewOrder = elementsByOrder(getButtons(), newOrder);
            generalTl.add(selectItemAnimation(elementsByNewOrder));
        };

        const changeActive = (newActive, triggerAnim) => {
            if (throttledButtons === null) {
                setNewActive(newActive, triggerAnim);

                const timeoutId = setTimeout(() => {
                    setThrottledButtons(null);
                }, 800);

                setThrottledButtons(timeoutId);
            }
            return null;
        };

        const triggerInitAnimation = useCallback((buttons, order, options) => {
            const tl = gsap.timeline(options || {});

            const buttonsByOrder = elementsByOrder(buttons, order);
            tl.add(introAnimation(buttonsByOrder));

            return tl;
        }, []);

        const resetButtons = useCallback(() => {
            const tl = gsap.timeline();
            const buttons = getButtons();

            tl.add(hideElements(buttons))
                .add(() => {
                    changeActive(0, false, false);
                    setButtonsOrder(buttons.map((btn, i) => i));
                }, '+=0.2')
                .add(introAnimation(buttons).duration(1.5), '-=0.1');

            return tl;
        }, []);

        useEffect(() => {
            if (active === null) return;

            const newOrder = setOrderByNewActive(btnsOrder, active);

            if (updateOrder) setButtonsOrder(newOrder);
            if (withAnim) selectNewActiveButton(newOrder);
        }, [active]);

        useEffect(() => {
            const buttons = getButtons();
            setButtonsOrder(buttons.map((btn, i) => i));
        }, []);

        const contextValue = {
            active,
            btnsOrder,
            getButtons,
            setButtonsOrder,
            changeActive,
            resetButtons,
            rerender: () => setRerenderCount(rerenderCount + 1),
            rerenderDeps: rerenderCount,
            buttonsClass,
            paused,
            setPaused,
            triggerInitAnimation,
        };

        return (
            <Context.Provider value={contextValue}>
                <WrapperedComponent {...props} />
            </Context.Provider>
        );
    };
};
