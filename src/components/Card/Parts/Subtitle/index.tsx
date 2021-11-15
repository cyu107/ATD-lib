import React, { ReactElement } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles({
  root: {
    '&&': {
      fontWeight: 500,
    },
  },
})

type PropsType = {
  children?: string
  className?: string
}

const Subtitle = ({ children, className }: PropsType): ReactElement | null => {
  const classes = useStyles()
  if (!children) {
    return null
  }

  return (
    <span
      className={clsx({
        [className || '']: className,
        [classes.root]: true,
      })}
    >
      {children}
    </span>
  )
}

export default Subtitle
