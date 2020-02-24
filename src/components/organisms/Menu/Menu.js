import React, { useState, useEffect } from 'react';

import { useWindowSize } from 'hooks/useWindowSize';
import { usePdfLinks } from 'api/getPdf.js';
import VerticalMenu from './vertical/VerticalMenu';
import HorizontalMenu from './horizontal/HorizontalMenu';

const Menu = () => {
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
    if (isMobile) return <HorizontalMenu />;
    return <VerticalMenu {...pdfs} />;
};

export default Menu;
