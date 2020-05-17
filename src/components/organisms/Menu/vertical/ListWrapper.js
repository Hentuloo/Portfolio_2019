import React, { useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { List } from 'components/atoms';
import Constants from 'config/Constants';
import { getViewNameByUrl } from 'config/utils';
import ListElement from './ListElement/ListElement';
import ListElementWithMultiLinks from './ListElement/ListElementWithMultiLinks';
import { changeActiveLinkAnim } from './anim';

const ListWrapper = ({ pdfs, lang }) => {
    const wrapperRef = useRef(null);

    const getLinks = useCallback(wrapper => {
        return [...wrapper.current.childNodes]
            .slice(0, 3)
            .map(link => link.children[0]);
    }, []);

    useEffect(() => {
        const links = getLinks(wrapperRef);
        changeActiveLinkAnim(links, getViewNameByUrl());
    }, []);

    const hanldeChangePage = pageName => {
        const links = getLinks(wrapperRef);
        changeActiveLinkAnim(links, pageName);
    };
    return (
        <List ref={wrapperRef}>
            <ListElement
                onClick={() =>
                    hanldeChangePage(Constants[lang].PATHS.portfolio)
                }
                to={`${Constants[lang].PATHS.root}`}
            >
                {Constants[lang].PATHS.portfolio}
            </ListElement>
            <ListElement
                onClick={() => hanldeChangePage(Constants[lang].PATHS.projects)}
                to={`/${Constants[lang].PATHS.projects}`}
            >
                {Constants[lang].PATHS.projects}
            </ListElement>
            <ListElement
                onClick={() => hanldeChangePage(Constants[lang].PATHS.contact)}
                to={`/${Constants[lang].PATHS.contact}`}
            >
                {Constants[lang].PATHS.contact}
            </ListElement>
            <ListElement
                href="https://github.com/Hentuloo?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
            >
                Github
            </ListElement>
            <ListElementWithMultiLinks
                target="_blank"
                rel="noopener noreferrer"
                render={({ LinkElement, linkElementProps }) => (
                    <div>
                        CV
                        <LinkElement href={pdfs[0]} {...linkElementProps}>
                            pl|
                        </LinkElement>
                        <LinkElement href={pdfs[1]} {...linkElementProps}>
                            eng
                        </LinkElement>
                    </div>
                )}
            ></ListElementWithMultiLinks>
        </List>
    );
};

ListWrapper.propTypes = {
    lang: PropTypes.string.isRequired,
    pdfs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ListWrapper;
