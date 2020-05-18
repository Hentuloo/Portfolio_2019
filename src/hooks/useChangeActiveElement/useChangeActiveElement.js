import { useRef, useEffect } from 'react';
import usePagination from 'hooks/usePagination';
import gsap from 'gsap';
import { usePrevious } from 'hooks/useModalWithButtons/usePrevious';

export const useChangeActiveElement = () => {
    const parentRef = useRef({ children: null });
    const { onNextPage, onPreviousPage, currentPage } = usePagination({
        items: parentRef.current.children || [[], [], []],
        itemsPerPage: 1,
    });
    const previousCurrent = usePrevious(currentPage || null);
    useEffect(() => {
        const elements = [...parentRef.current.children];

        elements.forEach((node, index) => {
            if (index === 0) {
                gsap.set(elements[0], { opacity: 1 });
                return;
            }
            gsap.set(node, { x: 100 });
        });
    }, []);
    useEffect(() => {
        const elements = [...parentRef.current.children];
        if (!elements) return;
        if (previousCurrent === undefined) return;

        const isNext = currentPage > previousCurrent;
        gsap.to(elements[previousCurrent - 1], {
            opacity: 0,
            x: isNext ? '-=100' : '+=100',
        });
        gsap.to(elements[currentPage - 1], {
            opacity: 1,
            x: isNext ? '-=100' : '+=100',
        });
    }, [currentPage]);

    return { parentRef, next: onNextPage, prev: onPreviousPage };
};
