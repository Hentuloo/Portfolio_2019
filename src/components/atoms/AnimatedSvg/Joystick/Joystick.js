import React, { useRef, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { TimelineLite } from 'gsap';
import { objectToArray } from '../utils';
import { moveAround, tickAnim } from './anim';

export const Joystick = ({ tlSettings }) => {
    const circleButtons = useRef(null);
    const decoratorsFirstG = useRef(null);
    const decoratorsSecondtG = useRef(null);
    const cross = useRef(null);
    const pad = useRef(null);

    const generalTl = useMemo(() => new TimelineLite(), []);

    useEffect(() => {
        const circleButtonsNodes = circleButtons.current.childNodes;
        const decorators = [
            decoratorsFirstG.current,
            decoratorsSecondtG.current,
        ];
        generalTl
            .addLabel('start')
            .add(moveAround(circleButtonsNodes), 'start')
            .add(tickAnim(decorators[0], { x: '2%', delay: 0.15 }), 'start')
            .add(tickAnim(decorators[1], { x: '2%' }), 'start');
    }, []);

    useEffect(() => {
        const keyWithValueArray = objectToArray(tlSettings);
        keyWithValueArray.forEach(({ key, value }) => generalTl[key](value));
    }, [tlSettings]);

    return (
        <svg
            width="95"
            height="99"
            viewBox="0 0 95 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="95" height="99" fill="transparent" />
            <g id="Frame 13">
                <rect
                    id="Rectangle 49"
                    x="-89"
                    y="-486"
                    width="300"
                    height="920"
                />
                <g id="g14">
                    <g id="g16">
                        <g id="g22">
                            <g id="g72">
                                <g id="g70" opacity="0.800003">
                                    <g id="g36" opacity="0.800003">
                                        <path
                                            id="path34"
                                            opacity="0.800003"
                                            d="M44.1578 94.8243L43.7701 94.906C43.9162 94.8505 44.0634 94.7964 44.2089 94.7392L44.1578 94.8243ZM88.1518 29.8632C80.737 16.2763 66.5747 6.90341 50.1681 6.24232L46.3424 6.24647C39.3085 6.54691 32.6896 8.44761 26.8411 11.5962H36.37H44.3578C45.3141 11.5962 46.0966 12.8102 46.0966 14.2939C46.0966 15.7773 45.3141 16.9913 44.3578 16.9913H36.37H23.2747C22.3184 16.9913 21.5358 18.2052 21.5358 19.6886C21.5358 21.1724 22.3184 22.386 23.2747 22.386H36.37H37.4025C38.3588 22.386 39.1411 23.5999 39.1411 25.0834C39.1411 26.5671 38.3588 27.7808 37.4025 27.7808H36.37H17.4061H11.5374C10.5811 27.7808 9.79855 28.995 9.79855 30.4784C9.79855 31.9619 10.5811 33.1758 11.5374 33.1758H17.4061H36.37H50.4437C50.8367 33.1758 51.1984 33.3826 51.4906 33.727L51.5574 37.9396C51.255 38.3328 50.8665 38.5709 50.4437 38.5709H36.37H32.6208C31.6642 38.5709 30.8819 39.7845 30.8819 41.2682C30.8819 42.7517 31.6642 43.9656 32.6208 43.9656H36.37H45.8793C46.8356 43.9656 47.6182 45.1795 47.6182 46.663C47.6182 48.1467 46.8356 49.3604 45.8793 49.3604H36.37H24.3613C23.405 49.3604 22.6224 50.5743 22.6224 52.058C22.6224 53.5415 23.405 54.7551 24.3613 54.7551H36.37H39.0326C39.9889 54.7551 40.7715 55.9693 40.7715 57.4528C40.7715 58.9365 39.9889 60.1504 39.0326 60.1504H36.37H17.4061C16.4498 60.1504 15.6672 61.3641 15.6672 62.8478C15.6672 64.3313 16.4498 65.5452 17.4061 65.5452H36.37H44.3578C45.3141 65.5452 46.0966 66.7589 46.0966 68.2426C46.0966 69.726 45.3141 70.9402 44.3578 70.9402H36.37H23.2747C22.3184 70.9402 21.5358 72.1536 21.5358 73.6374C21.5358 75.1211 22.3184 76.335 23.2747 76.335H36.37H39.0326C39.9889 76.335 40.7715 77.5487 40.7715 79.0321C40.7715 80.5161 39.9889 81.7298 39.0326 81.7298H36.37H17.4061H14.4447C16.1905 83.6876 18.1019 85.4939 20.1595 87.1248H36.37H44.3578C45.3141 87.1248 46.0966 88.3385 46.0966 89.8222C46.0966 91.3059 45.3141 92.5196 44.3578 92.5196H36.37H28.8056C34.7142 95.3382 41.3276 96.9177 48.3108 96.9177C66.5659 96.9177 82.3 86.1315 89.4941 70.586L88.1518 29.8632Z"
                                            fill="#CE6E6E"
                                        />
                                    </g>
                                    <g id="g40" opacity="0.800003">
                                        <path
                                            id="path38"
                                            opacity="0.800003"
                                            d="M48.3103 6.20146C44.3647 6.20146 40.5371 6.70626 36.8876 7.65288C36.7658 8.0185 36.6957 8.4316 36.6957 8.86957C36.6957 10.337 37.4697 11.5377 38.4155 11.5377H57.1734H65.0745C66.0206 11.5377 66.7946 12.7384 66.7946 14.2058C66.7946 15.6735 66.0206 16.8739 65.0745 16.8739H57.1734H44.2203C43.2745 16.8739 42.5005 18.0746 42.5005 19.5423C42.5005 21.0097 43.2745 22.2104 44.2203 22.2104H57.1734H58.1946C59.1407 22.2104 59.9147 23.4111 59.9147 24.8782C59.9147 26.3459 59.1407 27.5466 58.1946 27.5466H57.1734H38.4155H32.6109C31.6649 27.5466 30.8908 28.7473 30.8908 30.2147C30.8908 31.6822 31.6649 32.8828 32.6109 32.8828H38.4155H57.1734H71.0942C72.0402 32.8828 72.8143 34.0835 72.8143 35.5509C72.8143 37.0184 72.0402 38.219 71.0942 38.219H57.1734H53.4651C52.519 38.219 51.745 39.4197 51.745 40.8872C51.745 42.3546 52.519 43.5553 53.4651 43.5553H57.1734H66.5795C67.5253 43.5553 68.2993 44.7559 68.2993 46.2234C68.2993 47.6908 67.5253 48.8915 66.5795 48.8915H57.1734H45.2954C44.3493 48.8915 43.5755 50.0922 43.5755 51.5596C43.5755 53.0273 44.3493 54.2277 45.2954 54.2277H57.1734H59.807C60.7531 54.2277 61.5271 55.4284 61.5271 56.8961C61.5271 58.3635 60.7531 59.5642 59.807 59.5642H57.1734H38.4155C37.4697 59.5642 36.6957 60.7646 36.6957 62.2323C36.6957 63.6997 37.4697 64.9004 38.4155 64.9004H57.1734H65.0745C66.0206 64.9004 66.7946 66.1011 66.7946 67.5685C66.7946 69.036 66.0206 70.2366 65.0745 70.2366H57.1734H44.2203C43.2745 70.2366 42.5005 71.4373 42.5005 72.9047C42.5005 74.3722 43.2745 75.5729 44.2203 75.5729H57.1734H59.807C60.7531 75.5729 61.5271 76.7735 61.5271 78.241C61.5271 79.7084 60.7531 80.9091 59.807 80.9091H57.1734H38.4155H31.3211C30.375 80.9091 29.601 82.1097 29.601 83.5772C29.601 85.0446 30.375 86.2456 31.3211 86.2456H38.4155H57.1734H65.0745C66.0206 86.2456 66.7946 87.446 66.7946 88.9137C66.7946 90.3808 66.0206 91.5815 65.0745 91.5815H57.1734H40.1356C39.1895 91.5815 38.4155 92.7825 38.4155 94.2496C38.4155 94.8784 38.5585 95.4577 38.7955 95.915C41.864 96.5701 45.0463 96.9177 48.3103 96.9177C73.3608 96.9177 93.6682 76.6103 93.6682 51.5599C93.6682 26.5091 73.3608 6.20146 48.3103 6.20146Z"
                                            fill="#CE6E6E"
                                        />
                                    </g>
                                </g>
                            </g>
                        </g>
                        <g id="decorators" ref={decoratorsFirstG}>
                            <g id="g170">
                                <path
                                    id="path172"
                                    d="M1.6403 45.7537H0.690361C0.309006 45.7537 0 45.4447 0 45.0633C0 44.6819 0.309006 44.3729 0.690361 44.3729H1.6403C2.02165 44.3729 2.33066 44.6819 2.33066 45.0633C2.33066 45.4447 2.02165 45.7537 1.6403 45.7537Z"
                                    fill="#666666"
                                />
                            </g>
                            <g id="g174">
                                <path
                                    id="path176"
                                    d="M5.3361 45.7537H4.38616C4.00481 45.7537 3.6958 45.4447 3.6958 45.0633C3.6958 44.6819 4.00481 44.3729 4.38616 44.3729H5.3361C5.71746 44.3729 6.02646 44.6819 6.02646 45.0633C6.02646 45.4447 5.71746 45.7537 5.3361 45.7537Z"
                                    fill="#666666"
                                />
                            </g>
                            <g id="g178">
                                <path
                                    id="path180"
                                    d="M3.0097 44.381C2.62834 44.381 2.31934 44.072 2.31934 43.6906V42.741C2.31934 42.3596 2.62834 42.0506 3.0097 42.0506C3.39105 42.0506 3.70006 42.3596 3.70006 42.741V43.6906C3.70006 44.072 3.39105 44.381 3.0097 44.381Z"
                                    fill="#666666"
                                />
                            </g>
                            <g id="g182">
                                <path
                                    id="path184"
                                    d="M3.0097 48.0806C2.62834 48.0806 2.31934 47.7716 2.31934 47.3902V46.4403C2.31934 46.0589 2.62834 45.7499 3.0097 45.7499C3.39105 45.7499 3.70006 46.0589 3.70006 46.4403V47.3902C3.70006 47.7716 3.39105 48.0806 3.0097 48.0806Z"
                                    fill="#666666"
                                />
                            </g>
                            <g id="g74">
                                <path
                                    id="path76"
                                    d="M67.8136 9.06458H66.7924C66.411 9.06458 66.102 8.75557 66.102 8.37421C66.102 7.99286 66.411 7.68385 66.7924 7.68385H67.8136C68.1949 7.68385 68.5039 7.99286 68.5039 8.37421C68.5039 8.75557 68.1949 9.06458 67.8136 9.06458Z"
                                    fill="#666666"
                                />
                            </g>
                            <g id="g78">
                                <path
                                    id="path80"
                                    d="M64.4124 9.06458H54.374C53.9929 9.06458 53.6836 8.75557 53.6836 8.37421C53.6836 7.99286 53.9929 7.68385 54.374 7.68385H64.4124C64.7937 7.68385 65.1028 7.99286 65.1028 8.37421C65.1028 8.75557 64.7937 9.06458 64.4124 9.06458Z"
                                    fill="#666666"
                                />
                            </g>
                            <g id="g82">
                                <path
                                    id="path84"
                                    d="M11.5307 62.3961H10.5092C10.1279 62.3961 9.81885 62.0871 9.81885 61.7058C9.81885 61.3244 10.1279 61.0154 10.5092 61.0154H11.5307C11.912 61.0154 12.221 61.3244 12.221 61.7058C12.221 62.0871 11.912 62.3961 11.5307 62.3961Z"
                                    fill="#666666"
                                />
                            </g>
                            <g id="g86">
                                <path
                                    id="path88"
                                    d="M23.9518 62.3961H13.9134C13.5323 62.3961 13.2231 62.0871 13.2231 61.7058C13.2231 61.3244 13.5323 61.0154 13.9134 61.0154H23.9518C24.3332 61.0154 24.6422 61.3244 24.6422 61.7058C24.6422 62.0871 24.3332 62.3961 23.9518 62.3961Z"
                                    fill="#666666"
                                />
                            </g>
                            <g id="g90">
                                <path
                                    id="path92"
                                    d="M11.5307 28.848H10.5092C10.1279 28.848 9.81885 28.539 9.81885 28.1577C9.81885 27.7763 10.1279 27.4673 10.5092 27.4673H11.5307C11.912 27.4673 12.221 27.7763 12.221 28.1577C12.221 28.539 11.912 28.848 11.5307 28.848Z"
                                    fill="#666666"
                                />
                            </g>
                            <g id="g94">
                                <path
                                    id="path96"
                                    d="M23.9518 28.848H13.9134C13.5323 28.848 13.2231 28.539 13.2231 28.1577C13.2231 27.7763 13.5323 27.4673 13.9134 27.4673H23.9518C24.3332 27.4673 24.6422 27.7763 24.6422 28.1577C24.6422 28.539 24.3332 28.848 23.9518 28.848Z"
                                    fill="#666666"
                                />
                            </g>
                            <g id="g98">
                                <path
                                    id="path100"
                                    d="M67.8136 98.7273H66.7924C66.411 98.7273 66.102 98.4183 66.102 98.0369C66.102 97.6556 66.411 97.3466 66.7924 97.3466H67.8136C68.1949 97.3466 68.5039 97.6556 68.5039 98.0369C68.5039 98.4183 68.1949 98.7273 67.8136 98.7273Z"
                                    fill="#666666"
                                />
                            </g>
                            <g id="g102">
                                <path
                                    id="path104"
                                    d="M64.4124 98.7273H54.374C53.9929 98.7273 53.6836 98.4183 53.6836 98.0369C53.6836 97.6556 53.9929 97.3466 54.374 97.3466H64.4124C64.7937 97.3466 65.1028 97.6556 65.1028 98.0369C65.1028 98.4183 64.7937 98.7273 64.4124 98.7273Z"
                                    fill="#666666"
                                />
                            </g>
                            <g id="g106">
                                <path
                                    id="path108"
                                    d="M76.0275 28.262C74.9856 28.262 74.1378 29.1098 74.1378 30.1517C74.1378 31.1939 74.9856 32.0416 76.0275 32.0416C77.0694 32.0416 77.9174 31.1939 77.9174 30.1517C77.9174 29.1098 77.0694 28.262 76.0275 28.262ZM76.0275 33.4224C74.2242 33.4224 72.7571 31.9552 72.7571 30.1517C72.7571 28.3485 74.2242 26.8813 76.0275 26.8813C77.8307 26.8813 79.2981 28.3485 79.2981 30.1517C79.2981 31.9552 77.8307 33.4224 76.0275 33.4224Z"
                                    fill="#666666"
                                />
                            </g>
                            <g id="g110">
                                <path
                                    id="path112"
                                    d="M76.0275 61.9577C74.9856 61.9577 74.1378 62.8055 74.1378 63.8477C74.1378 64.8896 74.9856 65.7376 76.0275 65.7376C77.0694 65.7376 77.9174 64.8896 77.9174 63.8477C77.9174 62.8055 77.0694 61.9577 76.0275 61.9577ZM76.0275 67.118C74.2242 67.118 72.7571 65.6509 72.7571 63.8477C72.7571 62.0442 74.2242 60.577 76.0275 60.577C77.8307 60.577 79.2981 62.0442 79.2981 63.8477C79.2981 65.6509 77.8307 67.118 76.0275 67.118Z"
                                    fill="#666666"
                                />
                            </g>
                            <g id="g142">
                                <path
                                    id="path144"
                                    d="M84.247 87.3805C84.0703 87.3805 83.8938 87.3131 83.7588 87.1784C83.4893 86.9086 83.4893 86.4717 83.7588 86.2019L86.7702 83.1908C87.0397 82.9213 87.4765 82.9213 87.7463 83.1908C88.0159 83.4606 88.0159 83.8975 87.7463 84.167L84.7353 87.1784C84.6002 87.3131 84.4238 87.3805 84.247 87.3805Z"
                                    fill="#666666"
                                />
                            </g>
                        </g>
                        <g id="decorators_2" ref={decoratorsSecondtG}>
                            <g id="g114">
                                <path
                                    id="path116"
                                    d="M24.8544 10.7904C23.8125 10.7904 22.9647 11.6381 22.9647 12.68C22.9647 13.7222 23.8125 14.57 24.8544 14.57C25.8963 14.57 26.7443 13.7222 26.7443 12.68C26.7443 11.6381 25.8963 10.7904 24.8544 10.7904ZM24.8544 15.9507C23.0512 15.9507 21.584 14.4835 21.584 12.68C21.584 10.8768 23.0512 9.40965 24.8544 9.40965C26.6579 9.40965 28.1251 10.8768 28.1251 12.68C28.1251 14.4835 26.6579 15.9507 24.8544 15.9507Z"
                                    fill="#666666"
                                />
                            </g>
                            <g id="g118">
                                <path
                                    id="path120"
                                    d="M31.1425 90.7686C30.1006 90.7686 29.2525 91.6164 29.2525 92.6586C29.2525 93.7005 30.1006 94.5485 31.1425 94.5485C32.1843 94.5485 33.0321 93.7005 33.0321 92.6586C33.0321 91.6164 32.1843 90.7686 31.1425 90.7686ZM31.1425 95.929C29.339 95.929 27.8718 94.4618 27.8718 92.6586C27.8718 90.8551 29.339 89.3879 31.1425 89.3879C32.9457 89.3879 34.4128 90.8551 34.4128 92.6586C34.4128 94.4618 32.9457 95.929 31.1425 95.929Z"
                                    fill="#666666"
                                />
                            </g>
                            <g id="g122">
                                <path
                                    id="path124"
                                    d="M82.0969 18.5824C81.9202 18.5824 81.7437 18.515 81.6087 18.3803L78.5976 15.3689C78.3281 15.0994 78.3281 14.6622 78.5976 14.3927C78.8674 14.1232 79.3042 14.1232 79.5738 14.3927L82.5851 17.4038C82.8546 17.6733 82.8546 18.1107 82.5851 18.3803C82.4501 18.515 82.2736 18.5824 82.0969 18.5824Z"
                                    fill="#666666"
                                />
                            </g>
                            <g id="g126">
                                <path
                                    id="path128"
                                    d="M79.0858 18.5824C78.9091 18.5824 78.7326 18.515 78.5976 18.3803C78.3281 18.1107 78.3281 17.6733 78.5976 17.4038L81.6089 14.3927C81.8785 14.1232 82.3153 14.1232 82.5851 14.3927C82.8546 14.6622 82.8546 15.0994 82.5851 15.3689L79.574 18.3803C79.439 18.515 79.2625 18.5824 79.0858 18.5824Z"
                                    fill="#666666"
                                />
                            </g>
                            <g id="g130">
                                <path
                                    id="path132"
                                    d="M42.1001 4.39185C41.9234 4.39185 41.7467 4.32447 41.6119 4.18971L38.6011 1.17835C38.3313 0.908834 38.3313 0.471697 38.6011 0.20218C38.8703 -0.0676132 39.3077 -0.0673371 39.5773 0.20218L42.5883 3.21326C42.8579 3.48278 42.8579 3.92019 42.5883 4.18971C42.4536 4.32447 42.2768 4.39185 42.1001 4.39185Z"
                                    fill="#666666"
                                />
                            </g>
                            <g id="g134">
                                <path
                                    id="path136"
                                    d="M39.0891 4.39185C38.9124 4.39185 38.7356 4.32447 38.6009 4.18971C38.3314 3.92019 38.3314 3.48278 38.6009 3.21326L41.612 0.202179C41.8815 -0.0673377 42.3189 -0.0673377 42.5881 0.202179C42.8579 0.471697 42.8579 0.908833 42.5881 1.17835L39.5773 4.18971C39.4426 4.32447 39.2658 4.39185 39.0891 4.39185Z"
                                    fill="#666666"
                                />
                            </g>
                            <g id="g138">
                                <path
                                    id="path140"
                                    d="M87.2581 87.3805C87.0814 87.3805 86.9049 87.3131 86.7699 87.1784L83.7588 84.167C83.4893 83.8975 83.4893 83.4606 83.7588 83.1908C84.0286 82.9213 84.4655 82.9213 84.735 83.1908L87.7463 86.2019C88.0159 86.4717 88.0159 86.9086 87.7463 87.1784C87.6113 87.3131 87.4348 87.3805 87.2581 87.3805Z"
                                    fill="#666666"
                                />
                            </g>
                            <g id="g146">
                                <path
                                    id="path148"
                                    d="M10.4946 80.7179C10.3179 80.7179 10.1412 80.6505 10.0064 80.5158L6.99562 77.5044C6.72583 77.2349 6.72583 76.7977 6.99562 76.5282C7.26486 76.2584 7.70227 76.2584 7.97179 76.5282L10.9829 79.5393C11.2524 79.8091 11.2524 80.2462 10.9829 80.5158C10.8481 80.6505 10.6714 80.7179 10.4946 80.7179Z"
                                    fill="#666666"
                                />
                            </g>
                            <g id="g150">
                                <path
                                    id="path152"
                                    d="M7.48364 80.7179C7.3069 80.7179 7.13017 80.6505 6.99541 80.5158C6.72589 80.2462 6.72589 79.8091 6.99541 79.5393L10.0065 76.5282C10.276 76.2587 10.7134 76.2587 10.9827 76.5282C11.2525 76.7977 11.2525 77.2349 10.9827 77.5044L7.97186 80.5158C7.8371 80.6505 7.66037 80.7179 7.48364 80.7179Z"
                                    fill="#666666"
                                />
                            </g>
                            <g id="g154">
                                <path
                                    id="path156"
                                    d="M90.6138 45.7537H89.6639C89.2825 45.7537 88.9735 45.4447 88.9735 45.0633C88.9735 44.6819 89.2825 44.3729 89.6639 44.3729H90.6138C90.9952 44.3729 91.3042 44.6819 91.3042 45.0633C91.3042 45.4447 90.9952 45.7537 90.6138 45.7537Z"
                                    fill="#666666"
                                />
                            </g>
                            <g id="g158">
                                <path
                                    id="path160"
                                    d="M94.3093 45.7537H93.3597C92.9783 45.7537 92.6693 45.4447 92.6693 45.0633C92.6693 44.6819 92.9783 44.3729 93.3597 44.3729H94.3093C94.6907 44.3729 94.9997 44.6819 94.9997 45.0633C94.9997 45.4447 94.6907 45.7537 94.3093 45.7537Z"
                                    fill="#666666"
                                />
                            </g>
                            <g id="g162">
                                <path
                                    id="path164"
                                    d="M91.9889 44.381C91.6075 44.381 91.2985 44.072 91.2985 43.6906V42.741C91.2985 42.3596 91.6075 42.0506 91.9889 42.0506C92.3702 42.0506 92.6792 42.3596 92.6792 42.741V43.6906C92.6792 44.072 92.3702 44.381 91.9889 44.381Z"
                                    fill="#666666"
                                />
                            </g>
                            <g id="g166">
                                <path
                                    id="path168"
                                    d="M91.9889 48.0806C91.6075 48.0806 91.2985 47.7716 91.2985 47.3902V46.4403C91.2985 46.0589 91.6075 45.7499 91.9889 45.7499C92.3702 45.7499 92.6792 46.0589 92.6792 46.4403V47.3902C92.6792 47.7716 92.3702 48.0806 91.9889 48.0806Z"
                                    fill="#666666"
                                />
                            </g>
                        </g>
                        <g id="g186">
                            <path
                                id="path188"
                                d="M87.5394 56.0125C87.538 46.7771 80.0509 39.2905 70.8153 39.2905H28.2189C19.0205 39.2905 11.4944 46.8166 11.4944 56.015V56.0152C11.4944 65.2133 19.0205 72.7394 28.2189 72.7394L28.2487 72.7341C28.3183 72.7352 28.387 72.7394 28.4566 72.7394C32.9164 72.7394 44.3791 66.1387 50.0125 66.1735C55.4658 66.2072 65.4981 72.7394 70.8153 72.7394C80.0509 72.7394 87.538 65.2531 87.5394 56.0177V56.0152V56.015V56.0125Z"
                                fill="white"
                            />
                        </g>
                        <g id="g190">
                            <path
                                id="path192"
                                d="M48.4832 63.3841H48.5332C51.4532 63.402 55.4799 65.1125 59.3741 66.7666C63.0584 68.3312 66.8681 69.9494 69.3305 69.9494C78.0384 69.9494 85.124 62.8649 85.1254 54.157L86.0546 54.1517H85.1254C85.124 45.4438 78.0384 38.3593 69.3305 38.3593H26.7338C18.0245 38.3593 10.9386 45.4449 10.9386 54.1542C10.9386 62.8384 17.9822 69.9083 26.6568 69.9491L26.7736 69.9444L26.9718 69.9494C28.8844 69.9494 32.6019 68.4638 36.1973 67.0264C40.678 65.2356 45.3109 63.3841 48.4832 63.3841ZM69.3305 71.8079C66.4895 71.8079 62.6806 70.1899 58.6473 68.4767C54.9221 66.8944 51.0696 65.2577 48.5216 65.2422C45.7102 65.2177 41.0235 67.099 36.8868 68.752C32.9556 70.3236 29.242 71.8079 26.9718 71.8079C26.923 71.8079 26.8746 71.8065 26.8263 71.8045L26.8103 71.8043L26.7338 71.8079C16.9997 71.8079 9.08044 63.8883 9.08044 54.1542C9.08044 44.4201 16.9997 36.5008 26.7338 36.5008H69.3305C79.0629 36.5008 86.9825 44.419 86.9836 54.1517V54.1542C86.9825 63.89 79.0629 71.8079 69.3305 71.8079Z"
                                fill="#231F20"
                            />
                        </g>
                        <g id="pad" ref={pad}>
                            <path
                                id="path196"
                                d="M35.842 50.5955H30.3398V45.0933H22.8524V50.5955H17.3505V58.0829H22.8524V63.5851H30.3398V58.0829H35.842V50.5955Z"
                                fill="white"
                            />
                        </g>
                        <g id="cross" ref={cross}>
                            <path
                                id="path200"
                                d="M37.3283 52.0856H31.8264V46.5837H24.3387V52.0856H18.8368V59.573H24.3387V65.0752H31.8264V59.573H37.3283V52.0856Z"
                                fill="#CE6E6E"
                            />
                        </g>
                        <g id="g202">
                            <path
                                id="path204"
                                d="M23.4121 62.2855H29.041V57.7123C29.041 57.1992 29.4571 56.783 29.9702 56.783H34.5432V51.1544H29.9702C29.4571 51.1544 29.041 50.7385 29.041 50.2252V45.6522H23.4121V50.2252C23.4121 50.7385 22.9962 51.1544 22.4828 51.1544H17.9099V56.783H22.4828C22.9962 56.783 23.4121 57.1992 23.4121 57.7123V62.2855ZM29.9702 64.1437H22.4828C21.9697 64.1437 21.5539 63.7278 21.5539 63.2145V58.6415H16.9806C16.4676 58.6415 16.0517 58.2256 16.0517 57.7123V50.2252C16.0517 49.7121 16.4676 49.2959 16.9806 49.2959H21.5539V44.723C21.5539 44.2096 21.9697 43.794 22.4828 43.794H29.9702C30.4833 43.794 30.8994 44.2096 30.8994 44.723V49.2959H35.4721C35.9855 49.2959 36.4013 49.7121 36.4013 50.2252V57.7123C36.4013 58.2256 35.9855 58.6415 35.4721 58.6415H30.8994V63.2145C30.8994 63.7278 30.4833 64.1437 29.9702 64.1437"
                                fill="#231F20"
                            />
                        </g>
                        <g id="g206">
                            <path
                                id="path208"
                                d="M73.3938 47.3733C73.3938 49.2436 71.8778 50.7596 70.0071 50.7596C68.1371 50.7596 66.6208 49.2436 66.6208 47.3733C66.6208 45.503 68.1371 43.9866 70.0071 43.9866C71.8778 43.9866 73.3938 45.503 73.3938 47.3733Z"
                                fill="white"
                            />
                        </g>
                        <g id="g210">
                            <path
                                id="path212"
                                d="M73.3938 61.4615C73.3938 63.3316 71.8778 64.8479 70.0071 64.8479C68.1371 64.8479 66.6208 63.3316 66.6208 61.4615C66.6208 59.5912 68.1371 58.0749 70.0071 58.0749C71.8778 58.0749 73.3938 59.5912 73.3938 61.4615Z"
                                fill="white"
                            />
                        </g>
                        <g id="g214">
                            <path
                                id="path216"
                                d="M77.045 57.8029C75.1746 57.8029 73.6583 56.2865 73.6583 54.4162C73.6583 52.5459 75.1746 51.0299 77.045 51.0299C78.915 51.0299 80.4316 52.5459 80.4316 54.4162C80.4316 56.2865 78.915 57.8029 77.045 57.8029Z"
                                fill="white"
                            />
                        </g>
                        <g id="g218">
                            <path
                                id="path220"
                                d="M62.968 57.8029C61.0977 57.8029 59.5814 56.2865 59.5814 54.4162C59.5814 52.5459 61.0977 51.0299 62.968 51.0299C64.838 51.0299 66.3544 52.5459 66.3544 54.4162C66.3544 56.2865 64.838 57.8029 62.968 57.8029Z"
                                fill="white"
                            />
                        </g>
                        <g id="CircleButtons" ref={circleButtons}>
                            <g id="g222">
                                <path
                                    id="path224"
                                    d="M74.8819 48.1152C74.8819 49.9855 73.3656 51.5018 71.4953 51.5018C69.625 51.5018 68.1089 49.9855 68.1089 48.1152C68.1089 46.2449 69.625 44.7286 71.4953 44.7286C73.3656 44.7286 74.8819 46.2449 74.8819 48.1152Z"
                                    fill="#585DA2"
                                />
                            </g>
                            <g id="g226">
                                <path
                                    id="path228"
                                    d="M74.8819 62.2035C74.8819 64.0735 73.3656 65.5901 71.4953 65.5901C69.625 65.5901 68.1089 64.0735 68.1089 62.2035C68.1089 60.3331 69.625 58.8168 71.4953 58.8168C73.3656 58.8168 74.8819 60.3331 74.8819 62.2035Z"
                                    fill="#9C1C33"
                                />
                            </g>
                            <g id="g230">
                                <path
                                    id="path232"
                                    d="M78.535 58.5469C76.6647 58.5469 75.1484 57.0308 75.1484 55.1602C75.1484 53.2902 76.6647 51.7739 78.535 51.7739C80.4051 51.7739 81.9214 53.2902 81.9214 55.1602C81.9214 57.0308 80.4051 58.5469 78.535 58.5469Z"
                                    fill="#F0BE55"
                                />
                            </g>
                            <g id="g234">
                                <path
                                    id="path236"
                                    d="M64.4543 58.5469C62.5842 58.5469 61.0676 57.0308 61.0676 55.1602C61.0676 53.2902 62.5842 51.7739 64.4543 51.7739C66.3246 51.7739 67.8409 53.2902 67.8409 55.1602C67.8409 57.0308 66.3246 58.5469 64.4543 58.5469Z"
                                    fill="#CE6E6E"
                                />
                            </g>
                        </g>
                        <g id="g238">
                            <path
                                id="path240"
                                d="M70.0089 44.5433C68.6536 44.5433 67.5515 45.6457 67.5515 47.0007C67.5515 48.3557 68.6536 49.4578 70.0089 49.4578C71.3637 49.4578 72.4658 48.3557 72.4658 47.0007C72.4658 45.6457 71.3637 44.5433 70.0089 44.5433ZM70.0089 51.3163C67.6291 51.3163 65.6931 49.3802 65.6931 47.0007C65.6931 44.6209 67.6291 42.6851 70.0089 42.6851C72.3882 42.6851 74.3242 44.6209 74.3242 47.0007C74.3242 49.3802 72.3882 51.3163 70.0089 51.3163Z"
                                fill="#231F20"
                            />
                        </g>
                        <g id="g242">
                            <path
                                id="path244"
                                d="M70.0089 58.6318C68.6536 58.6318 67.5515 59.7342 67.5515 61.089C67.5515 62.4443 68.6536 63.5466 70.0089 63.5466C71.3637 63.5466 72.4658 62.4443 72.4658 61.089C72.4658 59.7342 71.3637 58.6318 70.0089 58.6318ZM70.0089 65.4045C67.6291 65.4045 65.6931 63.469 65.6931 61.089C65.6931 58.7094 67.6291 56.7736 70.0089 56.7736C72.3882 56.7736 74.3242 58.7094 74.3242 61.089C74.3242 63.469 72.3882 65.4045 70.0089 65.4045Z"
                                fill="#231F20"
                            />
                        </g>
                        <g id="g246">
                            <path
                                id="path248"
                                d="M77.0446 51.5883C75.6892 51.5883 74.5872 52.6907 74.5872 54.0457C74.5872 55.4005 75.6892 56.5029 77.0446 56.5029C78.3993 56.5029 79.5014 55.4005 79.5014 54.0457C79.5014 52.6907 78.3993 51.5883 77.0446 51.5883ZM77.0446 58.3613C74.6647 58.3613 72.7287 56.4253 72.7287 54.0457C72.7287 51.6659 74.6647 49.7302 77.0446 49.7302C79.4238 49.7302 81.3599 51.6659 81.3599 54.0457C81.3599 56.4253 79.4238 58.3613 77.0446 58.3613Z"
                                fill="#231F20"
                            />
                        </g>
                        <g id="g250">
                            <path
                                id="path252"
                                d="M62.9695 51.5883C61.6144 51.5883 60.5121 52.6907 60.5121 54.0457C60.5121 55.4005 61.6144 56.5029 62.9695 56.5029C64.3243 56.5029 65.4263 55.4005 65.4263 54.0457C65.4263 52.6907 64.3243 51.5883 62.9695 51.5883ZM62.9695 58.3613C60.5897 58.3613 58.6536 56.4253 58.6536 54.0457C58.6536 51.6659 60.5897 49.7302 62.9695 49.7302C65.3488 49.7302 67.2848 51.6659 67.2848 54.0457C67.2848 56.4253 65.3488 58.3613 62.9695 58.3613Z"
                                fill="#231F20"
                            />
                        </g>
                        <g id="g254">
                            <path
                                id="path256"
                                d="M51.9511 45.0967H44.1099C43.4044 45.0967 42.8272 44.5195 42.8272 43.814V42.927C42.8272 42.2215 43.4044 41.6443 44.1099 41.6443H51.9511C52.6566 41.6443 53.2338 42.2215 53.2338 42.927V43.814C53.2338 44.5195 52.6566 45.0967 51.9511 45.0967Z"
                                fill="white"
                            />
                        </g>
                        <g id="g258">
                            <path
                                id="path260"
                                d="M53.0641 46.21H45.2229C44.5177 46.21 43.9405 45.6328 43.9405 44.9273V44.0403C43.9405 43.3347 44.5177 42.7576 45.2229 42.7576H53.0641C53.7696 42.7576 54.3468 43.3347 54.3468 44.0403V44.9273C54.3468 45.6328 53.7696 46.21 53.0641 46.21Z"
                                fill="#807F7F"
                            />
                        </g>
                        <g id="g262">
                            <path
                                id="path264"
                                d="M44.5527 42.201C44.1134 42.201 43.7558 42.5586 43.7558 42.9982C43.7558 43.4378 44.1134 43.7951 44.5527 43.7951H51.5069C51.9462 43.7951 52.3036 43.4378 52.3036 42.9982C52.3036 42.5586 51.9462 42.201 51.5069 42.201H44.5527ZM51.5069 45.6533H44.5527C43.0886 45.6533 41.8976 44.4623 41.8976 42.9982C41.8976 41.5338 43.0886 40.3428 44.5527 40.3428H51.5069C52.9707 40.3428 54.162 41.5338 54.162 42.9982C54.162 44.4623 52.9707 45.6533 51.5069 45.6533Z"
                                fill="#231F20"
                            />
                        </g>
                        <g id="g266">
                            <path
                                id="path268"
                                d="M61.4108 11.3564C60.8977 11.3564 60.4819 11.7723 60.4819 12.2856V30.406C60.4819 31.7381 59.398 32.8217 58.0662 32.8217C56.734 32.8217 55.6504 31.7381 55.6504 30.406V28.7624V22.6921V20.2143C55.6504 17.8574 53.7329 15.9401 51.3763 15.9401C49.0197 15.9401 47.1024 17.8574 47.1024 20.2143V36.8481C47.1024 37.3612 47.5183 37.7771 48.0313 37.7771C48.5447 37.7771 48.9606 37.3612 48.9606 36.8481V20.2143C48.9606 18.8822 50.0444 17.7986 51.3763 17.7986C52.7081 17.7986 53.792 18.8822 53.792 20.2143V22.6921V28.7624V30.406C53.792 32.7629 55.7095 34.6799 58.0662 34.6799C60.4228 34.6799 62.34 32.7629 62.34 30.406V12.2856C62.34 11.7723 61.9239 11.3564 61.4108 11.3564Z"
                                fill="#231F20"
                            />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};
Joystick.propTypes = {
    tlSettings: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
};
Joystick.defaultProps = {
    tlSettings: {},
};