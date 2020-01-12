import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Constants from 'config/Constants';

import { useDispatch, useSelector } from 'react-redux';
import { changePage } from 'state/actions/activePageActions';
import { List } from 'components/atoms';

import { usePdfLinks } from 'api/getPdf.js';
import wave from 'images/MenuWave.svg';
import ListElement from './ListElement';
import Link from './Link';

import { Wrapper, WaveImage } from './styles';

const Menu = ({ className }) => {
    const dispatch = useDispatch();

    const {
        ActivePage: { current },
        lang,
    } = useSelector(({ ActivePage, language }) => ({
        lang: language,
        ActivePage,
    }));

    const onChangePage = useCallback(
        (e, pageName) => {
            e.preventDefault();
            if (pageName === current) return;
            window.scrollTo(0, 0);
            window.history.pushState(
                {},
                null,
                `/${lang}/${Constants[lang].PATHS[pageName]}`,
            );
            dispatch(changePage(pageName));
        },
        [current],
    );

    const { pdf, pdfEng } = usePdfLinks();

    return (
        <Wrapper>
            <List className={className} currentPage={current}>
                <ListElement>
                    <Link
                        href={`#${Constants[lang].PATHS.portfolio}`}
                        onClick={e => onChangePage(e, 'portfolio')}
                        active={current === 'portfolio'}
                    >
                        {Constants[lang].PATHS.portfolio}
                    </Link>
                </ListElement>
                <ListElement>
                    <Link
                        href={`#${Constants[lang].PATHS.projects}`}
                        onClick={e => onChangePage(e, 'projects')}
                        active={current === 'projects'}
                    >
                        {Constants[lang].PATHS.projects}
                    </Link>
                </ListElement>
                <ListElement>
                    <Link
                        href={`#${Constants[lang].PATHS.contact}`}
                        onClick={e => onChangePage(e, 'contact')}
                        active={current === 'contact'}
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
                    <div>
                        <Link
                            attr={{
                                sensitivity: 0.4,
                            }}
                            href={pdfEng.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            CV<span>ENG</span>
                        </Link>
                        <Link
                            attr={{
                                sensitivity: 0.4,
                            }}
                            href={pdf.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span>|pl</span>
                        </Link>
                    </div>
                </ListElement>
                <WaveImage src={wave} role="presentation"></WaveImage>
            </List>
        </Wrapper>
    );
};
Menu.propTypes = {
    className: PropTypes.string,
};
Menu.defaultProps = {
    className: '',
};

export default Menu;
