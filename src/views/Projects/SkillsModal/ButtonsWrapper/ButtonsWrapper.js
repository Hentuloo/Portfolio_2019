import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/organisms';

import { Mountain, Charts, Box, Joystick } from 'components/atoms';
import Button from './Button';
import AnimatedSvg from './AnimatedSvg';

const ButtonsWrapper = forwardRef(
    ({ getButtonsProps, data, activeIndex }, ref) => {
        const [frontEnd, backEnd, Other, NowSoon] = data;
        return (
            <Modal.ButtonsWrapper ref={ref}>
                <Button title={frontEnd.title} {...getButtonsProps(0)}>
                    <AnimatedSvg
                        Component={Mountain}
                        paused={activeIndex !== 0}
                    />
                </Button>
                <Button title={backEnd.title} {...getButtonsProps(1)}>
                    <AnimatedSvg
                        Component={Charts}
                        paused={activeIndex !== 1}
                    />
                </Button>
                <Button title={Other.title} {...getButtonsProps(2)}>
                    <AnimatedSvg Component={Box} paused={activeIndex !== 2} />
                </Button>
                <Button title={NowSoon.title} {...getButtonsProps(3)}>
                    <AnimatedSvg
                        Component={Joystick}
                        paused={activeIndex !== 3}
                    />
                </Button>
            </Modal.ButtonsWrapper>
        );
    },
);

ButtonsWrapper.propTypes = {
    getButtonsProps: PropTypes.func.isRequired,
    activeIndex: PropTypes.number.isRequired,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string.isRequired,
            content: PropTypes.arrayOf(
                PropTypes.shape({
                    title: PropTypes.string,
                    paragraph: PropTypes.string,
                }),
            ).isRequired,
        }),
    ).isRequired,
};

export default memo(ButtonsWrapper);
