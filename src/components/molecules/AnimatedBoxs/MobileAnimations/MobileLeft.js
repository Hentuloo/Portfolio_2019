import { keyframes, css } from 'styled-components';
import Constants from 'config/Constants';

const time = Constants.GENERAL.animationTime;

const portfolioProjects = keyframes`
0%{
transform: scale(1, 1) translate(0%, 0%);
}
60%{
 transform: scale(1, 0.2) translate(0%, 300px);
}
100%{
 transform: scale(3, 0.2) translate(20%, 300px);
}
`;
const projectsPortfolio = keyframes`
0%{
  transform: scale(3,0.2) translate(20%, 300px);
}
60%{
 transform: scale(1,0.2) translate(0%, 300px);
}
100%{
 transform: scale(1,1) translate(0%, 0%);
}
`;
const portfolioContact = keyframes`
0%{
  transform:  scale(1,1) translate(0%, 0%);
}
60%{
 transform: scale(1,0.4) translate(0%, 43vh);
}
100%{
  transform: scale(4.3,0.4) translate(20%,43vh);
}
`;
const contactPortfolio = keyframes`
0%{
 transform: scale(4.3,0.4) translate(20%,43vh);
}
60%{
 transform: scale(1,0.4) translate(0%, 43vh);
}
100%{
 transform:  scale(1,1) translate(0%, 0%);
}
`;

const projectsContact = keyframes`
0%{
    transform: scale(3,0.2) translate(20%, 300px);
}
40%{
   transform: scale(3,0.2) translate(20%, 43vh);
}
70%{
   transform: scale(4.3,0.2) translate(20%, 43vh);
}
100%{
 transform: scale(4.3,0.4) translate(20%, 43vh);
}
`;
const contactProjects = keyframes`
0%{
  transform: scale(4.3,0.4) translate(20%, 43vh);
}
40%{
   transform: scale(4.3,0.2) translate(20%, 43vh);
}
70%{
  transform: scale(3,0.2) translate(20%, 43vh);
}
100%{
  transform: scale(3,0.2) translate(20%, 300px);
}
`;

const MobileLeft = css`
    &.prev-portfolio.curr-portfolio {
        transform: scale(1, 1) translate(0%, 0%);
    }
    &.prev-projects.curr-projects {
        transform: scaleY(0.2) scaleX(3) translate(20%, 300px);
    }
    &.prev-contact.curr-contact {
        transform: scaleY(0.4) scaleX(4.3) translate(20%, 43vh);
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
export default MobileLeft;
