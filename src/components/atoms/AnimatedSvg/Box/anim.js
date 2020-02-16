import { TimelineLite } from 'gsap';

export const swippingAnim = elemnts => {
    const tl = new TimelineLite({ repeatDelay: 0.4 });

    tl.staggerTo(
        elemnts,
        () => Math.random() + 0.5,
        { y: '-15%', yoyo: true, repeat: -1 },
        () => Math.random() + 0.1,
    );
    return tl;
};

export const ticketMove = element => {
    const tl = new TimelineLite();
    tl.set(element, { transformOrigin: '50% 50%' });

    tl.to(element, 1.3, {
        y: '14%',
        x: '1%',
        rotation: -188,
        yoyo: true,
        repeat: -1,
        repeatDelay: 2,
    });
    return tl;
};
