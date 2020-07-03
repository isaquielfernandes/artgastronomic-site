const webpack = require('webpack');
const withPWA = require('next-pwa')
 

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
    withPWA: ({
        pwa: {
            dest: 'public'
        }
    }),
    exportPathMap: async () => {
        const articles = await generateAllArticles();

        const insights = articles.reduce(
            (pages, entry) => Object.assign({}, pages, {
                  [`/post/${entry.id}`]: {
                      page: '/post/[id]', query: { id: entry.id }
                  }
            }),{} 
        );

        const pages = {
           '/': { page: '/' },
        };

        return Object.assign({}, pages, insights);
   }
}

