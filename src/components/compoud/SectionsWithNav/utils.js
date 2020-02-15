import { Children, cloneElement } from 'react';

export const separatedChildrenWithButtonEvent = (children, onButtonClick) => {
    return Children.toArray(children).reduce(
        (reactElements, child, i) => {
            const componentName = child.type.name || child.type.displayName;
            if (componentName === 'Button') {
                const buttonWithOnClick = cloneElement(child, {
                    onClick: () => onButtonClick(i),
                });
                reactElements[0].push(buttonWithOnClick);
                return reactElements;
            }
            reactElements[1].push(child);
            return reactElements;
        },
        [[], []],
    );
};

export const setOrderByNewActive = (array, activeIndex) =>
    array.reduce((acc, value, index) => {
        if (index === 0) return [null, value];
        if (value !== activeIndex) {
            return [
                acc[0],
                ...acc.slice(1, acc.length - 1),
                value,
                acc[acc.length - 1],
            ];
        }
        return [value, ...acc.slice(1)];
    }, []);
