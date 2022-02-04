import { Edit3 } from 'react-feather'
import useTranslation from 'next-translate/useTranslation'
import TimelineEventLabel from './TimelineEventLabel'

import { Post } from '../../../types'
import PostItem from '../../blog/PostItem'
import TimelineEventMarker from './TimelineEventMarker'

interface Props {
  post: Post
}

export default function PostRenderer(props: Props) {
  const { t } = useTranslation('timeline')
  return (
    <li>
      <TimelineEventMarker />
      <TimelineEventLabel variant="accent" icon={Edit3} text={t('label-post')} />
      <PostItem post={props.post} />
    </li>
  )
}
