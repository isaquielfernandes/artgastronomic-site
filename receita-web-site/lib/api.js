import { createClient } from 'contentful';
 {/**space: process.env.NEXT_CMS_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CMS_CONTENTFUL_ACCESS_TOKEN, */}

export const client = createClient({
  space: "dcugw5hovzo7",
  accessToken: "yMCnTzi1YDlxhXNk48g9bBA6vYOLOrR0tcJCUKpwoXc",
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
  return parsePostEntries(entries)
}

export async function getAllReceitas() {
  let entries = await client.getEntries({
    content_type: "receitaPost"
  });
  return  parsePostEntries(entries)
};
