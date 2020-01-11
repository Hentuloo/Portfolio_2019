import React from 'react';
import { useSelector } from 'react-redux';

import { WithMouseMove } from 'providers/WithMouseMove';
import { BackgroundView, Spiner, WhiteSpiner } from 'components/atoms';

const CustomBackgroundView = () => {
    const { current } = useSelector(state => state.ActivePage);

    if (current === 'portfolio') {
        return <BackgroundView>Hello</BackgroundView>;
    }
    return (
        <BackgroundView
            white={
                <WithMouseMove
                    gsapDelay={0.5}
                    attr={{
                        sensitivity: -0.1,
                    }}
                    render={() => <WhiteSpiner />}
                />
            }
            gray={
                <WithMouseMove
                    gsapDelay={0.5}
                    attr={{
                        sensitivity: -0.1,
                    }}
                    render={() => <Spiner />}
                />
            }
        />
    );
};

export default CustomBackgroundView;
