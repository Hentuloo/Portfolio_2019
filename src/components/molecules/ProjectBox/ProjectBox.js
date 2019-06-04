import React from 'react';
import styled from 'styled-components';

const Icons = styled.div`
  margin-left: auto;
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: flex-end;
  img {
    max-width: 30px;
    max-height: 30px;
    margin: 2px 5px;
  }
`;
const Description = styled.div`
  margin: 10px 5px 3px 8px;
  font-size: ${({ theme }) => theme.font.xs};
  line-height: ${({ theme }) => theme.font.s};
`;
const Links = styled.div`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.font.xxs};
  a {
    display: inline-block;
    height: 40px;
    margin: 6px 0px;
    text-decoration: none;
    background-color: white;
    padding: 0px 4px;
    margin: 0px 2px;
    color: black;
    line-height: 40px;
  }
`;
const TitleLinks = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  font-size: ${({ theme }) => theme.font.xs};
  line-height: ${({ theme }) => theme.font.s};
  h2 {
    font-family: 'Baloo Tamma', cursive;
    text-transform: uppercase;
    margin: 0px;
  }
`;
const TextWrapper = styled.div`
  flex-basis: 60%;
  padding-left: 10px;
  padding: 7px;
`;
const ProjectImage = styled.div`
  position: relative;
  flex-basis: 40%;
  min-height: 100px;
  background-color: white;
  overflow: hidden;
  img {
    position: absolute;
    max-width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
const Wrapper = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  min-height: 100px;
  background-color: ${({ theme }) => theme.grayFirst};
  box-shadow: 0 0 20px 1px ${({ theme }) => theme.grayDark};
  border: 1px solid ${({ theme }) => theme.grayDark};
  border-radius: 5px;
  font-family: 'Rhodium Libre', serif;
`;
const ProjectBox = () => {
  // { image, title, description, liveUrl, GitUrl, icons }
  return (
    <Wrapper>
      <ProjectImage>
        <img src="https://unsplash.it/300/200" alt="title" />
      </ProjectImage>
      <TextWrapper>
        <TitleLinks>
          <h2>Orkiestra Goles</h2>
          <Links>
            <a href="/">LIVE</a>
            <a href="/">GitHub</a>
          </Links>
        </TitleLinks>
        <Description>
          adfs dfsa sdaf sda fsxf asdf asdfasdfads fasdf asdfsadf sdaf asdf asd
          asdf adfs fasd fdsaf adsf dfsa sad faasd ad f
        </Description>
        <Icons>
          <img src="https://unsplash.it/50/50" alt="title" />
          <img src="https://unsplash.it/50/50" alt="title" />
          <img src="https://unsplash.it/50/50" alt="title" />
          <img src="https://unsplash.it/50/50" alt="title" />
          <img src="https://unsplash.it/50/50" alt="title" />
          <img src="https://unsplash.it/50/50" alt="title" />
          <img src="https://unsplash.it/50/50" alt="title" />
        </Icons>
      </TextWrapper>
    </Wrapper>
  );
};

export default ProjectBox;
