import { Code, Star } from 'react-feather'
import useTranslation from 'next-translate/useTranslation'
import TimelineEventLabel from './TimelineEventLabel'
import { Heading, Text, Anchor, Theme } from '@paper/origami'
import { css } from 'goober'

import TimelineEventMarker from './TimelineEventMarker'
import useDateFormatter from '../../useDateFormatter'

interface Props {
  name: string
  description: string
  stargazers: number
  date: string
  language: {
    name: string
    color: string
  } | null
}

export default function PostRenderer(props: Props) {
  const { t } = useTranslation('timeline')
  const formatDate = useDateFormatter()
  return (
    <li>
      <TimelineEventMarker />
      <TimelineEventLabel variant="tint" icon={Code} text={t('label-oss')} />
      <div className={oss}>
        <Text family="system" variant="caption" as="div">
          <Text as="time" dateTime={props.date} ink="secondary">
            {formatDate(new Date(props.date))}
          </Text>
          {props.language && (
            <>
              <div className={languageCircle} style={{ backgroundColor: props.language.color }} />
              <Text ink="secondary">{props.language.name}</Text>
            </>
          )}
          <Star
            size="1em"
            color={Theme.color.darkNeutral}
            style={{ margin: `0 ${Theme.spacing.xs}` }}
          />
          <Text ink="secondary">{props.stargazers}</Text>
        </Text>
        <Heading level={2} marginBottom={0}>
          <Anchor href={`https://github.com/pveyes/${props.name}`} variant="secondary">
            {props.name}
          </Anchor>
        </Heading>
        <Text as="h3" ink="secondary" family="heading" weight="normal">
          {props.description}
        </Text>
      </div>
    </li>
  )
}

const oss = css`
  > div {
    display: flex;
    align-items: center;
    margin-bottom: ${Theme.spacing.xxs};
  }
`

const languageCircle = css`
  height: 8px;
  width: 8px;
  border-radius: ${Theme.border.radius.round};
  margin: 0 ${Theme.spacing.xs};
  display: inline-block;
`
