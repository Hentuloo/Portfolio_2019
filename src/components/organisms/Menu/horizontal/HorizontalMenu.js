import React from 'react';
import styled from 'styled-components';
import { useChangePage } from '../utils';

import ListWrapper from './ListWrapper';

const Wrapperr = styled.nav`
    position: fixed;
    width: 100%;
    height: 100px;
    bottom: 0%;
    left: 0%;
    z-index: 14;
    ${({ theme }) => theme.breakPointMobileKeyboard} {
        display: none;
    }
`;

const HorizontalMenu = () => {
    const changePage = useChangePage();
    return (
        <Wrapperr>
            <ListWrapper changePage={changePage} />
        </Wrapperr>
    );
};

export default HorizontalMenu;
