import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { List } from 'components/atoms';

import Constants from 'config/Constants';
import ListElement from './ListElement/ListElement';
import ListElementWithMultiLinks from './ListElement/ListElementWithMultiLinks';

const ListWrapper = ({ changePage, pdfs }) => {
    const {
        ActivePage: { current },
        lang,
    } = useSelector(({ ActivePage, language }) => ({
        lang: language,
        ActivePage,
    }));

    return (
        <List currentPage={current}>
            <ListElement
                href={`#${Constants[lang].PATHS.portfolio}`}
                onClick={e => changePage(e, 'portfolio')}
                active={current === 'portfolio'}
            >
                {Constants[lang].PATHS.portfolio}
            </ListElement>
            <ListElement
                href={`#${Constants[lang].PATHS.projects}`}
                onClick={e => changePage(e, 'projects')}
                active={current === 'projects'}
            >
                {Constants[lang].PATHS.projects}
            </ListElement>
            <ListElement
                href={`#${Constants[lang].PATHS.contact}`}
                onClick={e => changePage(e, 'contact')}
                active={current === 'contact'}
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
