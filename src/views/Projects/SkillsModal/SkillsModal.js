import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
    const { active, buttonsWrapperRef, getButtonsProps } = useModalWithButtons({
        active: 0,
    });

    return (
        <Wrapper>
            <Modal.Wrapper>
                <ButtonsWrapper
                    ref={buttonsWrapperRef}
                    getButtonsProps={getButtonsProps}
                    data={data}
                    activeIndex={active}
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
