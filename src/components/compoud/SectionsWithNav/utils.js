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
