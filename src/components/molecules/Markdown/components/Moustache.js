import styled, { css } from 'styled-components';

const Moustache = styled.span`
  ${({ pageType }) =>
    pageType === 'projects' &&
    css`
      display: none;
    `}
`;
export default Moustache;
