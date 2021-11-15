import React, { ReactElement } from 'react'
import clsx from 'clsx'

type PropsType = {
  children?: string
  className?: string
}

const ByLine = ({ children, className }: PropsType): ReactElement | null => {
  if (!children) {
    return null
  }

  return (
    <span
      className={clsx({
        [className || '']: className,
      })}
    >
      {children}
    </span>
  )
}

export default ByLine
