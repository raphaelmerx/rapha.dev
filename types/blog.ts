export type postType = {
  title: string
  date: string
  tags: string[]
  draft?: boolean
  summary?: string
  slug?: string
  images?: string[]
}

export type postsType = postType[]

export type paginationType = {
  currentPage: number
  totalPages: number
}

export type tagsType = Record<string, number>
