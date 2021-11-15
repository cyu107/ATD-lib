import React, { ReactElement } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles({
  root: {
    '&&': {
      marginTop: 0,
      fontSize: '16px',
    },
  },
})

type PropsType = {
  children?: string
  className?: string
}

const Title = ({ children, className }: PropsType): ReactElement | null => {
  const classes = useStyles()
  if (!children) {
    return null
  }

  return (
    <h3
      className={clsx({
        [classes.root]: true,
        [className || '']: className,
      })}
    >
      {children}
    </h3>
  )
}

export default Title
