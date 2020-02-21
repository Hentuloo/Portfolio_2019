import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { SectionsWithNav as SWN } from 'components/compoud';
import { ParagraphTitle, Paragraph } from 'components/atoms';

const StyledSection = styled(SWN.SectionSC)`
    ${Paragraph}:nth-child(3) {
        padding-top: 20px;
    }

    ${Paragraph}:nth-child(4) {
        padding-right: 30px;
    }
`;

const Section = ({ type, content, ...props }) => {
    if (type === 'plain-text') {
        return (
            <StyledSection {...props}>
                {content.map(({ title, paragraph }, index) => {
                    if (!(index % 2)) {
                        return (
                            <Fragment key={index}>
                                <ParagraphTitle>{title}</ParagraphTitle>
                                <Paragraph>{paragraph}</Paragraph>
                            </Fragment>
                        );
                    }
                    return (
                        <Fragment key={index}>
                            <Paragraph as="h4" asTitle>
                                {title}
                            </Paragraph>
                            <Paragraph>{paragraph}</Paragraph>
                        </Fragment>
                    );
                })}
            </StyledSection>
        );
    }
    return null;
};

Section.propTypes = {
    type: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            paragraph: PropTypes.string,
        }),
    ).isRequired,
};

export default Section;
