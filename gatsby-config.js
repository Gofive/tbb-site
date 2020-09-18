module.exports = {
  plugins: [
    "gatsby-plugin-svgr",
    "gatsby-plugin-top-layout",
    {
      resolve: "gatsby-plugin-material-ui",
      options: {
        stylesProvider: {
          injectFirst: true,
        },
        disableAutoprefixing: true,
        disableMinification: true,
      },
    },
    // If you want to use styled components you should add the plugin here.
    // "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
  ],
  siteMetadata: {
    title: "My page",
  },
};
