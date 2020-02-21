import React, { memo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ProjectsWrapper from './ProjectsWrapper';
import SkillsSwitcher from './SkillsSwitcher/SkillsSwitcher';

const Wrapper = styled.div`
    width: 100%;
    min-height: 110vh;
    height: 100%;
    padding-bottom: 60vh;
    margin: 30px auto 0px auto;
`;

const StyledProjectsWrapper = styled(ProjectsWrapper)`
    display: block;
    width: 100%;
    max-width: 370px;
    margin: 0px auto 150px;
    padding: 0px 20px;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        display: flex;
        width: 95%;
        max-width: none;
        margin: 0px auto;
    }
`;

const Projects = ({ projects, data }) => {
    return (
        <Wrapper>
            <SkillsSwitcher data={data} />
            <StyledProjectsWrapper projects={projects} />
        </Wrapper>
    );
};

Projects.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string,
            title: PropTypes.string,
            content: PropTypes.arrayOf(
                PropTypes.shape({
                    title: PropTypes.string,
                    paragraph: PropTypes.string,
                }),
            ),
        }),
    ).isRequired,
    projects: PropTypes.arrayOf(Object).isRequired,
};

export default memo(Projects, (prev, next) => prev.data === next.data);
