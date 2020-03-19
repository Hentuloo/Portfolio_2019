import React, {
    useRef,
    useEffect,
    useMemo,
    useCallback,
    useState,
} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TimelineLite } from 'gsap';
import {
    introAnimation,
    closeLetter,
    showPureDoc,
    showDocTitle,
    showletterTitles,
    showDocText,
    hideDocumentIntoLetter,
    showStamp,
    sendLetter,
    bellAnim,
    hideElement,
} from './anim';

const Wrapper = styled.div`
    position: absolute;
    display: block;
    width: 120px;
    top: -70px;
    left: 50%;
    transform: translate(-50%, 0%);
    z-index: 10;
    @media (min-width: ${({ theme }) => theme.breakPointMiddle}) {
        width: 150px;
        top: -100px;
    }
`;
const SvgElement = styled.svg`
    max-width: 100%;

    #docRectengle,
    #docTexts,
    #docTitle,
    #letterTitles,
    #Success,
    #plane,
    #Failure {
        visibility: hidden;
    }
`;

export const LetterImage = ({ step }) => {
    // const [startTime, setTweenTime] = useState(0);
    const [, setTweenTime] = useState(0);
    const wrapper = useRef(null);
    const letterOpener = useRef(null);
    const docRectengle = useRef(null);
    const docTexts = useRef(null);
    const docTitle = useRef(null);
    const letterTitles = useRef(null);
    const Success = useRef(null);
    const Failure = useRef(null);
    const plane = useRef(null);

    const generalTl = useMemo(() => new TimelineLite(), []);
    useEffect(() => {
        generalTl
            .addLabel('start')
            .add(introAnimation(wrapper.current), 'start')
            .add(
                closeLetter(letterOpener.current)
                    .duration(0)
                    .reverse(),
                'start',
            );
        setTweenTime(generalTl.time());
    }, []);

    const getRespond = useCallback(respondFlag => {
        generalTl
            .addLabel('success')
            .add(closeLetter(letterOpener.current), 'success')
            .add(introAnimation(wrapper.current), 'success')
            .add(hideElement([letterTitles.current, plane.current]), 'success')
            .add(showStamp(respondFlag ? Success.current : Failure.current));
        setTweenTime(generalTl.time());
    }, []);

    const animationByStep = useCallback(
        choosedStep => {
            switch (choosedStep) {
                case 1:
                    generalTl
                        .add('resetAnim')
                        .add(
                            closeLetter(letterOpener.current).reverse(),
                            'resetAnim',
                        )
                        .add(
                            hideElement([Failure.current, Success.current]),
                            'resetAnim',
                        );
                    break;
                case 2:
                    generalTl
                        .add(bellAnim(wrapper.current))
                        .add(showPureDoc(docRectengle.current), '-=0.3');
                    break;
                case 3:
                    generalTl.add(showDocTitle(docTitle.current));
                    break;
                case 4:
                    generalTl.add(showletterTitles(letterTitles.current));
                    break;
                case 5:
                    generalTl.add(showDocText(docTexts.current.children));
                    break;
                case 6:
                case 'send':
                    {
                        const documentElements = [
                            docTexts.current.children,
                            docTitle.current,
                            docRectengle.current,
                        ];

                        generalTl
                            .add(hideDocumentIntoLetter(documentElements))
                            .add(closeLetter(letterOpener.current))
                            .add(showStamp(plane.current))
                            .add(sendLetter(wrapper.current));
                    }
                    break;
                case 7:
                case 'success':
                    getRespond(true);
                    break;
                case 8:
                case 'failure':
                    getRespond(false);
                    break;
                default:
                    return null;
            }
            return null;
        },
        [generalTl],
    );

    useEffect(() => {
        animationByStep(step);
    }, [step]);
    // useEffect(() => {
    //     if (previous !== 'contact' && previous !== current) {
    //         generalTl.seek(startTime);
    //     }
    // }, [current]);

    return (
        <Wrapper ref={wrapper}>
            <SvgElement
                width="542"
                viewBox="0 0 542 448"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="Group 21">
                    <path
                        ref={letterOpener}
                        id="letterOpener"
                        d="M541.604 175.989L515.628 240.93L421.698 241.683L391.098 241.93L318.482 242.514L287.895 242.761L215.278 243.345L184.691 243.592L112.074 244.19L81.4874 244.436L32.4703 244.826L22.989 225.422L10.6892 200.29L3.89644 186.38L0 175.989L23.3137 102.152C25.5929 94.9372 30.1117 88.6366 36.2143 84.1642C42.3168 79.6918 49.6857 77.2803 57.2516 77.2794H481.417C488.764 77.2835 495.929 79.5599 501.931 83.7966C507.932 88.0333 512.476 94.0228 514.94 100.944L517.641 108.555L541.604 175.989Z"
                        fill="#D76C6C"
                    />
                    <path
                        id="Vector"
                        d="M541.604 175.991H0V312.367H541.604V175.991Z"
                        fill="#D76C6C"
                    />
                    <path
                        id="Vector_2"
                        opacity="0.1"
                        d="M541.604 175.991H0V312.367H541.604V175.991Z"
                        fill="black"
                    />
                    <g ref={docRectengle} id="docRectengle">
                        <path
                            id="Vector_3"
                            d="M443.545 0H96.762V436.401H443.545V0Z"
                            fill="#F2F2F2"
                        />
                    </g>
                    <g ref={docTexts} id="docTexts">
                        <path
                            id="Vector_4"
                            d="M421.466 89.6181H116.245V96.1123H421.466V89.6181Z"
                            fill="#DBDBDB"
                        />
                        <path
                            id="Vector_5"
                            d="M421.466 110.399H116.245V116.893H421.466V110.399Z"
                            fill="#DBDBDB"
                        />
                        <path
                            id="Vector_6"
                            d="M421.466 131.18H116.245V137.674H421.466V131.18Z"
                            fill="#DBDBDB"
                        />
                        <path
                            id="Vector_7"
                            d="M421.466 151.961H116.245V158.455H421.466V151.961Z"
                            fill="#DBDBDB"
                        />
                        <path
                            id="Vector_8"
                            d="M421.466 172.741H116.245V179.235H421.466V172.741Z"
                            fill="#DBDBDB"
                        />
                        <path
                            id="Vector_9"
                            d="M421.466 193.523H116.245V200.017H421.466V193.523Z"
                            fill="#DBDBDB"
                        />
                    </g>
                    <g ref={docTitle} id="docTitle">
                        <path
                            id="Vector_10"
                            d="M270.803 31.1719H169.496V45.4588H270.803V31.1719Z"
                            fill="#B3B2B2"
                        />
                        <path
                            id="Vector_11"
                            d="M129.232 57.1473C124.865 57.1473 120.597 55.8524 116.966 53.4262C113.335 51 110.505 47.5516 108.833 43.5171C107.162 39.4825 106.725 35.043 107.577 30.7599C108.429 26.4769 110.532 22.5427 113.62 19.4547C116.708 16.3668 120.642 14.2639 124.925 13.412C129.208 12.56 133.648 12.9973 137.682 14.6684C141.717 16.3396 145.165 19.1696 147.591 22.8006C150.017 26.4316 151.312 30.7005 151.312 35.0675C151.306 40.9214 148.977 46.5337 144.838 50.673C140.699 54.8124 135.086 57.1408 129.232 57.1473ZM129.232 15.5853C125.379 15.5853 121.613 16.7279 118.409 18.8686C115.205 21.0094 112.708 24.0521 111.233 27.612C109.759 31.1719 109.373 35.0891 110.125 38.8683C110.876 42.6474 112.732 46.1189 115.456 48.8435C118.181 51.5681 121.653 53.4236 125.432 54.1753C129.211 54.9271 133.128 54.5412 136.688 53.0667C140.248 51.5921 143.291 49.095 145.431 45.8912C147.572 42.6874 148.715 38.9207 148.715 35.0675C148.709 29.9023 146.654 24.9503 143.002 21.298C139.35 17.6456 134.398 15.5911 129.232 15.5853Z"
                            fill="#D76C6C"
                        />
                    </g>
                    <path
                        id="letterBox"
                        d="M541.604 447.44H0V175.989L70.136 230.539L474.066 227.941L541.604 175.989V447.44Z"
                        fill="#5B5B5B"
                    />
                    <g ref={letterTitles} id="letterTitles">
                        <path
                            id="Vector_12"
                            d="M129.233 384.448H27.9258V398.735H129.233V384.448Z"
                            fill="#F2F2F2"
                        />
                        <path
                            id="Vector_13"
                            d="M81.0894 357.621C78.8561 357.621 76.6729 356.958 74.8159 355.718C72.9589 354.477 71.5116 352.713 70.6569 350.65C69.8023 348.587 69.5786 346.316 70.0143 344.126C70.4501 341.935 71.5255 339.923 73.1047 338.344C74.684 336.765 76.696 335.69 78.8865 335.254C81.0769 334.818 83.3473 335.042 85.4107 335.896C87.4741 336.751 89.2376 338.198 90.4784 340.055C91.7192 341.912 92.3815 344.095 92.3815 346.329C92.3781 349.323 91.1873 352.193 89.0703 354.31C86.9534 356.426 84.0832 357.617 81.0894 357.621ZM81.0894 336.919C79.2283 336.919 77.409 337.471 75.8615 338.505C74.314 339.539 73.1079 341.008 72.3957 342.728C71.6834 344.447 71.4971 346.339 71.8602 348.165C72.2233 349.99 73.1195 351.667 74.4355 352.983C75.7515 354.299 77.4282 355.195 79.2536 355.558C81.079 355.921 82.971 355.735 84.6905 355.022C86.4099 354.31 87.8796 353.104 88.9136 351.557C89.9476 350.009 90.4995 348.19 90.4995 346.329C90.4967 343.834 89.5044 341.442 87.7403 339.678C85.9761 337.914 83.5843 336.922 81.0894 336.919Z"
                            fill="white"
                        />
                    </g>
                    <g ref={Success} id="Success">
                        <path
                            id="Vector_14"
                            d="M471.162 392.442C453.889 426.987 399.571 419.752 372.26 392.442C344.95 365.131 340.301 315.228 372.26 293.541C393.948 278.824 439.373 293.541 439.373 293.541V298.374C439.373 298.374 397.976 284.817 378.402 298.374C350.141 317.948 354.093 362.096 378.402 386.405C402.711 410.714 451.228 417.238 466.433 386.405C473.932 371.199 466.433 342.991 466.433 342.991H471.162C471.162 342.991 479.798 375.169 471.162 392.442Z"
                            fill="#F2F2F2"
                        />
                        <path
                            id="Vector_15"
                            d="M414.764 375.369C411.973 367.129 376.975 339.115 398.421 334.407L416.008 357.858L496.868 277L505 285.132L414.764 375.369Z"
                            fill="#C16161"
                        />
                    </g>
                    <g ref={Failure} id="Failure">
                        <path
                            id="Vector 4"
                            d="M492 292L471.5 272L422.5 322.5L375 272L355 292L404 344L355 397L375 416.5L422.5 366.5L471.5 416.5L492 397L442.5 344L492 292Z"
                            fill="#C16161"
                        />
                    </g>
                    <g ref={plane} id="plane">
                        <g id="Group">
                            <path
                                id="Vector_16"
                                opacity="0.8"
                                d="M438.862 398.463L444.928 384.103L483.151 314.019L338.385 354.192C350.687 356.361 374.187 365.356 374.187 365.356C374.187 365.356 382.234 388.011 387.661 398.463C398.24 391.184 410.374 381.14 410.374 381.14C410.374 381.14 427.522 388.979 438.862 398.463Z"
                                fill="#C16161"
                            />
                        </g>
                        <g id="layer1">
                            <g id="Group 28">
                                <path
                                    id="path4718"
                                    d="M338.129 354.152L484.999 313L439.45 397.98L397.122 369.835L484.783 313.142L392.227 368.896L386.59 397.431L375.274 365.967L484.768 313.135L373.239 363.825L338.129 354.152Z"
                                    fill="#F2F2F2"
                                />
                                <path
                                    id="path4720"
                                    d="M389.445 398.062L408.29 380.791L396.112 371.886L389.445 398.062Z"
                                    fill="#F2F2F2"
                                />
                            </g>
                        </g>
                    </g>
                </g>
            </SvgElement>
        </Wrapper>
    );
};
LetterImage.propTypes = {
    step: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
