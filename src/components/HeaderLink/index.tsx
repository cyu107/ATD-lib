import React, { ReactElement } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import colors from '@bit/littlebox.atd.colors'
import clsx from 'clsx'

const useStyles = makeStyles({
  link: {
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '16px',
    textDecoration: 'none',
    color: colors.ctaSecondary,
    transition: 'color 0.3s ease',
    '&:hover': {
      color: colors.ctaPrimary,
    },
  },
})

type PropsType = {
  href: string
  children: string | ReactElement | ReactElement[]
  className?: string
}

const HeaderLink = ({ href, children, className }: PropsType): ReactElement => {
  const classes = useStyles()
  return (
    <a
      href={href}
      className={clsx({
        [classes.link]: true,
        [className || '']: className,
      })}
    >
      {children}
    </a>
  )
}

export default HeaderLink
