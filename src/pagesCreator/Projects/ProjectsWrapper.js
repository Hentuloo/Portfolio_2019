import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ProjectCard } from 'components/organisms';

const Wrapper = styled.div`
    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
    }
`;

const ProjectCardWrapper = styled.section`
    margin: 30px auto;
    width: 94%;
    max-width: 310px;

    @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        flex-basis: 29%;
        max-width: 310px;
        margin: 40px 0px;
    }
    @media (min-width: ${({ theme }) => theme.breakPointMiddle}) {
        flex-basis: 27%;
    }
    @media (min-width: ${({ theme }) => theme.breakPointLarge}) {
        margin: 40px 10px;
        flex-basis: 25%;
    }
`;

const ProjectsWrapper = ({ className, projects }) => {
    return (
        <Wrapper className={className}>
            {projects.map(e => (
                <ProjectCardWrapper key={e.id}>
                    <ProjectCard data={e} />
                </ProjectCardWrapper>
            ))}
        </Wrapper>
    );
};

ProjectsWrapper.propTypes = {
    className: PropTypes.string,
    projects: PropTypes.arrayOf(Object).isRequired,
};
ProjectsWrapper.defaultProps = {
    className: '',
};

export default ProjectsWrapper;
