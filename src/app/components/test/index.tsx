import React from 'react'

export type Props = {
  title: string
  color: string
}

const TestComponent = ({ title, color }: Props) => {
  return (
    <div>
      <h1 style={{ color }}>{title}</h1>
    </div>
  )
}

export default TestComponent
