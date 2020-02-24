import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import WithHoverEffects from './WithHoverEffects';
import { ListElementWrapper } from './ListElement';
import Link, { LinkWrapper } from './Link';

const StyledListElementWrapper = styled(ListElementWrapper)`
    div {
        width: 100%;
        height: 100%;
        display: grid !important;
        grid-auto-flow: column;
        gap: 5px;
        align-content: center;
        text-align: right;
        grid-template-columns: 1fr 20% 20%;
    }
    ${LinkWrapper} {
        display: flex;
        justify-content: flex-end;
        margin-right: 30px;
        font-size: ${({ theme }) => theme.font.xxxs};
        padding: 0px;
        &:hover {
            text-decoration: underline;
        }
    }
`;

const ListElementWithMultiLinks = ({ render, ...props }) => {
    return (
        <WithHoverEffects
            render={({ ListElementProps, LinkProps }) => (
                <StyledListElementWrapper {...ListElementProps}>
                    {render({
                        LinkElement: Link,
                        linkElementProps: { ...LinkProps, ...props },
                    })}
                </StyledListElementWrapper>
            )}
        />
    );
};

ListElementWithMultiLinks.propTypes = {
    render: PropTypes.func.isRequired,
};

export default ListElementWithMultiLinks;
