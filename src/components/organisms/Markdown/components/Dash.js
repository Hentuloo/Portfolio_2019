import styled, { css } from 'styled-components';

const Dash = styled.span`
    display: inline;

    ${({ currentPage, openDashLiteral, closedDashLiteral }) => {
        if (currentPage === 'portfolio') {
            if (openDashLiteral) {
                switch (openDashLiteral) {
                    case 1:
                        return css`
                            color: ${({ theme }) => theme.redFirst};
                        `;
                    case 2:
                        return css`
                            color: ${({ theme }) => theme.redSecondary};
                        `;
                    default:
                        return css``;
                }
            }
            if (closedDashLiteral) {
                switch (closedDashLiteral) {
                    case 1:
                        return css`
                            color: ${({ theme }) => theme.redFirst};
                        `;
                    case 2:
                        return css`
                            color: ${({ theme }) => theme.redSecondary};
                        `;
                    default:
                        return css``;
                }
            }
        } else if (currentPage === 'projects') {
            if (openDashLiteral) {
                switch (openDashLiteral) {
                    case 1:
                        return css`
                            display: none;
                            color: ${({ theme }) => theme.redFirst};
                            @media (min-width: ${({ theme }) =>
                                    theme.breakPointMobile}) {
                                display: inline-block;
                            }
                        `;
                    case 2:
                        return css`
                            position: absolute;
                            left: 1px;
                            color: ${({ theme }) => theme.redSecondary};
                            @media (min-width: ${({ theme }) =>
                                    theme.breakPointMobile}) {
                                position: relative;
                                padding-left: 17px;
                            }
                        `;
                    default:
                        return css``;
                }
            }
            if (closedDashLiteral) {
                switch (closedDashLiteral) {
                    case 1:
                        return css`
                            display: none;
                            color: ${({ theme }) => theme.redFirst};
                            @media (min-width: ${({ theme }) =>
                                    theme.breakPointMobile}) {
                                display: block;
                            }
                        `;
                    case 2:
                        return css`
                            position: absolute;
                            right: 2px;
                            color: ${({ theme }) => theme.redSecondary};
                            @media (min-width: ${({ theme }) =>
                                    theme.breakPointMobile}) {
                                position: relative;
                            }
                            &::after {
                                content: '';
                                position: absolute;
                                width: 80vw;
                                height: 1px;
                                right: 5vw;
                                bottom: 0%;
                                background-color: ${({ theme }) =>
                                    theme.redFirst};
                                opacity: 0.4;
                                @media (min-width: ${({ theme }) =>
                                        theme.breakPointMobile}) {
                                    display: none;
                                }
                            }
                        `;
                    default:
                        return css``;
                }
            }
        }
        return css``;
    }}
`;

export default Dash;
