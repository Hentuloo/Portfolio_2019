import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/organisms';
import Section from './Section';

const SectionsWrapper = ({ data, activeIndex }) => {
    return (
        <Modal.SectionsWrapper>
            {data.map(({ type, content }, index) => (
                <Section
                    key={index}
                    active={activeIndex === index}
                    type={type}
                    content={content}
                />
            ))}
        </Modal.SectionsWrapper>
    );
};

SectionsWrapper.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string.isRequired,
            content: PropTypes.arrayOf(
                PropTypes.shape({
                    title: PropTypes.string,
                    paragraph: PropTypes.string,
                }),
            ).isRequired,
        }),
    ).isRequired,
    activeIndex: PropTypes.number.isRequired,
};

export default memo(SectionsWrapper, (prev, next) => {
    return (
        prev.activeIndex === next.activeIndex &&
        prev.data[0].content[0].title === next.data[0].content[0].title
    );
});
