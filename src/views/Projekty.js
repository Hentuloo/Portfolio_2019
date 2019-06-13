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
  transform: translateX(-150%);
}
to{
   transform:translateX(0%);
}
`;
const fromRight = keyframes`
from{
  transform: translateX(150%);
}
to{
   transform:translateX(0%);
}
`;
const ProjektyAnimatedBox = styled.section`
 margin: 30px 0px;
 ${({ index }) =>
   index < 4 && // first four boxes are animate
   css`
     ${({ even }) =>
       even &&
       css`
         transform: translateX(-150%);
         animation: ${fromLeft} 0.5s ${({ animationDelay }) => animationDelay}
           linear forwards;
       `}
     ${({ even }) =>
       !even &&
       css`
         transform: translateX(150%);
         animation: ${fromRight} 0.5s ${({ animationDelay }) => animationDelay}
           linear forwards;
       `}
   `}
      @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
        flex-basis:44%;
        min-width:400px;
        min-height:200px;
         margin: 40px 0px;
        &>div{
          min-height:240px;
        }
      }
`;
const MarkdownWrapper = styled.div`
  width: 90%;
  margin: 0px auto;
  opacity: 0;
  animation: ${opacity} 0.5s 0.6s linear forwards;
  position: relative;
  @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
    width: 80%;
    max-width: 1100px;
    margin-bottom: 3s0px;
    margin-top: 20px;
    &::after {
      content: '';
      width: 120px;
      height: 80px;
      position: absolute;
      bottom: 0%;
      right: 0%;
      background-color: ${({ theme }) => theme.redFirst};
      z-index: 7;
      transform: translate(45%, 45%);
    }
  }
`;
const ProjektyWrapper = styled.div`
  display: block;
  margin-bottom: 150px;
  width: 100%;
  overflow: hidden;
  padding: 0px 20px;
  @media (min-width: ${({ theme }) => theme.breakPointMobile}) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  min-height: 110vh;
  margin: 10px auto 0px auto;
`;

const ProjectsBoxes = (data, animationStartFrom, animationDelay) => {
  let Delay = animationStartFrom;
  const projects = data.map((e, i) => {
    Delay += animationDelay;
    if (i <= 4) {
      return (
        <ProjektyAnimatedBox
          key={e.id}
          index={i}
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
            technologies(orderBy: index_ASC) {
              id
              handle
              width
              height
              fileName
              title
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
