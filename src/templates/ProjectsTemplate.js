import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

import ProjectBox from 'components/molecules/ProjectBox/ProjectBox';
import Markdown from 'components/molecules/Markdown/Markdown';

const opacity = keyframes`
from{
opacity:0;
}
to{
opacity:1;
}
`;

const ProjectsBox = styled.section`
    margin: 30px 0px;
    z-index: 3;

    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        flex-basis: 60%;
        min-width: 400px;
        min-height: 200px;
        margin: 40px 0px;
        & > div {
            min-height: 210px;
        }
    }
    @media (min-width: ${({ theme }) => theme.breakPointMiddle}) {
        flex-basis: 45%;
    }
`;
const MarkdownWrapper = styled.div`
    width: 90%;
    margin: 0px auto;
    opacity: 0;
    animation: ${opacity} 0.5s linear forwards;
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
    margin-bottom: 150px;
    width: 100%;
    overflow: hidden;
    padding: 0px 20px;
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        width: 95%;
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
    margin: 30px auto 0px auto;
`;
class Projects extends Component {
    state = {
        markdownLoaded: false,
    };

    componentDidMount() {
        const { markdownLoaded } = this.state;
        if (!markdownLoaded) {
            setTimeout(() => {
                this.setState({ markdownLoaded: true });
            }, 900);
        }
        return null;
    }

    render() {
        const { markdownLoaded } = this.state;
        const { projects, markdownContent } = this.props;
        return (
            <Wrapper>
                <MarkdownWrapper>
                    <Markdown markdown={markdownContent} />
                </MarkdownWrapper>
                {markdownLoaded && (
                    <ProjectsWrapper>
                        {projects.map(e => (
                            <ProjectsBox key={e.id}>
                                <ProjectBox data={e} />
                            </ProjectsBox>
                        ))}
                    </ProjectsWrapper>
                )}
            </Wrapper>
        );
    }
}

Projects.propTypes = {
    markdownContent: PropTypes.string.isRequired,
    projects: PropTypes.arrayOf(Object).isRequired,
};

export default Projects;
