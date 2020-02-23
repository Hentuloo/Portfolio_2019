import { TimelineLite } from 'gsap';

export const activeElementAnimation = element => {
    const tl = new TimelineLite();

    tl.to(element, 0.3, { opacity: 0, y: 20 })
        .set(element, { y: '-34%', scale: 0.6 })
        .to(element, 0.4, { scale: 1, opacity: 1, delay: 0.1 });

    return tl;
};
export const hideAndShowAnimation = element => {
    const tl = new TimelineLite();

    tl.to(element, 0.2, { opacity: 0, y: 20 }).to(element, 0.2, {
        opacity: 1,
        y: 0,
        delay: 0.4,
    });

    return tl;
};
