import React, { useContext, ReactElement } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import colors from '@bit/littlebox.atd.colors'
import ContextMenuContext from '../context'

const useStyles = makeStyles({
  root: {
    display: 'block',
    padding: '12px 16px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '18px',
    textDecoration: 'none',
    color: colors.ctaSecondary,
    '&:hover': {
      backgroundColor: 'rgba(225, 48, 0, 0.06)',
      color: colors.black,
    },
  },
  active: {
    backgroundColor: colors.white,
  },
  small: {
    paddingTop: '9px',
    paddingBottom: '9px',
    fontSize: '14px',
    lineHeight: '14px',
  },
  separator: {
    height: '2px',
    marginTop: '11px',
    marginBottom: '11px',
    padding: 0,
    backgroundColor: colors.gray400,
  },
})

type PropsType = {
  /** Link href */
  href?: string
  /** External link */
  external?: boolean
  /** Active menu item */
  active?: boolean
  /** Small menu item style */
  small?: boolean
  /** Use separator style */
  separator?: boolean
  /** Children node / string */
  children?: ReactElement | ReactElement[] | string
  /** className */
  className?: string
  /** onClick callback */
  onClick?: (...args: any[]) => any
}

const ContextMenuItem = ({
  href,
  className,
  active,
  separator,
  small,
  external,
  children,
  onClick,
}: PropsType): ReactElement => {
  const classes = useStyles()
  const popover = useContext(ContextMenuContext)

  const attr = {
    onClick: () => {
      popover.close && popover.close()
      onClick && onClick()
    },
    className: clsx({
      [classes.root]: true,
      [classes.active]: active,
      [classes.small]: small,
      [classes.separator]: separator,
      [className || '']: className,
    }),
    target: external ? '_blank' : undefined,
    rel: external ? 'noreferrer noopener' : undefined,
  }

  if (href) {
    return (
      <a href={href} {...attr}>
        {children}
      </a>
    )
  }

  return <div {...attr}>{children}</div>
}

ContextMenuItem.defaultProps = {
  active: false,
  small: false,
  external: false,
}

export default ContextMenuItem
