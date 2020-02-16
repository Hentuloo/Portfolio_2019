import { TimelineLite } from 'gsap';

export const flagAnim = el => {
    const tl = new TimelineLite();
    tl.set(el, { transformOrigin: '0px 30px' });
    tl.from(el.current, 3, { y: '32%' }).to(el, 3, {
        transformOrigin: '0px 40px',
        rotationZ: 360,
    });
    return tl;
};

export const cloudsAnim = clouds => {
    const durations = [14, 10, 12.2];
    const starts = [0, 2.4, 6];
    const tl = new TimelineLite();
    tl.set(clouds, {
        x: (i, t) => {
            return `-${t.getBoundingClientRect().width}`;
        },
    });
    clouds.forEach((cloud, i) => {
        tl.to(
            cloud,
            durations[i],
            {
                x: clouds[0].parentNode.getBoundingClientRect().width,
                repeat: -1,
            },
            starts[i],
        );
    });
    return tl;
};
export const plantsAnim = plants => {
    const tl = new TimelineLite();

    tl.set(plants, { transformOrigin: '50% 100%' });
    tl.staggerFromTo(
        plants,
        () => Math.random() + 0.2,
        { rotationZ: 10, repeat: -1, yoyo: true },
        { rotationZ: -10, repeat: -1, yoyo: true },
        () => Math.random(),
    );
    return tl;
};
