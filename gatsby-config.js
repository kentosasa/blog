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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-129590043-2",
        // this option places the tracking script into the head of the DOM
        head: true,
        // other options
      }
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
  ],
}
