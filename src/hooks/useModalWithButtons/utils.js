export const elementsByOrder = (elements, orders) => {
    if (orders.length) return orders.map(orderIndex => elements[orderIndex]);
    return elements;
};

export const setOrderByNewActive = (array, activeIndex) => {
    if (array[0] === activeIndex) return array;
    return array.reduce((acc, value, index) => {
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
};
