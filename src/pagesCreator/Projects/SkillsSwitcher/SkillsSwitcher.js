import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { SectionsWithNav as SWN } from 'components/compoud';
import { Mountain, Charts, Box, Joystick } from 'components/atoms';

import Button from './Button';
import Section from './Section';

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 950px;
    margin: 29px auto;
    &::before {
        position: absolute;
        content: '';
        width: 90%;
        height: calc(100% - 70px);
        bottom: 0px;
        left: 50%;
        max-width: 950px;
        transform: translate(-50%, 0%);
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.35);

        @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
            height: calc(100% - 90px);
        }
    }
    ${SWN.ButtonSC} {
        cursor: none;
        outline: none;
    }
`;

const SkilsSwitcher = ({ data }) => {
    if (!data.length) return null;
    const { current } = useSelector(({ ActivePage }) => ActivePage);
    const lang = useSelector(({ language }) => language);
    const buttonComponents = useMemo(
        () => [Mountain, Charts, Box, Joystick],
        [],
    );

    return (
        <Wrapper>
            <SWN.Wrapper
                updateTrigger={lang}
                triggerInitAnimationDeps={[
                    initAnim => () => {
                        if (current === 'projects') {
                            setTimeout(() => initAnim(), 50);
                        }
                    },
                    current,
                ]}
            >
                {data.map(({ title }, index) => (
                    <Button
                        key={index}
                        Component={buttonComponents[index] || null}
                        title={title}
                    />
                ))}

                {data.map(({ type, content }, index) => (
                    <Section key={index} type={type} content={content} />
                ))}
            </SWN.Wrapper>
        </Wrapper>
    );
};

SkilsSwitcher.propTypes = {
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

export default SkilsSwitcher;
