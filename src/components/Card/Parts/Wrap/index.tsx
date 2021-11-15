import React, { ReactElement, ReactNode } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import colors from '@bit/littlebox.atd.colors'
import clsx from 'clsx'

const useStyles = makeStyles({
  wrap: {
    backgroundColor: colors.white,
    border: `1px solid ${colors.gray400}`,
    boxShadow: `0px 2px 0px ${colors.gray400}`,
    borderRadius: '3px',
    overflow: 'hidden',
    color: colors.ctaSecondary,
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
        [classes.wrap]: true,
        [className || '']: className,
      })}
    >
      {children}
    </div>
  )
}

export default WrapInner
