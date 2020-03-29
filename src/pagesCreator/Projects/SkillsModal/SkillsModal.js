import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { addCallback } from 'state/actions/pagesActions';
import { useModalWithButtons } from 'hooks/useModalWithButtons';
import { Modal } from 'components/organisms';
import ButtonsWrapper from './ButtonsWrapper/ButtonsWrapper';
import SectionsWrapper from './SectionsWrapper/SectionsWrapper';

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 950px;
    margin: 60px auto 30px;
    padding-bottom: 15px;
    overflow: hidden;
    ${({ theme }) => theme.breakPointMobile} {
        margin: 20px auto 30px;
    }
`;

const SkillsModal = ({ data }) => {
    if (!data.length) return null;
    const { entryPage, entryPageLoaded } = useSelector(({ Pages }) => Pages);
    const [pauseButtonAnim, setPauseButtonAnim] = useState(true);
    const {
        active,
        btnsOrder,
        buttonsWrapperRef,
        resetButtons,
        getButtonsProps,
        triggerInitAnimation,
    } = useModalWithButtons({ active: 0 });

    const dispatch = useDispatch();

    useEffect(() => {
        const triggerSkillsSwitcherAnimation = pageName => {
            if (pageName === 'projects') {
                resetButtons([...buttonsWrapperRef.current.children]).add(
                    () => {
                        setPauseButtonAnim(false);
                    },
                    '+=0.5',
                );
            } else {
                setPauseButtonAnim(true);
            }
        };
        dispatch(addCallback(triggerSkillsSwitcherAnimation));
    }, []);

    useEffect(() => {
        // Animation when user entry page on projects
        if (!entryPage || entryPage !== 'projects' || !entryPageLoaded) return;
        triggerInitAnimation(
            [...buttonsWrapperRef.current.children],
            btnsOrder,
            { delay: 0.5 },
        );
    }, [entryPage, entryPageLoaded]);

    return (
        <Wrapper>
            <Modal.Wrapper>
                <ButtonsWrapper
                    ref={buttonsWrapperRef}
                    getButtonsProps={getButtonsProps}
                    data={data}
                    activeIndex={active}
                    pauseButtonAnim={pauseButtonAnim}
                />
                <SectionsWrapper data={data} activeIndex={active} />
                <Modal.BackgroundImage />
            </Modal.Wrapper>
        </Wrapper>
    );
};

SkillsModal.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string,
            title: PropTypes.string,
            content: PropTypes.arrayOf(
                PropTypes.shape({
                    title: PropTypes.string,
                    paragraph: PropTypes.string,
                }),
            ),
        }),
    ).isRequired,
};

export default SkillsModal;
