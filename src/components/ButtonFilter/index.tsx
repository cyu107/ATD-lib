import React, { ReactElement } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@bit/littlebox.atd.button'
import colors from '@bit/littlebox.atd.colors'

const useStyles = makeStyles({
  root: {
    color: colors.ctaSecondary,
    border: `1px solid transparent`,
    backgroundColor: colors.white,
    position: 'relative',
    '&:hover': {
      color: colors.ctaPrimary,
      background: colors.ctaPrimaryHover,
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
  },
})

type PropsType = {
  /** React Node or text */
  children: ReactElement[] | ReactElement | string
  /** ClassName */
  className?: string
  /** Full width */
  fullWidth?: boolean
  /** One of the following: 'small' | 'medium' | 'large' */
  size?: 'small' | 'medium' | 'large'
  /** Makes button non-interactable */
  disabled?: boolean
  /** OnClick handler */
  onClick?: (...args: any[]) => any
}

const ButtonFilter = ({ children, className, ...props }: PropsType): ReactElement => {
  const classes = useStyles()
  return (
    <Button
      className={clsx({
        [classes.root]: true,
        [className || '']: className,
      })}
      {...props}
    >
      {children}
    </Button>
  )
}

ButtonFilter.defaultProps = {
  size: 'medium',
  disabled: false,
  fullWidth: false,
  className: '',
}

export default ButtonFilter
