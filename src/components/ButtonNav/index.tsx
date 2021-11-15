import React, { ReactElement } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import MuiButton from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import Icons from '@bit/littlebox.atd.icons'
import colors from '@bit/littlebox.atd.colors'

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '44px',
    border: '1px solid transparent',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: '24px',
    '&:hover': {
      background: 'none',
    },
    '& .MuiTouchRipple-root': {
      display: 'none',
    },
  },
  active: {
    background: 'none',
    border: `1px solid ${colors.ctaPrimary}`,
    '& p': {
      color: colors.ctaPrimary,
    },
  },
  textWrapper: {
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '18px',
    textTransform: 'none',
    color: colors.ctaSecondary,
  },
  link: {
    marginLeft: '10px',
    '& svg': {
      marginBottom: '2px',
    },
  },
})

type PropsType = {
  /** ClassName */
  className?: string
  /** Button text */
  label: string
  /** Link URL */
  href?: string
  /** Active status */
  active?: boolean
  /** OnClick handler */
  onClick?: (...args: any[]) => any
}

const ButtonNav = ({ className, active, href, label, onClick }: PropsType): ReactElement => {
  const classes = useStyles()
  return (
    <MuiButton
      className={clsx({
        [classes.root]: true,
        [classes.active]: active,
        [className || '']: className,
      })}
      href={href}
      onClick={onClick}
    >
      <p className={classes.textWrapper}>
        {label}
        {href && (
          <Link className={classes.link} href={href} target="_blank" rel="noreferrer noopener">
            <Icons glyph="external" size={16} color={colors.ctaPrimary} />
          </Link>
        )}
      </p>
    </MuiButton>
  )
}

ButtonNav.defaultProps = {
  active: false,
}

export default ButtonNav
