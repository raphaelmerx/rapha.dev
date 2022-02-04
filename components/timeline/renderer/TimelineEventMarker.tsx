import { css } from 'goober'
import { Clock } from 'react-feather'
import { Theme } from '@paper/origami'
import { useLastEvent } from './Timeline'

export default function TimelineEventMarker() {
  const isLast = useLastEvent()
  return (
    <div className={timeline}>
      <div className={verticalLine} style={{ bottom: isLast ? 'calc(100% - 20px)' : -100 }} />
      <div className={marker}>
        <Clock size={20} fill={Theme.color.lightNeutral} stroke={Theme.color.oledLightPrimary} />
      </div>
    </div>
  )
}

const timeline = css`
  --timeline-spacing: ${Theme.spacing.xxxxl};

  @media (max-width: 500px) {
    --timeline-spacing: ${Theme.spacing.xl};
  }
`

const marker = css`
  position: absolute;
  left: calc(var(--timeline-spacing) * -1 - 9px);
  top: 7px;
  display: flex;
  flex-direction: row;
`

const verticalLine = css`
  position: absolute;
  left: calc(var(--timeline-spacing) * -1);
  top: 20px;
  bottom: 0px;
  width: 1px;
  background-color: ${Theme.color.borderSubtle};
`
