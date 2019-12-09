import { css } from 'styled-components';
import ShadowPhrase from './ShadowPhrase';

const SquarePhrase = css`
    &::after {
        ${ShadowPhrase};
        content: ${({ phrase }) => (phrase ? `'${phrase}'` : 'Hello')};
        transform-origin: left bottom;
        transform: rotate(-22deg) translate(-20vw, calc(0vh));
        @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
            transform: rotate(-41deg) translate(-27vw, calc(0vh));
        }
    }
`;

export default SquarePhrase;
