import React from 'react';
import styled from 'styled-components';
import { useChangePage } from '../utils';

import ListWrapper from './ListWrapper';

const Wrapper = styled.nav`
    position: fixed;
    width: 100%;
    height: 100px;
    bottom: 0%;
    left: 0%;
    z-index: 14;
`;

const HorizontalMenu = () => {
    const changePage = useChangePage();

    return (
        <Wrapper>
            <ListWrapper changePage={changePage} />
        </Wrapper>
    );
};

export default HorizontalMenu;