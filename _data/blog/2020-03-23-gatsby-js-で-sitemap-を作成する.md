---
template: BlogPost
path: /gatsby-plugin-sitemap
date: 2020-03-23T12:56:54.456Z
title: Gatsby.js で sitemap を作成する
thumbnail: /assets/www.gatsbyjs.org_packages_gatsby-plugin-sitemap_.png
metaDescription: gatsby.js で sitemapの作成をする
---
# 概要

* ブログのアクセス数が0だった
* gatsby.js SEO でぐぐったら sitemap を作成する plugin があったので入れた

# やったこと

```
# bash
$ npm install --save gatsby-plugin-sitemap
```

```
# gatsby-config.js
siteMetadata: {
  siteUrl: `https://www.example.com`,
},
plugins: [`gatsby-plugin-sitemap`]
```
