import { TimelineLite } from 'gsap';

export const introAnimation = btnsNodes => {
    if (!btnsNodes.length) return null;
    const { parentNode } = btnsNodes[0];
    const tl = new TimelineLite();

    tl.set(btnsNodes, {
        opacity: 0,
        scale: 1,
        y: 0,
        x: parentNode.offsetWidth,
    });

    tl.staggerTo(btnsNodes, 0.6, {
        opacity: 1,
        x: (i, t) => {
            const ofset = -(t.offsetWidth * (btnsNodes.length - i));
            const margin = i * 3;
            return parentNode.offsetWidth + ofset + margin;
        },
        delay: 0.4,
    });

    return tl;
};

export const setInRowAnimation = (btnsNodes, orderArray, wrapper) => {
    const tl = new TimelineLite();

    orderArray.forEach((btnIndex, index) => {
        tl.to(
            btnsNodes[btnIndex],
            0.4,
            {
                y: 0,
                x: () => {
                    const ofset = -(
                        btnsNodes[0].offsetWidth *
                        (orderArray.length - index + 2)
                    );
                    const margin = (index - 2) * 3;
                    return (
                        wrapper.offsetWidth +
                        ofset +
                        margin +
                        btnsNodes[0].offsetWidth
                    );
                },
            },
            index * 0.15,
        );
    });

    return tl;
};

export const setAsActiveAnimation = button => {
    if (!button) return null;
    const tl = new TimelineLite();

    tl.to(button, 0.8, {
        x: '10%',
        y: button.offsetHeight / 1.7,
        scale: 2,
    });

    return tl;
};

export const removeFromActivePositionAnimation = (wrapper, button) => {
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
