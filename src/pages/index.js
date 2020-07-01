import React from 'react';
import PropTypes from 'prop-types';
import SEO from 'components/organisms/SEO';
import PortfolioPage from 'views/Portfolio/PortfolioPage';

const App = ({ mainPageContent, photo, ...props }) => {
    return (
        <>
            <SEO />
            <PortfolioPage
                photo={photo}
                content={mainPageContent}
                email="chentulooo@gmail.com"
                headLine="Kamil Chędkowski"
                {...props}
            />
        </>
    );
};
App.propTypes = {
    mainPageContent: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.arrayOf(PropTypes.string),
            ]),
            paragraph: PropTypes.string,
        }),
    ).isRequired,
    photo: PropTypes.shape({
        handle: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
    }).isRequired,
    projectPage: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string,
            title: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.arrayOf(PropTypes.string),
            ]),
            content: PropTypes.arrayOf(
                PropTypes.shape({
                    title: PropTypes.string,
                    paragraph: PropTypes.string,
                }),
            ),
        }),
    ).isRequired,
    projects: PropTypes.arrayOf(Object).isRequired,
};
export default App;
