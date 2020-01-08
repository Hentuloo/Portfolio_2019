import styled from 'styled-components';

export const PrefixNote = styled.span`
    position: absolute;
    right: 3%;
    top: 3px;
    font-family: ${({ theme }) => theme.font.second};
    font-size: ${({ theme }) => theme.font.xxxs};
    color: ${({ theme }) => theme.grayDark};
    text-transform: uppercase;
    z-index: 5;
`;
