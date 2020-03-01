import { TimelineLite } from 'gsap';

export const introAnimation = el => {
    const tl = new TimelineLite();

    tl.to(el, 0.2, { x: '-100vw', y: '-50%', rotationZ: 40 }).to(el, 0.7, {
        rotationZ: 0,
        x: 0,
        y: 0,
        delay: 0.4,
    });

    return tl;
};

export const open = el => {
    const tl = new TimelineLite();

    tl.set(el, { y: '0%' }).to(el, 0.4, { y: '100%' });

    return tl;
};
