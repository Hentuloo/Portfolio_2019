import { keyframes, css } from 'styled-components';
import Constants from 'config/Constants';

const time = Constants.GENERAL.animationTime;

const portfolioProjects = keyframes`
0%{
transform: scale(1,1) translate(0%, 0%);
}
50%{
 transform: scale(1,0.5) translate(0%, -50%);
}
70%{
 transform: scale(1,0.5) translate(-6vw, -50%);
}
100%{
transform: scale(2.8,0.5) translate(-6vw, -50%);
}
`;
const projectsPortfolio = keyframes`
0%{
  transform: scale(2.8,0.5) translate(-6vw, -50%);
}
50%{
  transform: scale(1,0.5) translate(-6vw, -50%);
}
70%{
 transform: scale(1,0.5) translate(0%, -50%);
}
100%{
  transform: scale(1,1) translate(0%, 0%);
}
`;
const portfolioContact = keyframes`
0%{
transform: scale(1,1) translate(0%, 0%);
}
50%{
 transform: scale(1,0.27) translate(0%,  -36vh);
}
70%{
   transform: scale(1,0.27) translate(-38%,  -36vh);
}
100%{
 transform: scale(3.3,0.27) translate(-38%, -36vh);
}
`;
const contactPortfolio = keyframes`
0%{
  transform: scale(3.3,0.27) translate(-38%, -36vh);

}
50%{
  transform: scale(1,0.27) translate(-38%,  -36vh);
}
70%{
  transform: scale(1,0.27) translate(0%,  -36vh);
}
100%{
 transform: scale(1,1) translate(0%, 0%);
}
`;
const contactProjects = keyframes`
0%{
   transform: scale(2.8,0.5) translate(-6vw, -50%);
}
50%{
   transform:scale(2.8,0.27) translate(-6vw, -36vh);
}
70%{
   transform:scale(2.8,0.27) translate(-6vw, -36vh);
}
100%{
  transform: scale(3.3,0.27) translate(-38%, -36vh);
}
`;
const projectsContact = keyframes`
0%{
   transform: scale(3.3,0.27) translate(-38%, -36vh);
  
}
50%{
  transform: scale(2.8,0.27) translate(-6vw, -36vh);
}
70%{
   transform: scale(2.8,0.27) translate(-6vw, -36vh);
}
100%{
  transform: scale(2.8,0.5) translate(-6vw, -50%);
}
`;

const DesktopRight = css`
  &.prev-portfolio.curr-portfolio {
    transform: scale(1, 1) translate(0%, 0%);
  }
  &.prev-projects.curr-projects {
    transform: scale(2.8, 0.5) translate(-6vw, -50%);
  }
  &.prev-contact.curr-contact {
    transform: scale(3.3, 0.27) translate(-38%, -36vh);
  }

  &.prev-portfolio.curr-projects {
    animation: ${portfolioProjects} ${time} linear forwards;
  }
  &.prev-projects.curr-portfolio {
    animation: ${projectsPortfolio} ${time} linear forwards;
  }
  &.prev-portfolio.curr-contact {
    animation: ${portfolioContact} ${time} linear forwards;
  }
  &.prev-contact.curr-portfolio {
    animation: ${contactPortfolio} ${time} linear forwards;
  }
  &.prev-projects.curr-contact {
    animation: ${projectsContact} ${time} linear forwards;
  }
  &.prev-contact.curr-projects {
    animation: ${contactProjects} ${time} linear forwards;
  }
`;
export default DesktopRight;
