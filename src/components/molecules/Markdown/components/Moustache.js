import styled, { css } from 'styled-components';

const Moustache = styled.span`
    ${({ currentPage }) =>
        currentPage === 'projects' &&
        css`
            display: none;
        `}
`;
export default Moustache;
