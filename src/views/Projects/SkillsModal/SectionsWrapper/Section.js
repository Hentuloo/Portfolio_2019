import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/organisms';

import { ParagraphTitle, Paragraph } from 'components/atoms';

const Section = ({ type, content, ...props }) => {
    if (type === 'plain-text') {
        return (
            <Modal.Section {...props}>
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
            </Modal.Section>
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
