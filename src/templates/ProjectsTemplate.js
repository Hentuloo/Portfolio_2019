import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

import { ProjectCard, Markdown } from 'components/organisms';

const opacity = keyframes`
from{
opacity:0;
}
to{
opacity:1;
}
`;

const ProjectCardWrapper = styled.section`
    margin: 30px auto;
    max-width: 90%;

    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        flex-basis: 45%;
        max-width: 400px;
        margin: 40px 0px;
    }
    @media (min-width: ${({ theme }) => theme.breakPointMiddle}) {
        flex-basis: 29%;
    }
    @media (min-width: ${({ theme }) => theme.breakPointLarge}) {
        margin: 40px 10px;
    }
`;
const MarkdownWrapper = styled.div`
    width: 90%;
    margin: 0px auto;
    opacity: 0;
    animation: ${opacity} 0.5s 0.2s linear forwards;
    position: relative;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        width: 80%;
        max-width: 1100px;
        margin-bottom: 30px;
        margin-top: 20px;
        &::before {
            content: '';
            width: 120px;
            height: 80px;
            position: absolute;
            bottom: 0%;
            right: 0%;
            background-color: ${({ theme }) => theme.redFirst};
            transform: translate(45%, 45%);
        }
    }
`;
const ProjectsWrapper = styled.div`
    display: block;
    width: 100%;
    max-width: 370px;
    margin: 0px auto 150px;
    padding: 0px 20px;
    opacity: 0;
    animation: ${opacity} 0.1s 1s linear forwards;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        width: 95%;
        max-width: none;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        margin: 0px auto;
    }
`;
const Wrapper = styled.div`
    width: 100%;
    min-height: 110vh;
    height: 100%;
    padding-bottom: 60vh;
    margin: 30px auto 0px auto;
`;

const Projects = ({ projects, markdownContent }) => {
    return (
        <Wrapper>
            <MarkdownWrapper>
                <Markdown markdown={markdownContent} />
            </MarkdownWrapper>

            <ProjectsWrapper>
                {projects.map(e => (
                    <ProjectCardWrapper key={e.id}>
                        <ProjectCard data={e} />
                    </ProjectCardWrapper>
                ))}
            </ProjectsWrapper>
        </Wrapper>
    );
};

Projects.propTypes = {
    markdownContent: PropTypes.string.isRequired,
    projects: PropTypes.arrayOf(Object).isRequired,
};

export default Projects;
