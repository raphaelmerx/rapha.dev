import { NextSeo, ArticleJsonLd } from 'next-seo'
import siteMetadata from '@/data/siteMetadata.json'

import { imageType, imagesType } from '@/types/blog'

export const SEO = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  openGraph: {
    type: 'website',
    locale: siteMetadata.language,
    url: siteMetadata.siteUrl,
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [
      {
        url: `${siteMetadata.siteUrl}${siteMetadata.socialBanner}`,
        alt: siteMetadata.title,
        width: 1200,
        height: 600,
      },
    ],
  },
  twitter: {
    handle: siteMetadata.twitter,
    site: siteMetadata.twitter,
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'author',
      content: siteMetadata.author,
    },
  ],
}

export const PageSeo = ({
  title,
  description,
  url,
}: {
  title: string
  description: string
  url: string
}) => {
  return (
    <NextSeo
      title={`${title} – ${siteMetadata.title}`}
      description={description}
      canonical={url}
      openGraph={{
        url,
        title,
        description,
      }}
    />
  )
}

type blogSeoType = {
  title: string
  summary: string
  date: string
  url: string
  tags: string[]
  lastmod?: string
  images?: string[]
}

export const BlogSeo = ({ title, summary, date, lastmod, url, tags, images = [] }: blogSeoType) => {
  const publishedAt = new Date(date).toISOString()
  const modifiedAt = new Date(lastmod || date).toISOString()
  let imagesArr =
    images.length === 0
      ? [siteMetadata.socialBanner]
      : typeof images === 'string'
      ? [images]
      : images

  const featuredImages = imagesArr.map((img: string) => {
    return {
      url: `${siteMetadata.siteUrl}${img}`,
      alt: title,
    }
  })

  return (
    <>
      <NextSeo
        title={`${title} – ${siteMetadata.title}`}
        description={summary}
        canonical={url}
        openGraph={{
          type: 'article',
          article: {
            publishedTime: publishedAt,
            modifiedTime: modifiedAt,
            authors: [`${siteMetadata.siteUrl}/about`],
            tags,
          },
          url,
          title,
          description: summary,
          images: featuredImages,
        }}
        additionalMetaTags={[
          {
            name: 'twitter:image',
            content: featuredImages[0].url,
          },
        ]}
      />
      <ArticleJsonLd
        authorName={siteMetadata.author}
        dateModified={modifiedAt}
        datePublished={publishedAt}
        description={summary}
        images={featuredImages.map((e) => e.url)} // change because of type incompatibility
        publisherName={siteMetadata.author}
        publisherLogo={siteMetadata.image} // added image
        title={title}
        url={url}
      />
    </>
  )
}
