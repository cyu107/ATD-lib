import React, { ReactElement } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import MuiButton from '@material-ui/core/Button'
import Icons from '@bit/littlebox.atd.icons'
import colors from '@bit/littlebox.atd.colors'

const useStyles = makeStyles({
  root: {
    fontWeight: 600,
    border: 0,
    borderRadius: '3em',
    textTransform: 'none',
    transition: 'all 0.3s ease',
    '& >.MuiTouchRipple-root': {
      display: 'none',
    },
  },
  content: {
    width: '100%',
  },
  primary: {
    color: colors.white,
    backgroundColor: colors.ctaPrimary,
    border: `2px solid ${colors.ctaPrimary}`,
    '&:hover': {
      color: colors.ctaPrimary,
      backgroundColor: colors.ctaPrimaryHover,
    },
    '&:active': {
      color: colors.white,
      border: `2px solid ${colors.ctaPrimary}`,
      boxShadow: `inset 0 0 0 2px ${colors.white}`,
      backgroundColor: colors.ctaPrimary,
    },
    '&.Mui-disabled': {
      backgroundColor: colors.inputBorderDisabled,
      color: colors.textDisabled,
      border: 'none',
      boxShadow: 'none',
    },
  },
  secondary: {
    color: colors.ctaSecondary,
    backgroundColor: 'transparent',
    border: 'solid 2px transparent',
    boxShadow: `inset 0 0 0 1px ${colors.ctaSecondary}`,
    '&:hover': {
      color: colors.ctaSecondaryDarker,
      backgroundColor: colors.ctaSecondaryHover,
      border: `solid 2px ${colors.ctaSecondaryDarker}`,
      boxShadow: 'none',
    },
    '&:active': {
      color: colors.white,
      backgroundColor: colors.ctaSecondaryDarker,
      boxShadow: `inset 0 0 0 2px ${colors.white}`,
      border: `solid 2px ${colors.ctaSecondaryDarker}`,
    },
    '&.Mui-disabled': {
      backgroundColor: 'transparent',
      boxShadow: `inset 0 0 0 1px ${colors.inputBorderDisabled}`,
    },
  },
  tertiary: {
    color: colors.ctaSecondary,
    backgroundColor: 'transparent',
    boxShadow: 'none',
    '&:hover': {
      color: colors.ctaSecondaryDarker,
      backgroundColor: colors.ctaSecondaryHover,
      boxShadow: 'none',
    },
    '&:active': {
      color: colors.white,
      backgroundColor: colors.ctaSecondaryDarker,
    },
    '&.Mui-disabled': {
      color: colors.textDisabled,
      backgroundColor: 'transparent',
    },
  },
  arrow: {
    width: '100%',
    height: '100%',
    color: colors.ctaPrimary,
    '&:hover': {
      background: 'none',
    },
    '&.Mui-disabled': {
      color: colors.textDisabled,
    },
    '& .MuiButton-label > div': {
      textAlign: 'left',
    },
  },
  glyph: {
    transform: 'translateX(40%)',
  },
  sizeSmall: {
    padding: '6px 12px',
    fontSize: '14px',
    lineHeight: '18px',
    '& svg': {
      width: '28px',
    },
  },
  sizeMedium: {
    padding: '8px 16px',
    fontSize: '16px',
    lineHeight: '20px',
    '& svg': {
      width: '32px',
    },
  },
  sizeLarge: {
    padding: '12px 24px',
    fontSize: '18px',
    lineHeight: '20px',
    '& svg': {
      width: '36px',
    },
  },
})

type PropsType = {
  /** React Node or text */
  children: ReactElement[] | ReactElement | string
  /** ClassName */
  className?: string
  /** Link URL */
  href?: string
  /** Full width */
  fullWidth?: boolean
  /** One of the following: 'small' | 'medium' | 'large' */
  size?: 'small' | 'medium' | 'large'
  /** One of the following: 'primary' | 'secondary' | 'tertiary' | 'arrow' */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'arrow'
  /** Makes button non-interactable */
  disabled?: boolean
  /** OnClick handler */
  onClick?: (...args: any[]) => any
}

const Button = ({
  className,
  href,
  children,
  size,
  variant,
  disabled,
  fullWidth,
  onClick,
}: PropsType): ReactElement => {
  const classes = useStyles()
  return (
    <MuiButton
      className={clsx({
        [classes.root]: true,
        [classes.sizeSmall]: size === 'small',
        [classes.sizeMedium]: size === 'medium',
        [classes.sizeLarge]: size === 'large',
        [classes.primary]: variant === 'primary',
        [classes.secondary]: variant === 'secondary',
        [classes.tertiary]: variant === 'tertiary',
        [classes.arrow]: variant === 'arrow',
        [className || '']: className,
      })}
      href={href}
      disabled={disabled}
      fullWidth={fullWidth}
      onClick={onClick}
    >
      <div className={classes.content}>{children}</div>
      {variant === 'arrow' && (
        <Icons
          className={classes.glyph}
          glyph="caret-right-small"
          color={disabled ? colors.textDisabled : colors.ctaPrimary}
        />
      )}
    </MuiButton>
  )
}

Button.defaultProps = {
  size: 'medium',
  variant: 'primary',
  disabled: false,
  fullWidth: false,
  className: '',
}

export default Button
