import { createClient } from 'contentful';

export const client = createClient({
  space: process.env.NEXT_CMS_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CMS_CONTENTFUL_ACCESS_TOKEN,
})


function parsePost({ sys, fields }) {
  return {
    id: sys.id,
    nome: fields.nome,
    categoria: fields.categoria,
    descricao: fields.descricao,
    image: fields.image.fields.file.url,
  }
}

function parsePostEntries(entries, cb = parsePost) {
  return entries?.items?.map(cb)
}

export async function getOnePostByID(id) {
  const entries = await client.getEntries({
    content_type: 'receitaPost',
    limit: 1,
    'sys.id[in]': id,
  })
  console.log(parsePostEntries(entries)[0]);
  return parsePostEntries(entries)[0]
}

export async function getReceitaPost() {
  let entries = await client.getEntries({
    content_type: "receitaPost"
  });
  return  parsePostEntries(entries)[0]
};
