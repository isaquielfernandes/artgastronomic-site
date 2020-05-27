import { createClient } from 'contentful'

const client = createClient({
  space: process.env.NEXT_CMS_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CMS_CONTENTFUL_ACCESS_TOKEN,
})

const previewClient = createClient({
  space: process.env.NEXT_CMS_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_CMS_CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  host: 'preview.contentful.com',
})

const getClient = (preview) => (preview ? previewClient : client)

function parseAuthor({ fields }) {
  return {
    name: fields.name,
    picture: fields.picture.fields.file,
  }
}

function parsePost({ fields }) {
  return {
    title: fields.title,
    slug: fields.slug,
    date: fields.date,
    content: fields.content,
    excerpt: fields.excerpt,
    coverImage: fields.coverImage.fields.file,
    author: parseAuthor(fields.author),
  }
}

function parsePostEntries(entries, cb = parsePost) {
  return entries?.items?.map(cb)
}

export async function getPreviewPostById(id) {
  const entries = await getClient(true).getEntries({
    content_type: 'receitaPost',
    limit: 1,
    'sys.id[in]': id,
  })
  return parsePostEntries(entries)[0]
}

export async function getAllPostsWithSlug() {
  const entries = await client.getEntries({
    content_type: 'receitaPost',
    select: 'sys.id',
  })
  return parsePostEntries(entries, (post) => post.fields)
}

export async function getAllPostsForHome(preview) {
  const entries = await getClient(preview).getEntries({
    content_type: 'receitaPost',
  })
  return parsePostEntries(entries)
}

export async function getPostAndMorePosts(categoria, preview) {
  const entry = await getClient(preview).getEntries({
    content_type: 'receitaPost',
    limit: 1,
    'fields.categoria[in]': categoria,
  })
  const entries = await getClient(preview).getEntries({
    content_type: 'receitaPost',
    limit: 2,
    'fields.categoria[nin]': categoria,
  })

  return {
    post: parsePostEntries(entry)[0],
    morePosts: parsePostEntries(entries),
  }
}