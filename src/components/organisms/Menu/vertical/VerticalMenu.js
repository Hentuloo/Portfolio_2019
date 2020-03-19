import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useChangePageEffect } from 'hooks/useChangePageEffect';
import ListWrapper from './ListWrapper';

const Wrapper = styled.nav`
    position: fixed;
    width: 160px;
    height: 83vh;
    bottom: auto;
    left: 0%;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 9px;
    z-index: 25;
`;

const VerticalMenu = ({ pdfEng, pdf }) => {
    const onChangePage = useChangePageEffect();
    return (
        <Wrapper>
            <ListWrapper
                changePage={onChangePage}
                pdfs={[pdfEng.url, pdf.url]}
            />
        </Wrapper>
    );
};

VerticalMenu.propTypes = {
    pdfEng: PropTypes.shape({
        url: PropTypes.string,
    }),
    pdf: PropTypes.shape({
        url: PropTypes.string,
    }),
};
VerticalMenu.defaultProps = {
    pdfEng: { url: null },
    pdf: { url: null },
};

export default memo(VerticalMenu);
