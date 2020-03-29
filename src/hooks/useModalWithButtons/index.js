import { useCallback, useEffect, useRef, useMemo } from 'react';
import gsap from 'gsap';
import { useThunkReducer } from 'hooks/useThunkReducer';
import reducer from './state/Reducer';
import { setOrderByNewActive } from './utils';

import {
    changeActive as changeActiveAction,
    setNewButtonsOrder as setNewButtonsOrderAction,
} from './state/Actions';

import {
    selectNewActiveButtonAnimation,
    triggerInitAnimation,
    introAnimation,
    hideElements,
} from './animations';

const defaultState = {
    active: 0,
    withAnim: true,
    updateOrder: false,
    rerenderCount: 0,
    btnsOrder: [],
};

export const useModalWithButtons = initState => {
    const [state, dispatch] = useThunkReducer(reducer, {
        ...defaultState,
        initState,
    });
    const throttledButtons = useRef(null);
    const buttonsWrapperRef = useRef({ children: [] });

    const buttons = useMemo(() => {
        return [...buttonsWrapperRef.current.children];
    }, [buttonsWrapperRef.current.children.length]);

    const changeActive = (newActive, triggerAnim, updateOrder) => {
        if (throttledButtons.current === null) {
            dispatch(changeActiveAction(newActive, triggerAnim, updateOrder));
            const timeoutId = setTimeout(() => {
                throttledButtons.current = null;
            }, 800);
            throttledButtons.current = timeoutId;
        }

        return null;
    };

    const resetButtons = useCallback(btns => {
        const tl = gsap.timeline();

        tl.add(hideElements(btns))
            .add(() => {
                changeActive(0, false, false);
                dispatch(setNewButtonsOrderAction(btns.map((btn, i) => i)));
            }, '+=0.2')
            .add(introAnimation(btns).duration(1.5), '-=0.1');

        return tl;
    }, []);

    useEffect(() => {
        if (state.active === null) return;
        if (buttons.length === 0) return;

        const newOrder = setOrderByNewActive(state.btnsOrder, state.active);

        if (state.updateOrder) dispatch(setNewButtonsOrderAction(newOrder));
        if (state.withAnim) selectNewActiveButtonAnimation(buttons, newOrder);
    }, [state.active, buttons.length]);

    useEffect(() => {
        const btns = [...buttonsWrapperRef.current.children];
        dispatch(setNewButtonsOrderAction(btns.map((_, i) => i)));
    }, []);

    const getButtonsProps = useCallback(
        index => ({
            onClick: () => {
                changeActive(index, true, true);
            },
        }),
        [],
    );
    return {
        ...state,
        throttledButtons,
        buttonsWrapperRef,
        buttons,
        changeActive,
        resetButtons,
        triggerInitAnimation: options =>
            triggerInitAnimation(buttons, state.btnsOrder, options),
        getButtonsProps,
    };
};
