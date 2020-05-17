import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';

import { useWindowSize } from 'hooks/useWindowSize';
import { usePdfLinks } from 'api/getPdf.js';
import { useSelector } from 'react-redux';
import VerticalMenu from './vertical/VerticalMenu';
import HorizontalMenu from './horizontal/HorizontalMenu';

const Menu = ({ showContent }) => {
    const currentLang = useSelector(({ language }) => language);
    const [isMobile, setIsMobile] = useState(undefined);
    const { width } = useWindowSize();
    const pdfs = usePdfLinks();

    useEffect(() => {
        if (width <= 769 || width === undefined) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }, [width]);

    if (isMobile === undefined) return null;
    if (isMobile)
        return (
            <HorizontalMenu
                currentLang={currentLang}
                showContent={showContent}
            />
        );

    return <VerticalMenu {...pdfs} currentLang={currentLang} />;
};

export default memo(Menu);

Menu.propTypes = {
    showContent: PropTypes.bool.isRequired,
};
