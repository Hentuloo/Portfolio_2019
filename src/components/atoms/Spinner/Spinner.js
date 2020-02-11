import React from 'react';
import PropType from 'prop-types';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`;

export const Circle = styled.div`
    position: absolute;
    width: 12px;
    height: 12px;
    left: calc(50% - 6px);
    top: calc(50% - 6px);
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.gray[0]};
`;

export const InnerAtoms = styled.div`
    position: absolute;
    animation: ${rotate} 2.5s linear infinite reverse;

    ${Circle} {
        width: 70px;
        height: 70px;
        left: calc(50% - 35px);
        top: calc(50% - 35px);

        &:nth-of-type(1) {
            transform: translate(-30px, 0px);
        }
        &:nth-of-type(2) {
            transform: translate(30px, 0px);
        }
    }
`;
export const OuterAtoms = styled.div`
    position: absolute;
    width: 200px;
    height: 200px;
    left: calc(50% - 100px);
    top: calc(50% - 100px);
    border: 1px solid ${({ theme }) => theme.color.gray[0]};
    border-radius: 50%;

    ${Circle} {
        left: calc(0px - 5px);
        transform-origin: 105px 5px;
        animation: ${rotate} 3s cubic-bezier(0.98, 0.43, 0.67, 0.81) infinite;
    }
`;

export const Wrapper = styled.div`
    position: relative;
    display: block;
`;

export const Spiner = ({ className }) => {
    return (
        <Wrapper className={className}>
            <InnerAtoms>
                <Circle />
                <Circle />
            </InnerAtoms>
            <OuterAtoms>
                <Circle />
            </OuterAtoms>
        </Wrapper>
    );
};

export const WhiteSpiner = styled(Spiner)`
    ${Circle} {
        background-color: white;
    }
    ${OuterAtoms} {
        border-color: white;
    }
`;

Spiner.propTypes = {
    className: PropType.string,
};
Spiner.defaultProps = {
    className: '',
};
