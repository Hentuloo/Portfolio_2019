const activeClass = 'active';

export const LinkRemoveActiveClass = link => {
    link.classList.remove(activeClass);
};

export const changeActiveLinkAnim = (links, pageName) => {
    if (!links.length || !pageName) {
        return Error('Something gone wrong: horizontal-menu animation');
    }

    links.forEach(link => LinkRemoveActiveClass(link));

    if (pageName === 'portfolio') {
        links[0].classList.add(activeClass);
    } else if (pageName === 'projects') {
        links[1].classList.add(activeClass);
    } else if (pageName === 'contact') {
        links[2].classList.add(activeClass);
    }
    return null;
};
