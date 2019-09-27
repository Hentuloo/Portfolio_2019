import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import ProjectsTemplate from 'templates/ProjectsTemplate';

const Projects = ({ data }) => {
  const projects = data.portfolio.projectses;
  const markdownContent = data.portfolio.projectsPages[0].content;

  return (
    <ProjectsTemplate projects={projects} markdownContent={markdownContent} />
  );
};

Projects.propTypes = {
  data: PropTypes.objectOf(Object),
};
Projects.defaultProps = {
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
    render={data => <Projects data={data} />}
  />
);
