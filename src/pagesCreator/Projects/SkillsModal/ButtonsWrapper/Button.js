import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'components/organisms';

const ButtonsWrapper = ({ children, ...props }) => {
    return (
        <Modal.Button name="Button" {...props}>
            {children}
        </Modal.Button>
    );
};
ButtonsWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ButtonsWrapper;
