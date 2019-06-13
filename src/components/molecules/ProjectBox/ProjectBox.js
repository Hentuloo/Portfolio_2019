import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import GraphImg from 'graphcms-image';

const Icon = styled.div`
  position: relative;
  cursor: pointer;
  span {
    opacity: 0;
    font-size: ${({ theme }) => theme.font.xxxs};
    position: absolute;
    bottom: 0%;
    left: 50%;
    transform: translate(-50%, 150%);
    padding: 2px 8px;
    background-color: ${({ theme }) => theme.graySecond};
    border: 1px solid black;
    border-radius: 5px;
    white-space: nowrap;
    z-index: 7;
  }
  &:hover span {
    opacity: 1;
  }
`;
const Icons = styled.div`
  flex-basis: 100%;
  min-height: 25px;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  position: relative;
  padding: 3px 8px;

  div {
    width: 25px;
    height: 25px;
    margin: 0px 2px;
  }
  img {
    width: 100%;
  }
`;
const Description = styled.p`
  flex-basis: 100%;
  margin: 5px 5px 8px 3px;
  font-size: ${({ theme }) => theme.font.xxs};
  line-height: ${({ theme }) => theme.font.s};
`;
const Links = styled.div`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.font.xxxs};
  a {
    display: inline-block;
    height: 30px;
    text-decoration: none;
    background-color: white;
    padding: 0px 4px;
    margin: 6px 4px;
    color: black;
    line-height: 30px;
  }
`;
const TitleLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 50px;
  text-align: center;
  font-size: ${({ theme }) => theme.font.xs};
  line-height: ${({ theme }) => theme.font.s};
  h2 {
    flex-basis: 100%;
    font-family: 'Baloo Tamma', cursive;
    font-size: ${({ theme }) => theme.font.xs};
    text-transform: uppercase;
    margin: 0px;
  }
`;
const TittleWrapper = styled.div`
  flex-basis: 45%;
  padding-left: 10px;
  padding: 7px;
`;
const ProjectImage = styled.div`
  position: relative;
  flex-basis: 55%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  overflow: hidden;
  img {
    position: absolute;
    max-width: 100%;
    top: 50%;
    left: 50%;
  }
`;
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  min-height: 130px;
  background-color: ${({ theme }) => theme.grayFirst};
  box-shadow: 0 0 20px 1px ${({ theme }) => theme.grayDark};
  border: 1px solid ${({ theme }) => theme.grayDark};
  border-radius: 5px;
  font-family: 'Rhodium Libre', serif;
`;
const ProjectBox = ({ data }) => {
  const { title, description, gitLink, liveLink, photo, technologies } = data;
  return (
    <Wrapper>
      <ProjectImage>
        <GraphImg image={photo} maxWidth={600} alt={title} />
      </ProjectImage>
      <TittleWrapper>
        <TitleLinks>
          <h2>{title}</h2>
          <Links>
            {gitLink && (
              <a target="_blank" rel="noopener noreferrer" href={gitLink}>
                Github
              </a>
            )}
            {liveLink && (
              <a target="_blank" rel="noopener noreferrer" href={liveLink}>
                LIVE
              </a>
            )}
          </Links>
        </TitleLinks>
      </TittleWrapper>
      <Description>{description}</Description>
      <Icons>
        {technologies.map(e => (
          <Icon key={e.id}>
            <GraphImg image={e} alt={e.fileName} maxWidth={100} />
            <span>{e.title}</span>
          </Icon>
        ))}
      </Icons>
    </Wrapper>
  );
};
ProjectBox.propTypes = {
  data: PropTypes.objectOf(Object),
};
ProjectBox.defaultProps = {
  data: null,
};
export default ProjectBox;
