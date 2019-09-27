import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import PortfolioTemplate from 'templates/PortfolioTemplate';

const Portfolio = ({ data }) => {
  const { content, photo } = data.portfolio.mainPages[0];

  return <PortfolioTemplate photo={photo} content={content} />;
};

Portfolio.propTypes = {
  data: PropTypes.objectOf(Object),
};
Portfolio.defaultProps = {
  data: null,
};

export default () => (
  <StaticQuery
    query={graphql`
      {
        portfolio {
          mainPages {
            content: contentEng
            photo {
              handle
              width
              height
            }
          }
        }
      }
    `}
    render={data => <Portfolio data={data} />}
  />
);
