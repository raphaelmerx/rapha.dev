import { Briefcase } from 'react-feather'
import useTranslation from 'next-translate/useTranslation'
import TimelineEventLabel from './TimelineEventLabel'
import { Heading, Text } from '@paper/origami'

import TimelineEventMarker from './TimelineEventMarker'
import useDateFormatter from '../../useDateFormatter'

interface Props {
  date: string
  endDate?: string
  company: string
  title: string
}

export default function PostRenderer(props: Props) {
  const { t } = useTranslation('timeline')
  const formatDate = useDateFormatter({ date: false })
  const endDateText = props.endDate ? formatDate(new Date(props.endDate)) : t('now')
  return (
    <li>
      <TimelineEventMarker />
      <TimelineEventLabel variant="blue" icon={Briefcase} text={t('label-work')} />
      <div>
        <Text as="time" dateTime={props.date} ink="secondary" variant="caption" family="system">
          {formatDate(new Date(props.date))}
          {' - '}
          {endDateText}
        </Text>
      </div>
      <Heading level={2} marginBottom={0}>
        {props.company}
      </Heading>
      <Text as="h3" ink="secondary" family="heading" weight="normal">
        {props.title}
      </Text>
    </li>
  )
}
