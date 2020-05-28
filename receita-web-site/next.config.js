const webpack = require('webpack');
require('dotenv').config();

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
    }
}