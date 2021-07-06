export type postType = {
  title: string
  date: string
  tags: string[]
  draft?: boolean
  summary?: string
  slug?: string
  images?: string[]
  readingTime?: { text: string; minutes: number; time: number; words: number }
}

export type postsType = postType[]

export type paginationType = {
  currentPage: number
  totalPages: number
}

export type mdxSourceType = {
  compiledSource: string
  scope: {}
}

export type postWithMdxType = {
  mdxSource: mdxSourceType
  frontMatter: postType
}

export type tagsType = Record<string, number>

export type imageType = {
  url: string
  alt?: string
  width?: number
  height?: number
}

export type imagesType = imageType[]
