import { keyframes, css } from 'styled-components';
import Constants from 'config/Constants';

const time = Constants.GENERAL.animationTime;

const portfolioProjects = keyframes`
0%{
transform: scale(1,1) translate(0%, 0%);
}
60%{
 transform: scale(1,0.3) translate(0%, -80px);
}
100%{
 transform: scale(2.4,0.3) translate(-20%, -80px);
}
`;
const projectsPortfolio = keyframes`
0%{
 transform: scale(2.4,0.3) translate(-20%, -80px);
}
60%{
 transform: scale(1,0.3) translate(0%, -80px);
}
100%{
 transform: scale(1,1) translate(0%, 0%);
}
`;
const portfolioContact = keyframes`
0%{
transform: scale(1,1) translate(0%, 0%);
}
40%{
 transform: scale(1,0.3) translate(0%, -19vh);
}
70%{
   transform: scale(1,0.3) translate(-45%, -19vh);
}
100%{
 transform: scale(2.7,0.3) translate(-36%, -19vh)
}
`;
const contactPortfolio = keyframes`
0%{
 transform: scale(2.7,0.3) translate(-36%, -19vh)
}
40%{
  transform: scale(1,0.3) translate(-45%, -19vh);
}
70%{
  transform: scale(1,0.3) translate(0%, -19vh);
}
100%{
  transform: scale(1,1) translate(0%, 0%);
}
`;
const contactProjects = keyframes`
0%{
  transform: scale(2.7,0.3) translate(-36%, -19vh)
}
40%{
   transform: scale(2.4,0.3) translate(-36%, -19vh);
}
60%{
  transform: scale(2.4,0.3) translate(-36%, -80px);
}
100%{
  transform: scale(2.4,0.3) translate(-20%, -80px);
}
`;
const projectsContact = keyframes`
0%{
  transform: scale(2.4,0.3) translate(-20%, -80px);
}
40%{
   transform: scale(2.4,0.3) translate(-36%, -80px);
}
60%{
   transform: scale(2.4,0.3) translate(-36%, -19vh);
}
100%{
 transform: scale(2.7,0.3) translate(-36%, -19vh)
}
`;
const MobileRight = css`
  &.prev-portfolio.curr-portfolio {
    transform: scaleY(1) scaleX(1) translate(0%, 0%);
  }
  &.prev-projects.curr-projects {
    transform: scaleY(0.3) scaleX(2.4) translate(-20%, -80px);
  }
  &.prev-contact.curr-contact {
    transform: scale(2.7, 0.3) translate(-36%, -19vh);
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

export default MobileRight;
