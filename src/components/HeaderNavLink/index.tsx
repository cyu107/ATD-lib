import React, { ReactElement } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Icon from '@bit/littlebox.atd.icons'
import colors from '@bit/littlebox.atd.colors'

const useStyles = makeStyles({
  root: {
    display: 'inline-flex',
    verticalAlign: 'middle',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'color 0.3s ease',
    color: colors.ctaSecondary,
    '&:hover': {
      color: colors.ctaPrimary,
    },
  },
  big: {
    '& $label': {
      fontSize: '20px',
      lineHeight: '24px',
    },
  },
  small: {
    '& $label': {
      fontSize: '14px',
      lineHeight: '16px',
      fontWeight: 500,
    },
  },
  label: {
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '18px',
    marginRight: '8px',
  },
})

type PropsType = {
  big?: boolean
  small?: boolean
  children: ReactElement | string
  className?: string
  onClick?: (...args: any[]) => any
}

const HeaderNavLink = ({ children, big, small, className, onClick }: PropsType): ReactElement => {
  const classes = useStyles()
  return (
    <span
      className={clsx({
        [classes.root]: true,
        [classes.big]: big,
        [classes.small]: small,
        [className || '']: className,
      })}
      onClick={onClick}
    >
      <span className={classes.label}>{children}</span>
      <Icon glyph="caret-down" color={colors.ctaPrimary} size={big ? 24 : 16} />
    </span>
  )
}

export default HeaderNavLink
