import React from 'react'

type SectionContainerProps = {
  children: React.ReactNode
}

export default function SectionContainer({ children }: SectionContainerProps) {
  return <div className="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">{children}</div>
}
