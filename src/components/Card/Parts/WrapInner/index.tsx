import React, { ReactElement, ReactNode } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles({
  inner: {
    padding: '16px',
    '& > *:first-child': {
      marginBottom: '8px',
    },
  },
})

type PropsType = {
  children?: ReactNode
  className?: string
}

const WrapInner = ({ children, className }: PropsType): ReactElement => {
  const classes = useStyles()
  return (
    <div
      className={clsx({
        [classes.inner]: true,
        [className || '']: className,
      })}
    >
      {children}
    </div>
  )
}

export default WrapInner
