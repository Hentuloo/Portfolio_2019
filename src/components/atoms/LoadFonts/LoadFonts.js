import FontFaceObserver from 'fontfaceobserver';

const Fonts = isLoaded => {
    const link = document.createElement('link');
    link.href =
        'https://fonts.googleapis.com/css?family=Baloo+Tamma|Roboto+Mono&display=swap';
    link.rel = 'stylesheet';

    document.head.appendChild(link);

    const font = new FontFaceObserver('Baloo Tamma');

    return font.load().then(isLoaded);
};

export default Fonts;
