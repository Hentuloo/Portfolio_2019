import { TimelineLite, Bounce } from 'gsap';

export const introAnimation = el => {
    const tl = new TimelineLite();

    tl.to(el, 0.2, { x: '-100vw', y: '-50%', rotationZ: 40 }).to(el, 0.7, {
        rotationZ: 0,
        x: 0,
        y: 0,
        opacity: 1,
        delay: 0.4,
    });

    return tl;
};

export const closeLetter = el => {
    const tl = new TimelineLite();

    tl.fromTo(el, 0.4, { y: '0%' }, { y: '100%' });

    return tl;
};

export const showPureDoc = el => {
    const tl = new TimelineLite();

    tl.set(el, {
        visibility: 'visible',
        opacity: 0,
    }).to(el, 1.1, {
        opacity: 1,
        y: 0,
    });

    return tl;
};

export const showDocTitle = el => {
    const tl = new TimelineLite();

    tl.set(el, {
        visibility: 'visible',
        opacity: 0,
        x: -60,
    }).to(el, 0.4, {
        opacity: 1,
        x: 0,
        y: 0,
    });

    return tl;
};
export const showletterTitles = props => showDocTitle(props);

export const showDocText = el => {
    const tl = new TimelineLite();

    tl.set(el, {
        visibility: 'visible',
        opacity: 0,
        y: -40,
    }).staggerTo(
        el,
        0.4,
        {
            opacity: 1,
            y: 0,
        },
        0.1,
    );

    return tl;
};
export const hideDocumentIntoLetter = el => {
    const tl = new TimelineLite();

    tl.to(el, 0.4, {
        opacity: 0,
        y: '100%',
    });

    return tl;
};
export const showStamp = el => {
    if (!el) return null;
    const tl = new TimelineLite();

    tl.set(el, {
        visibility: 'visible',
        opacity: 0,
        scale: 2,
    }).to(el, 0.6, {
        opacity: 1,
        scale: 1,
    });

    return tl;
};
export const sendLetter = el => {
    const tl = new TimelineLite();

    tl.to(el, 1, {
        x: '100vw',
        y: '-100%',
        rotationZ: -40,
        opacity: 0,
        delay: 0.4,
    });

    return tl;
};
export const bellAnim = el => {
    const tl = new TimelineLite();

    tl.set(el, { transformOrigin: '50% 50%' })
        .fromTo(
            el,
            0.1,
            {
                rotationZ: 10,
                yoyo: true,
                repeat: 4,
                ease: Bounce.easeOut,
            },
            { rotationZ: -10 },
        )
        .to(el, 0.1, {
            rotationZ: 0,
            yoyo: true,
            repeat: 4,
        });

    return tl;
};
export const hideElement = el => {
    const tl = new TimelineLite();

    tl.fromTo(
        el,
        0.1,
        {
            opacity: 1,
        },
        {
            opacity: 0,
        },
    );

    return tl;
};
