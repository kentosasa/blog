---
template: BlogPost
path: gatsby-netlify-cms
date: 2020-03-19T13:27:43.380Z
title: Gatsby+Netlify でサーバーレスなブログを開設しました
thumbnail: /assets/スクリーンショット 2020-03-19 22.06.51.png
metaDescription: no description
---
# 背景

* **ブログの固定費をかけず**にエンジニアっぽい個人ブログを作成したかったので**サーバーレスのブログを開設**したかった
* 静的サイトジェネレーターで個人サイトを作ったことはあったが、CMS的な機能がなく辛かったので前回は断念していた

  * いい感じのライブラリとかないかなと探していたら、**netifyがCMSを提供していた**のでそれを使うことにした
* 静的サイトジェネレーターはなんでも良かったが、たまたま参考にしたサイトがGatsbyを使っていたのでそのままGatsbyを使うことにした

# 成果物

この[ブログサイト](https://fablog.netlify.com)

# 参考

* <https://github.com/W3Layouts/gatsby-starter-delog>

# 作り方

### <https://github.com/W3Layouts/gatsby-starter-delog> の readme にある deploy netlify を押す

![](/assets/スクリーンショット 2020-03-19 22.04.14.png)

### ローカルで設定を書き換える

```
$ git pull {作成したbranch}
```

### gatsby-config.js でブログの設定を変更する

```
  siteMetadata: {
    title: `fablog`,
    description: `ご飯とかお金とかについて考えるのが好きなエンジニアのブログです`,
    siteUrl: `https://fablog.netlify.com/`,
    home: {
      title: `Fablog`,
      description: `ご飯とかお金とかについて考えるのが好きなエンジニアのブログです`,
    },
.......
```

### static/admin/config.yml のRepositoryを変更する

```
backend:
  name: github
  repo: kentosasa/blog
  ......
```

### Connect to Gtihub を押す

![](/assets/スクリーンショット 2020-03-19 22.04.47.png)

### 作成したいRepositoryの名前を入れる

![](/assets/スクリーンショット 2020-03-19 22.06.51.png)

### Github の OAuth Application を作成する

![](/assets/スクリーンショット 2020-03-19 22.11.20.png)

### アプリケーション名やURLを適宜変更してApplicationの作成を完了する

![](/assets/スクリーンショット 2020-03-19 22.49.29.png)

### Netlify の設定画面にある AccessControl の Authentication providers で先ほどGithubで作成したアプリケーションの account id, key を入れる

![](/assets/スクリーンショット 2020-03-19 22.15.01.png)

### 作成したサイトの /admin にアクセスする

![](/assets/スクリーンショット 2020-03-19 22.25.55.png)
