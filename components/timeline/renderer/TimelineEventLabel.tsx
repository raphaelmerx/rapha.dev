import { css } from 'goober'
import { ComponentProps, ComponentType } from 'react'
import { Icon } from 'react-feather'
import cx from 'classnames'
import { Theme, Text } from '@paper/origami'

interface Props {
  variant: 'accent' | 'tint' | 'blue'
  icon: ComponentType<ComponentProps<Icon>>
  text: string
}

export default function TimelineEventLabel(props: Props) {
  const backgroundColor = getBackgroundColor(props.variant)
  const textInk = getTextInk(props.variant)
  const label = css({
    backgroundColor,
  })

  return (
    <div className={cx(labelBase, label)}>
      <Text variant="caption" ink={textInk} family="system" weight="bold" as="strong">
        <props.icon size="1.3em" />
        {props.text}
      </Text>
    </div>
  )
}

const labelBase = css`
  padding: ${Theme.spacing.xs} ${Theme.spacing.s};
  border-radius: ${Theme.border.radius.normal};
  display: inline-flex;
  margin-bottom: ${Theme.spacing.s};

  strong {
    display: inline-flex;
    align-items: center;
    gap: ${Theme.spacing.xs};
  }
`

function getBackgroundColor(variant: Props['variant']) {
  switch (variant) {
    case 'accent':
      return Theme.color.accentSubtle
    case 'tint':
      return Theme.color.tintSubtle
    case 'blue':
      return Theme.color.blueSubtle
    default:
      return Theme.color.borderSubtle
  }
}

type TextProps = ComponentProps<typeof Text>

function getTextInk(variant: Props['variant']): TextProps['ink'] {
  switch (variant) {
    case 'accent':
      return 'accent'
    case 'tint':
      return 'tint'
    case 'blue':
      return 'blue'
    default:
      return 'primary'
  }
}
