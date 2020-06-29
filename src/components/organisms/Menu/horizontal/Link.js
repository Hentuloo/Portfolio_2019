import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TransitionLink from 'gatsby-plugin-transition-link';

const Wrapper = styled(TransitionLink)`
    position: relative;
    display: block;
    height: 100%;
`;

const IconWrapper = styled.div`
    position: absolute;
    width: 64%;
    max-height: 100%;
    bottom: -7%;
    left: 50%;
    margin: 0px auto;
    transform: translate(-50%, 0%);
`;
const Icon = styled.img`
    width: 100%;
`;

const LinkEl = ({ icon, to, ...props }) => {
    return (
        <Wrapper
            exit={{
                delay: 0.9,
            }}
            to={to}
            {...props}
        >
            <span className="sr-only">Projekty</span>
            <IconWrapper>
                <Icon src={icon} />
            </IconWrapper>
        </Wrapper>
    );
};
LinkEl.propTypes = {
    icon: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};

export default LinkEl;
