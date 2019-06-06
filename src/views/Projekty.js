import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
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
const fromLeft = keyframes`
from{
  transform: translateX(-130%);
}
to{
   transform:translateX(0%);
}
`;
const fromRight = keyframes`
from{
  transform: translateX(130%);
}
to{
   transform:translateX(0%);
}
`;
const ProjektyAnimatedBox = styled.div`
  ${({ even }) =>
    even &&
    css`
      transform: translateX(-130%);
      animation: ${fromLeft} 0.6s ${({ animationDelay }) => animationDelay}
        linear forwards;
    `}
  ${({ even }) =>
    !even &&
    css`
      transform: translateX(130%);
      animation: ${fromRight} 0.6s ${({ animationDelay }) => animationDelay}
        linear forwards;
    `}
`;
const MarkdownWrapper = styled.div`
  width: 90%;
  margin: 0px auto;
  opacity: 0;
  animation: ${opacity} 0.5s 0.6s linear forwards;
`;
const ProjektyWrapper = styled.section`
  display: block;
  margin-bottom: 150px;
  width: 100%;
  overflow: hidden;
  padding: 0px 20px;
  & > div {
    margin: 30px 0px;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  min-height: 110vh;
  margin: 40px auto 0px auto;
`;

const ProjectsBoxes = (data, animationStartFrom, animationDelay) => {
  let Delay = animationStartFrom;
  const projects = data.map((e, i) => {
    Delay += animationDelay;
    if (i < 2) {
      return (
        <ProjektyAnimatedBox
          key={e.id}
          even={i % 2 === 0}
          animationDelay={`${Delay}s`}
        >
          <ProjectBox data={e} />
        </ProjektyAnimatedBox>
      );
    }
    return (
      <ProjektyAnimatedBox key={e.id}>
        <ProjectBox data={e} />
      </ProjektyAnimatedBox>
    );
  });
  return projects;
};

const Projekty = ({ data }) => {
  const projects = data.portfolio.projectses;
  const markdownContent = data.portfolio.projectsPages[0].content;
  return (
    <Wrapper>
      <MarkdownWrapper>
        <Markdown markdown={markdownContent} />
      </MarkdownWrapper>
      <ProjektyWrapper>{ProjectsBoxes(projects, 0.3, 0.2)}</ProjektyWrapper>
    </Wrapper>
  );
};

Projekty.propTypes = {
  data: PropTypes.objectOf(Object),
};
Projekty.defaultProps = {
  data: null,
};

export default () => (
  <StaticQuery
    query={graphql`
      {
        portfolio {
          projectsPages {
            content
          }
          projectses(orderBy: index_DESC) {
            id
            title
            description
            gitLink
            liveLink
            technologies {
              id
              handle
              width
              height
              fileName
            }
            photo {
              handle
              width
              height
            }
          }
        }
      }
    `}
    render={data => <Projekty data={data} />}
  />
);
