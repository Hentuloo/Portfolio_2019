export const theme = {
    color: {
        black: ['rgb(68,68,68)'],
        white: ['rgb(255,255,255)'],
        gray: [
            'rgb(225,224,224)',
            'rgb(235,235,235)',
            'rgb(198, 194, 194)',
            'rgb(123,123,123)',
            '#454545',
            'rgba(235,235,235,0.2)',
        ],
        brand: [
            'rgb(215,108,108)',
            'rgba(215,108,108,50%)',
            'rgb(220,166,166)',
        ],
    },

    groupsColors: [
        'rgb(211, 80, 130)', // róż
        'rgb(197, 149, 0)', // pomarańcz
        'rgb(0, 99, 192)', // niebieski
        'rgb(66, 47, 48)', // brown
        'rgb(88, 170, 68)', // green
        'rgb(188, 11, 11)', // czerwony
        'rgb(104, 101, 101)', // szary
        'rgb(168, 36, 175)', // fiolet
    ],

    font: {
        bold: '700',
        light: '300',
        mini: '0.7rem',
        xxxs: '0.9rem',
        xxs: '1.2rem',
        xs: '1.4rem',
        s: '1.6rem',
        medium: '1.8rem',
        m: '2.1rem',
        l: '2.4rem',
        xl: '3.2rem',
        xxl: '4rem',
        xxxl: '7rem',
        first: "'Baloo Tamma', cursive",
        second: "'Roboto', sans-serif",
    },
    breakPointMobile: '768px', // tis parametr is also use in GlobalStyles.js (to change font-size)
    breakPointMiddle: '1150px',
    breakPointLarge: '1400px',
    breakPointVeryLarge: '1800px',
    breakPointMobileKeyboard: ` @media screen and (min-device-aspect-ratio: 1/1), (min-aspect-ratio: 1/1)
`,
    breakPointMobileLandscape: `@media (max-width: 768px) and (orientation: landscape)`,
    blindsAnimation: 'cubic-bezier(0.97, 0.16, 0.31, 0.67)',
};
