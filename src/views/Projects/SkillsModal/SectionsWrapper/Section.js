import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/organisms';

import { ParagraphTitle, Paragraph } from 'components/atoms';
import styled from 'styled-components';

const Wrapper = styled(Modal.Section)``;
const SecondTitle = styled(Paragraph)`
    margin-top: 18px;
`;

const Section = ({ type, content, ...props }) => {
    if (type === 'plain-text') {
        return (
            <Wrapper {...props}>
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
                            <SecondTitle as="h4" asTitle>
                                {title}
                            </SecondTitle>
                            <Paragraph>{paragraph}</Paragraph>
                        </Fragment>
                    );
                })}
            </Wrapper>
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
