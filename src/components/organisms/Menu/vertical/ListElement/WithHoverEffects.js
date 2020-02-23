import React from 'react';
import PropTypes from 'prop-types';

import WithMouseMoodHandlers from 'providers/WithMouseMoodHandlers';
import WithMouseHover from 'providers/WithMouseHover';

const WithHoverEffects = ({ render }) => {
    return (
        <WithMouseMoodHandlers
            initialMood="normal"
            mood="black"
            render={({ getHandlers }) => (
                <WithMouseHover
                    gsapDelay={0.4}
                    attr={{
                        sensitivity: 0.4,
                        x: -20,
                        y: -5,
                    }}
                    render={({ listeners }) =>
                        render({
                            ListElementProps: getHandlers,
                            LinkProps: listeners,
                        })
                    }
                />
            )}
        />
    );
};
WithHoverEffects.propTypes = {
    render: PropTypes.func.isRequired,
};

export default WithHoverEffects;
