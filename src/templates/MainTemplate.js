import '@openfonts/baloo-tamma_latin-ext';
import '@openfonts/roboto_latin-ext';

import React, { useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { BackgroundView } from 'components/atoms';
import { BackgroudBoxes, LanguageButtons, Cursor } from 'components/molecules';

import { Menu } from 'components/organisms';
import GlobalStyle from 'themes/GlobalStyles';
import { theme } from 'themes/mainTheme';
import { WithIntroAnimation } from 'providers/WithIntroAnimation';
import { useSelector } from 'react-redux';
import { useDataApi } from 'api/data';
import 'config/gsapConfig';

const Content = styled.div`
    @media (min-width: ${theme.breakPointMobile}) {
        flex-grow: 1;
    }
`;
const ContentWrapper = styled.div`
    @media (min-width: ${theme.breakPointMobile}) {
        display: flex;
        padding-left: 150px;
    }
`;

const MainTemplate = ({
    children,
    pageResources: { component: Component },
    path,
    ...props
}) => {
    const currentLang = useSelector(({ language }) => language);
    const [showContent, setShowContent] = useState(false);
    const { en, pl, photo } = useDataApi();
    const data = useMemo(() => {
        return currentLang === 'en' ? en : pl;
    }, [en, pl, currentLang]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [path]);

    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <WithIntroAnimation
                    showContent={showContent}
                    setShowContent={setShowContent}
                    render={() => (
                        <>
                            <BackgroudBoxes />
                            <LanguageButtons currentLang={currentLang} />
                            <ContentWrapper>
                                <Menu showContent={showContent} />
                                {showContent && (
                                    <Content>
                                        <Component
                                            {...props}
                                            {...data}
                                            photo={photo}
                                        />
                                    </Content>
                                )}
                            </ContentWrapper>
                            <BackgroundView />
                        </>
                    )}
                />
                <Cursor />
            </ThemeProvider>
        </>
    );
};

MainTemplate.propTypes = {
    children: PropTypes.node.isRequired,
    path: PropTypes.string.isRequired,
    pageResources: PropTypes.shape({
        component: PropTypes.func,
    }).isRequired,
};

export default MainTemplate;
