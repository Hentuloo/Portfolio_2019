import styled from 'styled-components';

export const SectionsWrapper = styled.div`
    &::before {
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        bottom: 0px;
        left: 50%;
        max-width: 950px;
        transform: translate(-50%, 0%);
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.35);
    }
`;
