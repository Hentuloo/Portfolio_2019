import { TimelineLite } from 'gsap';

export const entryAnimation = elements => {
    if (!elements.length) return null;
    const { parentNode } = elements[0];
    const tl = new TimelineLite();
    tl.set(elements, {
        opacity: 0,
        scale: 1,
        y: 0,
        x: parentNode.offsetWidth,
    });

    tl.staggerTo(elements, 0.6, {
        opacity: 1,
        x: (i, t) => {
            const ofset = -(t.offsetWidth * (elements.length - i));
            const margin = i * 3;
            return parentNode.offsetWidth + ofset + margin;
        },
        delay: 0.4,
    });

    return tl;
};

export const setAsActiveAnimation = element => {
    if (!element) return null;

    const tl = new TimelineLite();
    tl.to(element, 0.8, {
        x: '10%',
        y: element.offsetHeight / 1.7,
        scale: 2,
    });

    return tl;
};

export const introAnimation = elements => {
    if (!elements.length) return null;

    const tl = new TimelineLite();
    tl.addLabel('start')
        .add(entryAnimation(elements), 'start')
        .add(setAsActiveAnimation(elements[0]), 'start+=0.6');

    return tl;
};

export const setInRowAnimation = elements => {
    if (!elements.length) return null;
    const wrapper = elements[0].parentNode;

    const wrapperWidth = wrapper.offsetWidth;
    const elementWidth = elements[0].offsetWidth;

    const tl = new TimelineLite();
    elements.forEach((btn, index) => {
        tl.to(
            btn,
            0.4,
            {
                y: 0,
                x: () => {
                    const ofset = -(
                        elementWidth *
                        (elements.length - index + 2)
                    );
                    const margin = (index - 2) * 3;
                    return wrapperWidth + ofset + margin + elementWidth;
                },
            },
            index * 0.15,
        );
    });

    return tl;
};

export const removeFromActivePositionAnimation = button => {
    if (!button) return null;
    const wrapper = button.parentNode;

    const tl = new TimelineLite();
    tl.to(button, 0.5, {
        scale: 0.3,
        opacity: 0,
    })
        .to(button, 0.04, {
            y: 0,
            x: wrapper.offsetWidth + 100,
        })
        .to(button, 0.4, {
            opacity: 1,
            scale: 1,
            x: (i, t) => {
                const ofset = -t.offsetWidth;
                const margin = i * 3;
                return wrapper.offsetWidth + ofset + margin;
            },
        });

    return tl;
};

export const selectItemAnimation = elements => {
    const activeEl = elements[0];
    const lastEl = elements[elements.length - 1];
    const restElements = elements.slice(1, elements.length - 1);

    const tl = new TimelineLite();
    tl.addLabel('start')
        .add(setInRowAnimation(restElements), 'start')
        .add(setAsActiveAnimation(activeEl), 'start')
        .add(removeFromActivePositionAnimation(lastEl), 'start+=0.3');

    return tl;
};
