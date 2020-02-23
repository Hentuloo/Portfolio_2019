import React, { useState, useMemo } from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';

import { useDataApi } from 'api/data';

import Switcher from './Switcher';

const Wrapper = styled.div`
    position: relative;
`;

const SwitchPages = () => {
    const currentLang = useSelector(({ language }) => language);
    const [{ data, photo, pl, en }, setData] = useState({
        data: false,
        photo: null,
        pl: {
            mainPageContent: null,
            projectPage: null,
            projects: null,
        },
        en: {
            mainPageContent: null,
            projectPage: null,
            projects: null,
        },
    });
    const { mainPageContent, projectPage, projects } = useMemo(() => {
        return currentLang === 'en' ? en : pl;
    }, [data]);

    if (!data) {
        const apiData = useDataApi();
        setData({ ...apiData, data: true });
    }

    if (mainPageContent === null || mainPageContent === true) return null;

    return (
        <Wrapper>
            <Switcher
                photo={photo}
                mainPageContent={mainPageContent}
                projects={projects}
                projectPage={projectPage}
            />
        </Wrapper>
    );
};

export default SwitchPages;
