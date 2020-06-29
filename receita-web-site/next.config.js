const webpack = require('webpack');
require('dotenv').config()
const { generateAllArticles } = require('./utils/helpers');

module.exports = {
    env: {
        NEXT_CMS_CONTENTFUL_SPACE_ID:
          process.env.NEXT_CMS_CONTENTFUL_SPACE_ID,
        NEXT_CMS_CONTENTFUL_ACCESS_TOKEN:
          process.env.NEXT_CMS_CONTENTFUL_ACCESS_TOKEN
    },
    webpack: (config, { dev }) => {
        config.plugins.push(
            new webpack.ProvidePlugin({
                '$': 'jquery',
                'jQuery': 'jquery',
            })
        )
        return config
    },
    
techhiveIO
/
nextjs-static-starter-kit
Template
Code
Issues
2
Pull requests
Actions
Projects
Wiki
Security
Insights
nextjs-static-starter-kit/next.config.js
 @abedzantout
abedzantout chore(app): fix export functionality
 2 contributors
45 lines (36 sloc)  926 Bytes
  
// next.config.js

const path = require('path');
const Dotenv = require('dotenv-webpack');
const { generateAllArticles } = require('./utils/helpers');

const next_config = {
  webpack: (config) => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,
      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ];

    return config;
  },
  exportPathMap: async () => {
    const articles = await generateAllArticles();

    const insights = articles.reduce(
      (pages, entry) =>
        Object.assign({}, pages, {
          [`/post/${entry.id}`]: {
            page: '/post/[id]',
            query: { id: entry.id }
          }
        }),
      {}
    );

    const pages = {
      '/': { page: '/' },
    };

    return Object.assign({}, pages, insights);
  }
}

