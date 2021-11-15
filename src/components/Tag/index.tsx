import React, { ReactNode, ReactElement } from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import colors from '@bit/littlebox.atd.colors'

const useStyles = makeStyles({
  root: {
    display: 'inline-block',
    padding: '8px 12px',
    borderRadius: '4px',
    boxShadow: `inset 0 0 0 1px ${colors.gray400}`,
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '18px',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    color: colors.ctaPrimary,
    '&:hover': {
      boxShadow: `inset 0 0 0 1px ${colors.ctaPrimary}`,
      backgroundColor: colors.ctaPrimaryHover,
    },
  },
  small: {
    padding: '6px 10px',
    fontSize: '12px',
    lineHeight: '16px',
  },
  disabled: {
    color: colors.textDisabled,
    pointerEvents: 'none',
  },
})

type PropsType = {
  /** React Node or text */
  children: ReactNode
  /** href */
  href?: string
  /** Small tag */
  small?: boolean
  /** Disabled tag */
  disabled?: boolean
  /** className */
  className?: string
  /** onClick event handler */
  onClick?: (...args: any[]) => any
}

const Tag = ({ children, small, disabled, onClick, href, className }: PropsType): ReactElement => {
  const classes = useStyles()

  const external = href && href.startsWith('http')
  const attrs = {
    className: clsx({
      [classes.root]: true,
      [classes.small]: small,
      [classes.disabled]: disabled,
      [className || '']: className,
    }),
    onClick: onClick,
  }

  if (href) {
    if (external) {
      return (
        <a {...attrs} href={href} target="_blank" rel="noreferrer noopener">
          {children}
        </a>
      )
    } else {
      return (
        <Link {...attrs} to={href}>
          {children}
        </Link>
      )
    }
  }

  return <span {...attrs}>{children}</span>
}

Tag.defaultProps = {
  small: false,
}

export default Tag
