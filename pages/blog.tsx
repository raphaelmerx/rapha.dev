import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata.json'
import ListLayout from '@/layouts/ListLayout'
import { PageSeo } from '@/components/SEO'
import { postsType, paginationType } from '@/types/blog'

export const POSTS_PER_PAGE = 10

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  } as paginationType
  // console.log('Blog posts', posts)
  // console.log('Blog type posts', typeof posts)
  // console.log('Blog initial', initialDisplayPosts)
  // console.log('Blog type initial', typeof initialDisplayPosts)

  return { props: { initialDisplayPosts, posts, pagination } }
}

type BlogProp = {
  posts: postsType
  initialDisplayPosts: postsType
  pagination: paginationType
}

export default function Blog({ posts, initialDisplayPosts, pagination }: BlogProp) {
  return (
    <>
      <PageSeo
        title={`Blog - ${siteMetadata.author}`}
        description={siteMetadata.description}
        url={`${siteMetadata.siteUrl}/blog`}
      />
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="All Posts"
      />
    </>
  )
}
