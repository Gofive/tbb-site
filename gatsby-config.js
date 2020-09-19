module.exports = {
  plugins: [
    "gatsby-plugin-svgr",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-material-ui",
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
  ],
  siteMetadata: {
    title: "豚宝宝",
  },
};
