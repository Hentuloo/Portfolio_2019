import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Link, { LinkWrapper } from './Link';
import WithHoverEffects from './WithHoverEffects';

export const ListElementWrapper = styled.li`
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
    &:hover {
        ${LinkWrapper} {
            color: white;
        }
    }

    display: grid !important;
`;

const ListElement = ({ children, ...props }) => {
    return (
        <WithHoverEffects
            render={({ ListElementProps, LinkProps }) => (
                <ListElementWrapper {...ListElementProps}>
                    <Link {...LinkProps} {...props}>
                        {children}
                    </Link>
                </ListElementWrapper>
            )}
        />
    );
};

ListElement.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ListElement;
