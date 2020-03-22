import gsap from 'gsap';

export const showMenu = element => {
    if (!element) return Error('element is required');
    const tl = new gsap.timeline();

    tl.to(element, 0.3, { y: 0 });

    return tl;
};
export const activeLinkAnimation = element => {
    if (!element) return Error('element is required');
    const tl = new gsap.timeline();

    tl.to(element, 0.4, { opacity: 0, y: 20 })
        .set(element, { y: '-34%', scale: 0.6 })
        .to(element, 0.6, { scale: 1, opacity: 1, delay: 0.2 });

    return tl;
};
export const hideLinkAnimation = element => {
    if (!element) return Error('element is required');
    const tl = new gsap.timeline();

    tl.to(element, 0.5, { y: 0 }, 'change');

    return tl;
};
export const hideAndShowAnimation = element => {
    if (!element) return Error('element is required');
    const tl = new gsap.timeline();

    tl.to(element, 0.2, { opacity: 0, y: 20 }).to(element, 0.2, {
        opacity: 1,
        y: 0,
        delay: 0.4,
    });

    return tl;
};

export const selectActiveLinkAnimation = (links, activeIndex) => {
    if (!links.length) return Error('links are required');
    links.forEach((link, index) => {
        if (index === activeIndex) return activeLinkAnimation(link.children);
        return hideLinkAnimation(link.children);
    });
    return null;
};
export const wavePositionAnimation = (wave, transformX) => {
    if (!wave) return Error('wave is required');
    const tl = new gsap.timeline();

    tl.to(wave, 1.1, { x: transformX });

    return tl;
};

export const changeActiveLinkAnim = (wave, links, pageName) => {
    if (!wave || !links.length || !pageName) {
        return Error('Something gone wrong: horizontal-menu animation');
    }

    const tl = new gsap.timeline();
    const aName = 'changeActiveLinkAnim';
    tl.addLabel(aName);

    const linkWidth = links[0].offsetWidth;
    if (pageName === 'portfolio') {
        tl.add(wavePositionAnimation(wave, 0), aName).add(
            selectActiveLinkAnimation(links, 1),
            aName,
        );
    } else if (pageName === 'projects') {
        tl.add(wavePositionAnimation(wave, -linkWidth), aName).add(
            selectActiveLinkAnimation(links, 0),
            aName,
        );
    } else if (pageName === 'contact') {
        tl.add(wavePositionAnimation(wave, linkWidth), aName).add(
            selectActiveLinkAnimation(links, 2),
            aName,
        );
    }

    return tl;
};
