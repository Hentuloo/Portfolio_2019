import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SectionsWithNav as SWN } from 'components/compoud';

const ImageWrapper = styled.div`
    svg {
        position: absolute;
        max-width: 80%;
        max-height: 80%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

// name have to be the same like in compoud element (in this case SWN.Button => Button)
const Button = ({ Component, index, ...props }) => {
    return (
        <SWN.Button
            name="Button"
            {...props}
            // render={({ active }) => (
            render={() => (
                <ImageWrapper>
                    <Component
                        tlSettings={{
                            // paused: current !== 'projects' || active !== index,
                            paused: true,
                        }}
                    />
                </ImageWrapper>
            )}
        />
    );
};
Button.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    Component: PropTypes.any.isRequired,
    index: PropTypes.number,
};
Button.defaultProps = {
    index: 0,
};

export default Button;
