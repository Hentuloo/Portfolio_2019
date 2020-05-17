module.exports = {
    pathPrefix: '/en/',
    siteMetadata: {
        title: 'Portfolio - Kamil Chędkowski',
        description: 'Pretendent na Junior Developer',
        author: '@gatsbyjs',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        `gatsby-plugin-styled-components`,
        'gatsby-plugin-resolve-src',
        {
            resolve: 'gatsby-plugin-eslint',
            options: {
                test: /\.js$|\.jsx$/,
                exclude: /(node_modules|.cache|public)/,
                stages: ['develop'],
                options: {
                    emitWarning: true,
                    failOnError: false,
                },
            },
        },
        {
            resolve: 'gatsby-plugin-transition-link',
            options: {
                layout: require.resolve('./src/templates/MainTemplate.js'),
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'gatsby-starter-default',
                short_name: 'starter',
                start_url: '/en/',
                background_color: 'rgba(215,108,108,50%)',
                theme_color: 'rgba(215,108,108,50%)',
                display: 'minimal-ui',
                icon: 'src/images/favicon.png', // This path is relative to the root of the site.
            },
        },
        {
            resolve: 'gatsby-source-graphql',
            options: {
                // This type will contain remote schema Query type
                typeName: 'PORTFOLIO',
                // This is field under which it's accessible
                fieldName: 'portfolio',
                // Url to query from
                url:
                    'https://api-euwest.graphcms.com/v1/cjwjd62bu01ru01b33oksrla4/master',
            },
        },
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {
                // Add any options here
            },
        },
    ],
};
