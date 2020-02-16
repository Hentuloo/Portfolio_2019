import { TimelineLite } from 'gsap';

export const jumpingChartsAnim = elements => {
    const tl = new TimelineLite();

    tl.set(elements, { transformOrigin: '50% 100%' });

    elements.forEach(chart => {
        tl.to(
            chart,
            Math.random() + 0.6,
            {
                scaleY: 0.2,
                repeat: -1,
                yoyo: true,
            },

            Math.random() + 0.3,
        );
    });

    return tl;
};
export const rotatingRacksAnim = elements => {
    const tl = new TimelineLite();

    tl.set(elements, { transformOrigin: '50% 50%' });

    elements.forEach(rack => {
        tl.to(
            rack,
            Math.random() * 2 + 2,
            {
                rotation: 360,
                repeat: -1,
            },
            Math.random() + 0.3,
        );
    });
    return tl;
};
