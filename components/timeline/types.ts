import { Post } from '../../types'

interface PostEvent {
  type: 'post'
  date: string
  post: Post
}

interface OSSEvent {
  type: 'oss'
  date: string
  name: string
  description: string
  stargazers: number
  language: {
    name: string
    color: string
  }
}

interface Talk {
  title: string
  subtitle?: string
  event: string
  eventUrl?: string
  slidesUrl?: string
}

interface TalkEvent {
  type: 'talk'
  date: string
  talk: Talk
}

interface WorkEvent {
  type: 'work'
  date: string
  company: string
  title: string
}

export type TimelineEvent = PostEvent | OSSEvent | TalkEvent | WorkEvent
