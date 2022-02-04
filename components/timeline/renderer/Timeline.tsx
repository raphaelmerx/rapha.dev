import { css } from 'goober'
import React, { Children, PropsWithChildren, ReactNode, createContext, useContext } from 'react'
import { List, Text, Theme } from '@paper/origami'

export default function Timeline(props: PropsWithChildren<{ year: number }>) {
  return (
    <div className={timeline}>
      <Text variant="small" family="heading" weight="bold">
        {props.year}
      </Text>
      <List variant="plain">{injectIndex(props.children)}</List>
    </div>
  )
}

function injectIndex(children: ReactNode) {
  const count = Children.count(children)
  return Children.map(children, (child: any, index) => {
    return <LastContextProvider value={index === count - 1}>{child}</LastContextProvider>
  })
}

const timeline = css`
  padding-top: ${Theme.spacing.xl};
  padding-bottom: ${Theme.spacing.xl};

  > span {
    display: inline-block;
    position: relative;
    left: 1px;
    transform: translateX(-50%);
    margin-bottom: ${Theme.spacing.l};
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 80px;
    padding-left: ${Theme.spacing.xxxxl};

    @media (max-width: 500px) {
      padding-left: ${Theme.spacing.xl};
    }
  }

  li {
    position: relative;
  }
`

const LastContext = createContext(false)
const LastContextProvider = LastContext.Provider

export function useLastEvent() {
  return useContext(LastContext)
}
