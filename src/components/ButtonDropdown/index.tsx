import React, { ReactElement } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Icons, { PropsType as IconsProps } from '@bit/littlebox.atd.icons'
import Button from '@bit/littlebox.atd.button'
import colors from '@bit/littlebox.atd.colors'

const useStyles = makeStyles({
  root: {
    color: colors.ctaSecondary,
    border: `1px solid ${colors.ctaSecondary}`,
    backgroundColor: colors.white,
    position: 'relative',
    '&:hover': {
      border: `1px solid ${colors.ctaPrimary}`,
    },
    '&:active': {
      color: colors.ctaPrimary,
      background: colors.white,
      border: `1px solid ${colors.ctaPrimary}`,
    },
    '&:focus': {
      color: colors.ctaPrimary,
      background: colors.white,
      border: `1px solid ${colors.ctaPrimary}`,
      boxShadow: `0 0 0 5px ${colors.ctaPrimaryHover}`,
    },
    '& svg': {
      position: 'absolute',
    },
  },
  noBorder: {
    border: 'none',
    '&:hover': {
      background: 'none',
      border: 'none',
    },
    '&:active': {
      color: colors.ctaPrimary,
      background: 'none',
      border: `1px solid ${colors.ctaPrimary}`,
    },
    '&:focus': {
      color: colors.ctaPrimary,
      background: 'none',
      border: 'none',
      boxShadow: 'none',
    },
    '&.Mui-disabled': {
      background: 'none',
    },
  },
  glyph: {
    transition: 'all 0.3s ease-out',
  },
  glyphDown: {
    transform: 'rotate(-180deg)',
  },
  sizeSmall: {
    padding: '6px 35px 6px 12px',
    '& svg': {
      width: '28px',
      right: '6px',
    },
  },
  sizeMedium: {
    padding: '8px 40px 8px 16px',
    '& svg': {
      width: '32px',
      right: '8px',
    },
  },
  sizeLarge: {
    padding: '10px 45px 10px 24px',
    '& svg': {
      width: '34px',
      right: '10px',
    },
  },
})

type PropsType = {
  /** React Node or text */
  children: ReactElement[] | ReactElement | string
  /** ClassName */
  className?: string
  /** Indicates dropdown expand status  */
  open?: boolean
  /** Full width */
  fullWidth?: boolean
  /** Icon name, e.g. cart, instagram, etc */
  glyph: IconsProps['glyph']
  /** One of the following: 'small' | 'medium' | 'large' */
  size?: 'small' | 'medium' | 'large'
  /** Disable button border */
  noBorder?: boolean
  /** Makes button non-interactable */
  disabled?: boolean
  /** OnClick handler */
  onClick?: (...args: any[]) => any
}

const ButtonDropdown = ({
  children,
  className,
  size,
  glyph,
  noBorder,
  open,
  disabled,
  onClick,
  ...props
}: PropsType): ReactElement => {
  const classes = useStyles()
  return (
    <Button
      className={clsx({
        [classes.root]: true,
        [classes.noBorder]: noBorder,
        [classes.sizeSmall]: size === 'small',
        [classes.sizeMedium]: size === 'medium',
        [classes.sizeLarge]: size === 'large',
        [className || '']: className,
      })}
      size={size}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      <React.Fragment>{children}</React.Fragment>
      <Icons
        className={clsx({
          [classes.glyph]: true,
          [classes.glyphDown]: open,
        })}
        glyph={glyph}
        color={disabled ? colors.textDisabled : colors.ctaPrimary}
      />
    </Button>
  )
}

ButtonDropdown.defaultProps = {
  size: 'medium',
  open: false,
  noBorder: false,
  fullWidth: false,
  disabled: false,
  glyph: 'caret-down-small',
  className: '',
}

export default ButtonDropdown
