/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `fablog`,
    description: `ご飯とかお金とかについて考えるのが好きなエンジニアのブログです`,
    siteUrl: `https://fablog.netlify.com/`,
    home: {
      title: `Fablog`,
      description: `ご飯とかお金とかについて考えるのが好きなエンジニアのブログです`,
    },
    /* W3Layouts domain verification key for contact forms https://my.w3layouts.com/Forms/ */
    w3l_dom_key: ``
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/_data`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
          resolve: `gatsby-remark-prismjs`,
          options: {
            classPrefix: "language-",
            inlineCodeMarker: null,
            aliases: {},
            showLineNumbers: false,
            noInlineHighlight: false,
          },
        },
        {
          resolve: 'gatsby-remark-emojis',
        }],
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyBMAwicuj8ts4XIELdScDdQZqtZwIMSq48",
          authDomain: "blog-c8206.firebaseapp.com",
          databaseURL: "https://blog-c8206.firebaseio.com",
          projectId: "blog-c8206",
          storageBucket: "blog-c8206.appspot.com",
          messagingSenderId: "1008103351474",
          appId: "1:1008103351474:web:294c231141d964e32215ab",
          measurementId: "G-T546T7PXM1"
        }
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
  ],
}
