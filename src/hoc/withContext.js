import React from 'react';
import langContext from 'context/langContext';
import pageContext from 'context/pageContext';

const withContext = Component => {
  return function contextComponent(props) {
    return (
      <langContext.Consumer>
        {lang => (
          <pageContext.Consumer>
            {page => (
              <Component {...props} pageContext={page} langContext={lang} />
            )}
          </pageContext.Consumer>
        )}
      </langContext.Consumer>
    );
  };
};

export default withContext;
