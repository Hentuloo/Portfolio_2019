import gsap, { Power2 } from 'gsap';

export const startGridAnimation = elements => {
    const tl = gsap.timeline();

    tl.set(elements, { scaleX: 0, transformOrigin: 'left 50%' }).staggerTo(
        elements,
        0.7,
        { scaleX: 1, ease: Power2.easeInOut },
        0.07,
    );

    return tl;
};
export const endGridAnimation = elements => {
    const tl = gsap.timeline();
    tl.set(elements, {
        transformOrigin: 'right 50%',
    }).staggerTo(
        elements,
        0.7,
        { scaleX: 0, ease: Power2.easeInOut, delay: 0.4 },
        0.07,
    );
    return tl;
};
