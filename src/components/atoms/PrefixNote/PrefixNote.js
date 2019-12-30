import styled from 'styled-components';

export const PrefixNote = styled.span`
    position: absolute;
    right: 2%;
    top: 0%;
    font-family: ${({ theme }) => theme.font.second};
    font-size: ${({ theme }) => theme.font.xxxs};
    color: ${({ theme }) => theme.grayDark};
    text-transform: uppercase;
`;
