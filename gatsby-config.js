module.exports = {
  siteMetadata: {
    title: `www.nathanjgaul.com`,
    description: `This is the personal portfolio of Nathan Gaul (nathanjgaul@gmail.com).`,
    author: `NathanJGaul`,
  },
  plugins: [
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-netlify`,
  ],
};
