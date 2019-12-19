import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Constants from 'config/Constants';

import { useDispatch, useSelector } from 'react-redux';
import { changePage } from 'state/actions/activePageActions';
import { List } from 'components/atoms';

import Wave from './Wave';

const Wrapper = styled.nav`
    position: relative;
    position: fixed;
    width: 100vw;
    height: 63px;
    bottom: 0%;
    left: 0%;
    z-index: 14;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        width: 160px;
        height: 83vh;
        bottom: auto;
        top: 50%;
        transform: translateY(-50%);
        margin-left: 9px;
    }
`;
const Link = styled.a`
    display: grid;
    width: 100%;
    height: 100%;
    padding-bottom: 10px;
    justify-items: center;
    align-items: center;
    text-decoration: none;
    color: ${({ theme }) => theme.black};
    z-index: 15;
    background-color: ${({ theme }) => theme.redThird};
    cursor: none;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        background-color: transparent;
    }
`;
const ListElement = styled.li`
    &:last-of-type {
        @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
            display: flex !important;
        }
        ${Link} {
            display: flex;
            justify-content: flex-end;

            &:nth-of-type(2) {
                justify-content: flex-start;
            }
            &:hover span {
                text-decoration: underline;
            }
        }

        span {
            padding-top: 9px;
            font-size: ${({ theme }) => theme.font.mini};
        }
    }

    ${({ hideMobile }) =>
        hideMobile &&
        css`
            display: none !important;
            @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
                display: grid !important;
            }
        `}
`;

const Menu = ({ data, className }) => {
    const dispatch = useDispatch();

    const {
        ActivePage: { current },
        Lang: { lang },
    } = useSelector(state => ({
        ActivePage: state.ActivePage,
        Lang: state.Lang,
    }));

    const onChangePage = (e, pageName) => {
        e.preventDefault();
        console.log(e);
        if (pageName === current) return;
        window.scrollTo(0, 0);
        window.history.pushState(
            {},
            null,
            `/${lang}/${Constants[lang].PATHS[pageName]}`,
        );
        dispatch(changePage(pageName));
    };

    const {
        portfolio: { mainPages },
    } = data;
    const { pdf, pdfEng } = mainPages[0];

    return (
        <Wrapper>
            <List className={className} currentPage={current}>
                <ListElement>
                    <Link
                        href={`#${Constants[lang].PATHS.portfolio}`}
                        onClick={e => onChangePage(e, 'portfolio')}
                    >
                        {Constants[lang].PATHS.portfolio}
                    </Link>
                </ListElement>
                <ListElement>
                    <Link
                        href={`#${Constants[lang].PATHS.projects}`}
                        onClick={e => onChangePage(e, 'projects')}
                    >
                        {Constants[lang].PATHS.projects}
                    </Link>
                </ListElement>
                <ListElement>
                    <Link
                        href={`#${Constants[lang].PATHS.contact}`}
                        onClick={e => onChangePage(e, 'contact')}
                    >
                        {Constants[lang].PATHS.contact}
                    </Link>
                </ListElement>
                <ListElement hideMobile>
                    <Link
                        href="https://github.com/Hentuloo?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Github
                    </Link>
                </ListElement>
                <ListElement hideMobile>
                    <Link
                        href={pdfEng.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        CV<span>ENG</span>
                    </Link>
                    <Link
                        href={pdf.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>|pl</span>
                    </Link>
                </ListElement>
            </List>
            <Wave />
        </Wrapper>
    );
};
Menu.propTypes = {
    className: PropTypes.string,
    data: PropTypes.objectOf(Object),
};
Menu.defaultProps = {
    data: null,
    className: '',
};

const withStaticQuery = Component => {
    return function componentWithQuery(...props) {
        return (
            <StaticQuery
                query={graphql`
                    {
                        portfolio {
                            mainPages {
                                pdf {
                                    url
                                }
                                pdfEng {
                                    url
                                }
                            }
                        }
                    }
                `}
                render={data => {
                    return <Component {...props[0]} data={data} />;
                }}
            />
        );
    };
};

export default withStaticQuery(Menu);
