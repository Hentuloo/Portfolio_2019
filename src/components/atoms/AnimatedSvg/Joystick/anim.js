import { TimelineLite, Back } from 'gsap';

export const moveAround = elements => {
    const tl = new TimelineLite();
    tl.set(elements, { transformOrigin: '25% 25%' });
    tl.staggerTo(
        elements,
        2.4,
        {
            rotation: 360,
            repeat: -1,
        },
        0.1,
    );
    return tl;
};
export const tickAnim = (elements, params) => {
    const tl = new TimelineLite();
    tl.to(elements, 0.5, {
        ...params,
        ease: Back.easeOut(1),
        repeat: -1,
        yoyo: true,
    });
    return tl;
};
