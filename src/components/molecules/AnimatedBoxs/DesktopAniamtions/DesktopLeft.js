import { keyframes, css } from 'styled-components';
import Constants from 'config/Constants';

const time = Constants.GENERAL.animationTime;

const portfolioProjects = keyframes`
0%{
transform: scale(1,1) translate(0%, 0%);
}
60%{
 transform: scale(1,1) translate(0%,35vh);
}
70%{
 transform: scale(1,1) translate(0%,35vh);
}
100%{
transform: scale(1.7,1) translate(11vw, 35vh);
}
`;
const projectsPortfolio = keyframes`
0%{
  transform: scale(1.7,1) translate(11vw, 35vh);
}
60%{
  transform: scale(1,1) translate(0%,35vh);
}
70%{
  transform: scale(1,1) translate(0%,35vh);
}
100%{
  transform: scale(1,1) translate(0%, 0%);
}
`;
const portfolioContact = keyframes`
0%{
transform: scale(1,1) translate(0%, 0%);
}
60%{
 transform: scale(1,0.4) translate(0%, 38vh);
}
100%{
 transform: scale(6,0.4) translate(-11%, 38vh);
}
`;
const contactPortfolio = keyframes`
0%{
 transform: scale(6,0.4) translate(-11%, 38vh);
}
60%{
 transform: scale(1,0.4) translate(0%, 38vh);
}
100%{
transform: scale(1,1) translate(0%, 0%);
}
`;
const projectsContact = keyframes`
0%{
    transform: scale(1.7,1) translate(11vw, 35vh);
}
60%{
   transform: scale(1.7,0.4) translate(11vw, 35vh);
}
100%{
  transform:  scale(6,0.4) translate(-11%, 38vh);
}
`;
const contactProjects = keyframes`
0%{
  transform:  scale(6,0.4) translate(-11%, 38vh);
}
60%{
  transform: scale(1.7,0.4) translate(11vw, 35vh);
}
100%{
  transform: scale(1.7,1) translate(11vw, 35vh);
}
`;

const DesktopLeft = css`
    &.prev-portfolio.curr-portfolio {
        transform: scale(1, 1) translate(0%, 0%);
    }
    &.prev-projects.curr-projects {
        transform: scale(1.7, 1) translate(11vw, 35vh);
    }
    &.prev-contact.curr-contact {
        transform: scale(6, 0.4) translate(-11%, 38vh);
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
export default DesktopLeft;
