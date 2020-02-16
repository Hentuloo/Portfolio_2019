import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { TimelineLite } from 'gsap';
import { objectToArray } from '../utils';

import { flagAnim, cloudsAnim, plantsAnim } from './anims';

export const Mountain = ({ tlSettings }) => {
    const flagRef = useRef(null);
    const cloud1 = useRef(null);
    const cloud2 = useRef(null);
    const cloud3 = useRef(null);
    const plantsWrapper = useRef(null);

    const [generalTl] = useState(new TimelineLite());

    useEffect(() => {
        const flagAnimation = flagAnim(flagRef.current);
        const plantsAnimation = plantsAnim(plantsWrapper.current.childNodes);
        const cloudsAnimation = cloudsAnim([
            cloud1.current,
            cloud2.current,
            cloud3.current,
        ]);

        generalTl
            .addLabel('start')
            .add(flagAnimation.repeatDelay(6).repeat(-1), 'start')
            .add(cloudsAnimation, 'start')
            .add(plantsAnimation, 'start')
            .progress(0.1);
    }, []);

    useEffect(() => {
        const keyWithValueArray = objectToArray(tlSettings);
        keyWithValueArray.forEach(({ key, value }) => generalTl[key](value));
    }, [tlSettings]);

    return (
        <svg
            width="88"
            height="75"
            viewBox="0 0 88 75"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="88" height="75" fill="transparent" />
            <g id="Frame 13">
                <rect
                    fillOpacity="0"
                    id="Rectangle 49"
                    x="-106"
                    y="-23"
                    width="300"
                    height="920"
                />
                <g id="Group">
                    <path
                        ref={flagRef}
                        id="flag"
                        d="M41.5 6.96163L50.6062 3.31816L41.5 0V6.96163Z"
                        fill="#CE6E6E"
                    />
                    <path
                        id="Vector"
                        d="M17.6801 62.2392L41.5521 14.5922L66.1262 62.2392H17.6801Z"
                        fill="#5F5F5F"
                    />
                    <path
                        id="Vector_2"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M41.5536 14.5922L41.7451 62.2392H66.1278L41.5536 14.5922Z"
                        fill="#7B7B7B"
                    />
                    <path
                        id="Vector_3"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M41.5523 14.5922L37.446 22.8117L41.9566 25.0021L45.9565 22.8117L41.5523 14.5922Z"
                        fill="#D6D6D6"
                    />
                    <g id="cloud" ref={cloud1}>
                        <g id="Group_2">
                            <path
                                id="Vector_4"
                                d="M10.4853 45.234C13.5287 45.234 15.9959 42.7192 15.9959 39.617C15.9959 36.5148 13.5287 34 10.4853 34C7.44195 34 4.97479 36.5148 4.97479 39.617C4.97479 42.7192 7.44195 45.234 10.4853 45.234Z"
                                fill="#E1E0E0"
                            />
                            <path
                                id="Vector_5"
                                d="M5.92699 43.312C7.7506 42.5731 8.64129 40.4672 7.9164 38.6083C7.19151 36.7495 5.12554 35.8416 3.30194 36.5805C1.47833 37.3194 0.587641 39.4253 1.31253 41.2841C2.03742 43.143 4.10339 44.0509 5.92699 43.312Z"
                                fill="#E1E0E0"
                            />
                            <path
                                id="Vector_6"
                                d="M15.8213 43.2399C16.8318 43.2399 17.651 42.4049 17.651 41.3748C17.651 40.3447 16.8318 39.5097 15.8213 39.5097C14.8107 39.5097 13.9915 40.3447 13.9915 41.3748C13.9915 42.4049 14.8107 43.2399 15.8213 43.2399Z"
                                fill="#E1E0E0"
                            />
                            <path
                                id="Vector_7"
                                d="M22.5687 37.5531C22.5687 36.729 21.9091 36.0567 21.1006 36.0567C20.2921 36.0567 19.6326 36.729 19.6326 37.5531C19.6326 38.3772 20.2921 39.0496 21.1006 39.0496C21.9091 39.0496 22.5687 38.3772 22.5687 37.5531Z"
                                fill="#E1E0E0"
                            />
                            <path
                                id="Vector_8"
                                d="M22.9749 38.5356C22.9749 38.2971 22.7834 38.1019 22.5494 38.1019C22.3153 38.1019 22.1238 38.2971 22.1238 38.5356C22.1238 38.7742 22.3153 38.9694 22.5494 38.9694C22.7834 38.9694 22.9749 38.7742 22.9749 38.5356Z"
                                fill="#E1E0E0"
                            />
                        </g>
                    </g>
                    <g id="cloud_2" ref={cloud2}>
                        <path
                            id="Vector_9"
                            d="M6.47144 26.3327C6.47144 30.3882 9.70543 33.6847 13.6841 33.6847C17.6628 33.6847 20.8968 30.3882 20.8968 26.3327C20.8968 22.2772 17.9181 20 13.9394 20C9.96075 20 6.47144 22.2772 6.47144 26.3327Z"
                            fill="#F7F7F7"
                        />
                        <path
                            id="Vector_10"
                            d="M17.4716 29.2625C17.4716 31.0409 18.8971 32.494 20.6417 32.494C22.3864 32.494 23.8119 31.0409 23.8119 29.2625C23.8119 27.4842 22.3864 26.0311 20.6417 26.0311C18.8971 26.0311 17.4716 27.4842 17.4716 29.2625Z"
                            fill="#F7F7F7"
                        />
                        <path
                            id="Vector_11"
                            d="M0 27.9776C0 30.7319 2.19146 32.9657 4.89355 32.9657C7.59563 32.9657 9.78709 30.7319 9.78709 27.9776C9.78709 25.2233 7.59563 22.9895 4.89355 22.9895C2.19146 22.9895 0 25.245 0 27.9776Z"
                            fill="#F7F7F7"
                        />
                    </g>
                    <path
                        id="Vector_12"
                        d="M50.2363 62.2475L67.1297 23.8175L84.1082 62.2475H50.2363Z"
                        fill="#7B7B7B"
                    />
                    <path
                        id="Vector_13"
                        d="M3.30042 62.2475L20.1725 23.8175L37.1723 62.2475H3.30042Z"
                        fill="#7B7B7B"
                    />
                    <path
                        id="Vector_14"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.3877 23.9005L21.7707 62.2003L37.1747 62.2437L20.3877 23.9005Z"
                        fill="#BDBDBD"
                    />
                    <g id="cloud_3" ref={cloud3}>
                        <path
                            id="Vector_15"
                            d="M15.8038 33.9423C15.8038 30.6675 13.1868 28 9.97411 28C6.76139 28 4.14441 30.6675 4.14441 33.9423C4.14441 37.2171 6.76139 39.8847 9.97411 39.8847C13.1868 39.8847 15.8038 37.2388 15.8038 33.9423Z"
                            fill="#F7F7F7"
                        />
                        <path
                            id="Vector_16"
                            d="M3.76593 38.1261C5.84578 38.1261 7.53184 36.4075 7.53184 34.2875C7.53184 32.1674 5.84578 30.4488 3.76593 30.4488C1.68608 30.4488 3.05176e-05 32.1674 3.05176e-05 34.2875C3.05176e-05 36.4075 1.68608 38.1261 3.76593 38.1261Z"
                            fill="#F7F7F7"
                        />
                        <path
                            id="Vector_17"
                            d="M17.5568 35.8077C17.5568 34.7233 16.6845 33.8342 15.6207 33.8342C14.5568 33.8342 13.6845 34.7233 13.6845 35.8077C13.6845 36.8921 14.5568 37.7813 15.6207 37.7813C16.6845 37.7813 17.5568 36.8921 17.5568 35.8077Z"
                            fill="#F7F7F7"
                        />
                        <path
                            id="Vector_18"
                            d="M22.7409 31.7751C22.7409 30.9076 22.0387 30.192 21.1877 30.192C20.3366 30.192 19.6345 30.9076 19.6345 31.7751C19.6345 32.6426 20.3366 33.3583 21.1877 33.3583C22.0387 33.3583 22.7409 32.6426 22.7409 31.7751Z"
                            fill="#F7F7F7"
                        />
                        <path
                            id="Vector_19"
                            d="M23.1777 32.7949C23.1777 32.5346 22.965 32.3394 22.7309 32.3394C22.4969 32.3394 22.2841 32.5563 22.2841 32.7949C22.2841 33.0551 22.4969 33.2503 22.7309 33.2503C22.965 33.2503 23.1777 33.0551 23.1777 32.7949Z"
                            fill="#F7F7F7"
                        />
                    </g>
                    <path
                        id="Vector_20"
                        d="M41.1945 15.3329L41.5774 14.5956L41.8966 15.3329V0H41.1945V15.3329Z"
                        fill="#CE6E6E"
                    />
                    <g id="plants" ref={plantsWrapper}>
                        <path
                            id="Vector_21"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.70056 57.9496L7.10486 56.605L9.74312 48.7975L12.3601 56.8652L9.70056 57.9496Z"
                            fill="#CE6E6E"
                        />
                        <path
                            id="Vector_22"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.40035 58.6633L3.677 56.7331L7.48546 45.4991L11.2088 57.1235L7.40035 58.6633Z"
                            fill="#BDBDBD"
                        />
                        <path
                            id="Vector_23"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.72335 62.5663L0 60.6361L3.80846 49.402L7.55308 61.0265L3.72335 62.5663Z"
                            fill="#DCA6A6"
                        />
                        <path
                            id="Vector_24"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.899 61.9827L8.87775 60.4429L11.9628 51.3776L14.9628 60.7466L11.899 61.9827Z"
                            fill="#DCA6A6"
                        />
                        <path
                            id="Vector_25"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M80.5949 58.6633L84.3395 56.7331L80.5311 45.4991L76.7864 57.1235L80.5949 58.6633Z"
                            fill="#BDBDBD"
                        />
                        <path
                            id="Vector_26"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M72.4241 62.2389L75.0198 60.9159L72.3815 53.0868L69.7858 61.1762L72.4241 62.2389Z"
                            fill="#EBB5B5"
                        />
                        <path
                            id="Vector_27"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M84.2758 62.5663L87.9992 60.6361L84.1907 49.402L80.4673 61.0265L84.2758 62.5663Z"
                            fill="#DCA6A6"
                        />
                        <path
                            id="Vector_28"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M76.1057 62.564L79.1269 61.0242L76.0631 51.9589L73.0419 61.3278L76.1057 62.564Z"
                            fill="#DCA6A6"
                        />
                        <path
                            id="Vector_29"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M80.1013 62.564L83.1226 61.0242L80.0375 51.9589L77.0375 61.3278L80.1013 62.564Z"
                            fill="#DCA6A6"
                        />
                    </g>
                    <path
                        id="Vector_30"
                        opacity="0.5"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M23.2157 62.0494L7.301 62.1362C7.301 62.1362 5.81166 62.4181 5.25847 63.0037C4.30104 64.0013 4.02445 66.1267 5.57762 67.0158C8.06694 68.4255 9.66267 68.252 15.1945 68.252C20.7263 68.252 24.322 69.9436 22.1093 71.0714C19.8966 72.1991 19.2157 74.7365 21.5561 74.7365C22.6625 74.7365 40.6409 75.0185 44.2366 74.7365C47.8323 74.4546 52.4918 71.8304 47.7472 70.0521C45.6621 69.2713 43.6834 69.6617 43.6834 69.6617C43.6834 69.6617 43.2792 67.9701 46.4494 67.9701C47.2791 67.9701 74.9383 68.534 76.0447 66.5604C77.151 64.5869 74.3 62.3314 74.3 62.3314L23.2157 62.0494Z"
                        fill="#7B7B7B"
                    />
                </g>
            </g>
        </svg>
    );
};

Mountain.propTypes = {
    tlSettings: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
};
Mountain.defaultProps = {
    tlSettings: {},
};
