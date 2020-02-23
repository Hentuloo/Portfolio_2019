import React from 'react';

import { useWindowSize } from 'hooks/useWindowSize';
import { usePdfLinks } from 'api/getPdf.js';
import VerticalMenu from './vertical/VerticalMenu';
import HorizontalMenu from './horizontal/HorizontalMenu';

const Menu = () => {
    const { width } = useWindowSize();

    if (width <= 768 || width === undefined) return <HorizontalMenu />;

    const pdfs = usePdfLinks();
    return <VerticalMenu {...pdfs} />;
};

export default Menu;
