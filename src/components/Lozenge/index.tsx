import React, { ReactElement } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import colors from '@bit/littlebox.atd.colors'

const useStyles = makeStyles({
  root: {
    padding: '0.4em',
    fontSize: '10px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    lineHeight: 1,
    letterSpacing: '0.4px',
    borderRadius: '0.4em',
    backgroundColor: colors.gray400,
    color: colors.gray800,
  },

  small: {
    fontSize: '9px',
  },

  // Variants
  subtle: {
    '&$success': {
      color: colors.statusSuccess,
      backgroundColor: colors.statusSuccessTint,
    },
    '&$warning': {
      color: colors.gray800,
      backgroundColor: colors.statusWarningTint,
    },
    '&$alert': {
      color: colors.statusAlert,
      backgroundColor: colors.statusAlertTint,
    },
    '&$inProgress': {
      color: colors.statusInProgress,
      backgroundColor: colors.statusInProgressTint,
    },
    '&$new': {
      color: colors.statusNew,
      backgroundColor: colors.statusNewTint,
    },
  },
  bold: {
    backgroundColor: colors.gray800,
    color: colors.white,
    '&$success': {
      backgroundColor: colors.statusSuccess,
    },
    '&$warning': {
      color: colors.gray800,
      backgroundColor: colors.statusWarning,
    },
    '&$alert': {
      backgroundColor: colors.statusAlert,
    },
    '&$inProgress': {
      backgroundColor: colors.statusInProgress,
    },
    '&$new': {
      backgroundColor: colors.statusNew,
    },
  },
  outline: {
    color: colors.gray800,
    boxShadow: 'inset 0 0 0 1px currentColor',
    backgroundColor: 'transparent',
    '&$success': {
      color: colors.statusSuccess,
      backgroundColor: 'transparent',
    },
    '&$warning': {
      boxShadow: `inset 0 0 0 1px ${colors.statusWarning}`,
    },
    '&$alert': {
      color: colors.statusAlert,
    },
    '&$inProgress': {
      color: colors.statusInProgress,
    },
    '&$new': {
      color: colors.statusNew,
    },
  },

  // Colors
  success: {
    backgroundColor: colors.statusSuccess,
  },
  warning: {},
  alert: {},
  inProgress: {},
  new: {},
})

export type PropsType = {
  /** Lozenge label text */
  children: string
  /** One of the following: 'small' | 'normal' */
  size?: 'small' | 'normal'
  /** One of the following: 'subtle' | 'bold' | 'outline' */
  variant?: 'subtle' | 'bold' | 'outline'
  /** One of the following: 'default' | 'success' | 'warning' | 'alert' | 'in-progress' | 'new' */
  color?: 'default' | 'success' | 'warning' | 'alert' | 'in-progress' | 'new'
}

const Lozenge = ({ children, size, color, variant }: PropsType): ReactElement => {
  const classes = useStyles()
  return (
    <span
      className={clsx({
        [classes.root]: true,
        [classes.small]: size === 'small',
        [classes.subtle]: variant === 'subtle',
        [classes.bold]: variant === 'bold',
        [classes.outline]: variant === 'outline',
        [classes.success]: color === 'success',
        [classes.warning]: color === 'warning',
        [classes.alert]: color === 'alert',
        [classes.inProgress]: color === 'in-progress',
        [classes.new]: color === 'new',
      })}
    >
      {children}
    </span>
  )
}

Lozenge.defaultProps = {
  color: 'default',
  size: 'normal',
  variant: 'subtle',
}

export default Lozenge
