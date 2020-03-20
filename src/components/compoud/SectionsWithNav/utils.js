import { Children, cloneElement } from 'react';

export const elementsByOrder = (elements, orders) => {
    if (orders.length) return orders.map(orderIndex => elements[orderIndex]);
    return elements;
};

export const separatedChildrenWithButtonEvent = (
    children,
    onButtonClick,
    buttonsClass,
) => {
    return Children.toArray(children).reduce(
        (reactElements, child, i) => {
            const componentName =
                child.props.SectionWithNavComponent ||
                child.type.name ||
                child.type.displayName;
            if (componentName === 'Button') {
                const buttonWithOnClick = cloneElement(child, {
                    onClick: () => onButtonClick(i),
                    className: buttonsClass,
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
