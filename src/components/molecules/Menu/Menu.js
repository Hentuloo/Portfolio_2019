import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Constants from 'config/Constants';

import { useDispatch, useSelector } from 'react-redux';
import { changePage } from 'state/actions/activePageActions';

const ListElement = styled.li`
    display: block;
    flex-grow: 1;
    height: 100%;
    position: relative;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        flex-grow: 0;
        height: 25%;
        position: relative;
        &::before {
            position: absolute;
            top: 0%;
            content: '';
            width: 75%;
            height: 5px;
            background-color: black;
            border-radius: 25%;
        }
        &:last-of-type {
            &::after {
                position: absolute;
                bottom: 0%;
                content: '';
                width: 75%;
                height: 5px;
                background-color: black;
                border-radius: 25%;
            }
        }
    }

    &.hideMobile {
        display: none;
        @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
            display: block;
        }
    }

    a {
        position: absolute;
        text-decoration: none;
        width: 100%;
        height: 100%;
        font-size: ${({ theme }) => theme.font.s};
        text-align: center;
        line-height: 75px;
        color: ${({ theme }) => theme.black};
        text-transform: uppercase;
        @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
            line-height: 16.5vh;
            text-align: left;
            padding-left: 10px;
            font-family: ${({ theme }) => theme.font.second};
            font-weight: ${({ theme }) => theme.font.light};
        }
        @media (min-width: ${({ theme }) => theme.breakPointLarge}) {
            font-size: ${({ theme }) => theme.font.m};
            line-height: 16.5vh;
        }
        &:hover {
            span {
                text-decoration: underline;
            }
        }
        &:nth-of-type(2) {
            width: auto;
            height: auto;
            transform: translate(93%, 2%);
            font-size: ${({ theme }) => theme.font.mini};
            padding-right: 25px;
            z-index: 10;
            @media (min-width: ${({ theme }) => theme.breakPointLarge}) {
                transform: translate(103%, 2%);
            }
            &:hover {
                text-decoration: underline;
            }
        }
        span {
            position: absolute;
            font-size: ${({ theme }) => theme.font.mini};
            transform: translate(20%, 2.5%);
        }
    }
`;
const MenuWrapper = styled.nav`
  position: fixed;
  display:block;
  width: 100vw;
  height: 70px;
  bottom: 0%;
  left: 0%;
  background-color: ${({ theme }) => theme.redThird};
  z-index: 10;
  @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
    position: fixed;
    top: 0%;
    left: 0%;
    width: 150px;
    height: 100vh;
    background-color: transparent;
    margin-left: 8px;
  }

  &:before {
    content: '';
    position: absolute;
    width: 33.3333vw;
    height: 100%;
    top: 0%;
    left: 0%;
    background-color: ${({ theme }) => theme.redSecondary};
    transition: transform 0.8s ease-in-out;

    ${({ currentPage }) => {
        switch (currentPage) {
            case 'portfolio':
                return css`
                    transform: translateX(0vw);
                `;
            case 'projects':
                return css`
                    transform: translateX(33.3333vw);
                `;
            case 'contact':
                return css`
                    transform: translateX(66.6666vw);
                `;
            default:
                return css`
                    transform: translateX(0vw);
                `;
        }
    }}
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
      width: 120%;
      height: 60px;
      left: -13%;
      transform: translateY(-50%);
      background-color: ${({ theme }) => theme.graySecond};
      border-radius:5px;
       ${({ currentPage }) => {
           switch (currentPage) {
               case 'portfolio':
                   return css`
                       transform: translateY(13vh);
                   `;
               case 'projects':
                   return css`
                       transform: translateY(29vh);
                   `;
               case 'contact':
                   return css`
                       transform: translateY(45vh);
                   `;
               default:
                   return css`
                       transform: translateX(13vh);
                   `;
           }
       }}
    }
    @media (min-width: ${({ theme }) => theme.breakPointLarge}) {
      width: 140%;
    }
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    margin: 0px;
    padding: 0px;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
      position: relative;
      flex-direction: column;
      flex-wrap: nowrap;
      height: 80%;
      width: 120px;
      top: 48%;
      transform: translateY(-50%);
    }
  }
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
        <MenuWrapper className={className} currentPage={current}>
            <ul>
                <ListElement>
                    <a
                        href={`#${Constants[lang].PATHS.portfolio}`}
                        className={current === 'portfolio' ? 'active' : ''}
                        onClick={e => onChangePage(e, 'portfolio')}
                    >
                        {Constants[lang].PATHS.portfolio}
                    </a>
                </ListElement>
                <ListElement>
                    <a
                        href={`#${Constants[lang].PATHS.projects}`}
                        className={current === 'projects' ? 'active' : ''}
                        onClick={e => onChangePage(e, 'projects')}
                    >
                        {Constants[lang].PATHS.projects}
                    </a>
                </ListElement>
                <ListElement>
                    <a
                        href={`#${Constants[lang].PATHS.contact}`}
                        className={current === 'contact' ? 'active' : ''}
                        onClick={e => onChangePage(e, 'contact')}
                    >
                        {Constants[lang].PATHS.contact}
                    </a>
                </ListElement>
                <ListElement className="hideMobile">
                    <a
                        href="https://github.com/Hentuloo?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Github
                    </a>
                </ListElement>
                <ListElement className="hideMobile">
                    <a
                        href={pdfEng.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        CV<span>ENG</span>
                    </a>
                    <a href={pdf.url} target="_blank" rel="noopener noreferrer">
                        |pl
                    </a>
                </ListElement>
            </ul>
        </MenuWrapper>
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
