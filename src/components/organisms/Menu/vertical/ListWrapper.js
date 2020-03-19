import React, { useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { List } from 'components/atoms';

import Constants from 'config/Constants';
import ListElement from './ListElement/ListElement';
import ListElementWithMultiLinks from './ListElement/ListElementWithMultiLinks';
import { changeActiveLinkAnim } from './anim';

const ListWrapper = ({ changePage, pdfs }) => {
    const wrapperRef = useRef(null);
    const lang = useSelector(({ language }) => language);
    const { entryPage } = useSelector(({ Pages }) => Pages);

    const getLinks = useCallback(wrapper => {
        return [...wrapper.current.childNodes]
            .slice(0, 3)
            .map(link => link.children[0]);
    }, []);

    const handleChangePage = (e, pageName) => {
        e.preventDefault();

        const links = getLinks(wrapperRef);
        changeActiveLinkAnim(links, pageName);
        changePage(pageName, true);
    };

    useEffect(() => {
        const links = getLinks(wrapperRef);
        changeActiveLinkAnim(links, entryPage);
    }, []);

    return (
        <List ref={wrapperRef}>
            <ListElement
                href={`#${Constants[lang].PATHS.portfolio}`}
                onClick={e => handleChangePage(e, 'portfolio')}
            >
                {Constants[lang].PATHS.portfolio}
            </ListElement>
            <ListElement
                href={`#${Constants[lang].PATHS.projects}`}
                onClick={e => handleChangePage(e, 'projects')}
            >
                {Constants[lang].PATHS.projects}
            </ListElement>
            <ListElement
                href={`#${Constants[lang].PATHS.contact}`}
                onClick={e => handleChangePage(e, 'contact')}
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
    changePage: PropTypes.func.isRequired,
    pdfs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ListWrapper;
