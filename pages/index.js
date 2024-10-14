import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineDot from '@mui/lab/TimelineDot'
import Typography from '@mui/material/Typography'
import { css } from 'goober'
import { blue, green, grey, red } from '@mui/material/colors'
import { alpha } from '@mui/material/styles'

import NewsletterForm from '@/components/NewsletterForm'

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

function Badge(props) {
  const getData = (type) => {
    switch (type) {
      case 'NewProject':
        return { text: 'New Project update', icon: 'la-code', color: blue }
      case 'Job':
        return { text: 'Started a new job', icon: 'la-briefcase', color: blue }
      case 'Blog':
        return { text: 'Wrote a Blog Post', icon: 'la-pencil-alt', color: red }
      case 'Speaking':
        return { text: 'Spoke at an Event', icon: 'la-microphone', color: green }
      case 'Paper':
        return { text: 'Published a Paper', icon: 'la-file-alt', color: red }
      default:
        return { text: 'coucou', icon: 'la-dog', color: red }
    }
  }
  const { text, icon, color } = getData(props.type)
  const backgroundColor = alpha(color[100], 0.1)
  return (
    <Box className="badge-container mw-100">
      <Box
        component="span"
        style={{ color: color[500], backgroundColor: backgroundColor }}
        sx={{ py: 0.5, px: 1.5, borderRadius: 1, fontWeight: 500, fontSize: 14 }}
      >
        <Box component="span" sx={{ mr: 1 }}>
          <i className={'las ' + icon}></i>
        </Box>
        {text}
      </Box>
    </Box>
  )
}

function TimelineElement(props) {
  const { slug, date, title, summary, tags, badge, link, blog } = props.frontMatter

  const dateElement = (
    <Typography variant="caption">
      <time dateTime={date}>{formatDate(date)}</time>
    </Typography>
  )
  return (
    <TimelineItem key={slug}>
      <TimelineOppositeContent
        style={{ flex: 0.2 }}
        sx={{ py: 0, mt: -0.5, display: { xs: 'none', sm: 'block' } }}
        variant="body2"
      >
        {dateElement}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <i className="las la-clock"></i>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ pb: '12px', pt: 0, px: 2, mb: 10, mt: -1 }}>
        <Badge type={badge}></Badge>
        <Box sx={{ py: 1, display: { sm: 'none' } }}>{dateElement}</Box>
        <Typography variant="h5" sx={{ my: 1, fontWeight: 700 }}>
          <Link href={link ? link : `/blog/${slug}`}>{title}</Link>
        </Typography>
        {summary}{' '}
        {blog && (
          <div className="text-base font-medium leading-6">
            <Link
              href={`/blog/${slug}`}
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            >
              Read more &rarr;
            </Link>
          </div>
        )}
      </TimelineContent>
    </TimelineItem>
  )
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Raphaël Merx
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <Timeline sx={{ pt: 5 }}>
          {posts.map((frontMatter) => (
            <TimelineElement frontMatter={frontMatter} key={frontMatter.slug}></TimelineElement>
          ))}
        </Timeline>
      </div>
      {/* siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      ) */}
    </>
  )
}
