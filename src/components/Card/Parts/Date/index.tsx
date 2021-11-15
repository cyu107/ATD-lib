import React, { ReactElement } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import colors from '@bit/littlebox.atd.colors'

const useStyles = makeStyles({
  root: {
    '&&': {
      color: colors.brandOrange,
      fontWeight: 600,
    },
  },
})

type PropsType = {
  /** Date / timing status */
  children?: string
  className?: string
}

const Date = ({ children, className }: PropsType): ReactElement | null => {
  const classes = useStyles()
  if (!children) {
    return null
  }

  return (
    <strong
      className={clsx({
        [classes.root]: true,
        [className || '']: className,
      })}
    >
      {children}
    </strong>
  )
}

export default Date
