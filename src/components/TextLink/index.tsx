import React, { ReactNode, ReactElement } from 'react'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import colors, { ColorsInterface } from '@bit/littlebox.atd.colors'
import Icon, { PropsType as IconProps } from '@bit/littlebox.atd.icons'

type PropsType = {
  /** classes - pass classname down to different elements */
  classes?: {
    root?: string
    icon?: string
  }
  /** ClassName */
  className?: string
  /** React Node or text */
  children: string | ReactNode | ReactNode[]
  /** Link URL */
  href: string
  /** One of the following: 'inherit' | 'small' | 'medium' | 'large' */
  size?: 'inherit' | 'small' | 'medium' | 'large'
  /** One of the following: 'primary' | 'secondary' | 'standalone' */
  variant?: 'primary' | 'secondary' | 'standalone'
  /** Inline link (underlined) style */
  inline?: boolean
  /** Link target, ie '_blank' */
  target?: string
  /** optional icon */
  icon?: IconProps['glyph']
  /** icon color */
  iconColor?: ColorsInterface['color']
  /** onClick event handler */
  onClick?: (...args: any[]) => any
}

const useStyles = makeStyles({
  root: {
    position: 'relative',
    display: 'inline-block',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '1em',
    color: colors.ctaSecondary,
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  primary: {
    color: colors.ctaPrimary,
    '&:hover': {
      color: colors.ctaPrimaryLight,
    },
  },
  secondary: {
    color: colors.ctaSecondary,
    '&:hover': {
      color: colors.ctaSecondaryLight,
    },
  },
  standalone: {
    paddingTop: '0.1875em',
    paddingBottom: '0.1875em',
    borderBottom: 0,
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '16px',
    color: colors.ctaPrimary,
    '&$sizeSmall': {
      fontSize: '14px',
    },
    '&$sizeLarge': {
      fontSize: '18px',
    },
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: colors.textLinkStandaloneHover,
      '&::after': {
        backgroundColor: colors.ctaPrimary,
      },
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: '100%',
      width: '100%',
      height: '2px',
      backgroundColor: colors.ctaPrimaryHover,
      transition: 'background-color 0.3s ease',
    },
  },
  sizeLarge: {
    fontSize: '16px',
  },
  sizeMedium: {
    fontSize: '14px',
  },
  sizeSmall: {
    fontSize: '12px',
  },
  inline: {
    borderBottom: '1px solid',
    '&:hover': {
      borderBottomColor: 'transparent',
    },
  },
})

const TextLink = ({
  classes,
  className,
  href,
  children,
  onClick,
  size,
  variant,
  inline,
  target,
  icon,
  iconColor,
}: PropsType): ReactElement => {
  const styles = useStyles()
  return (
    <Link
      href={href}
      onClick={onClick}
      target={target}
      rel={target === '_blank' ? 'noreferrer noopener' : ''}
      className={clsx(classes && classes.root, {
        [styles.root]: true,
        [styles.inline]: inline,
        [styles.primary]: variant === 'primary',
        [styles.secondary]: variant === 'secondary',
        [styles.standalone]: variant === 'standalone',
        [styles.sizeSmall]: size === 'small',
        [styles.sizeMedium]: size === 'medium',
        [styles.sizeLarge]: size === 'large',
        [className || '']: className,
      })}
    >
      {children}
      {icon && (
        <Icon glyph={icon} size={16} color={iconColor} className={classes && classes.icon} />
      )}
    </Link>
  )
}

TextLink.defaultProps = {
  variant: 'primary',
  size: 'inherit',
  iconColor: colors.textLinkBrand,
}

export default TextLink
