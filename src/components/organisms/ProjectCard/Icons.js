import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GraphImg from 'graphcms-image';

const Wrapper = styled.div`
    position: relative;
    display: flex;
    min-height: 40px;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    justify-content: flex-start;
    align-content: flex-start;
    padding: 0px 10px;
`;

const Description = styled.span`
    position: absolute;
    bottom: 0%;
    left: 50%;
    padding: 6px 10px;
    transform: translate(-50%, 180%);
    border-radius: 5px;
    white-space: nowrap;
    font-size: ${({ theme }) => theme.font.xxxs};
    z-index: 7;
    opacity: 0;
    background-color: ${({ theme }) => theme.color.gray[1]};

    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        transform: translate(-50%, 190%);
    }
`;

const Icon = styled.div`
    position: relative;
    width: 25px;
    height: 25px;
    margin: 2px 2px;
    cursor: none;

    &:hover ${Description} {
        opacity: 1;
    }

    div {
        width: 25px;
        height: 25px;
    }

    img {
        width: 100%;
    }
`;

const Icons = ({ technologies }) => {
    return (
        <Wrapper>
            {technologies.map(e => (
                <Icon key={e.id}>
                    <GraphImg image={e} alt={e.fileName} maxWidth={100} />
                    <Description>{e.title}</Description>
                </Icon>
            ))}
        </Wrapper>
    );
};

Icons.propTypes = {
    technologies: PropTypes.arrayOf(Object).isRequired,
};

export default Icons;
