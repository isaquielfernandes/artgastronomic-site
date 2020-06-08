const { createClient } = require('contentful');
require('dotenv').config();

const Space = process.env.NEXT_CMS_CONTENTFUL_SPACE_ID;
const Token = process.env.NEXT_CMS_CONTENTFUL_ACCESS_TOKEN;

const client = createClient({
  space: Space,
  accessToken: Token
});

const CONTENT_TYPE_BLOGPOST = 'receitaPost';

const getAllArticles = async () => {
  return await client.getEntries({
    content_type: CONTENT_TYPE_BLOGPOST,
    select: 'fields.nome,fields.categoria'
  });
};

exports.generateAllArticles = async () => {
  const articles = await getAllArticles();
  return articles.items.map((item) => ({ ...item.fields }));
};