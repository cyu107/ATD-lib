import * as React from 'react'
import { ReactComponentElement } from 'react'
import {
  IconButton,
  makeStyles,
  Snackbar as MaterialSnackbar,
  SnackbarContent,
  Theme,
} from '@material-ui/core'
import clsx from 'clsx'
import CloseIcon from '@material-ui/icons/Close'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import WarningIcon from '@material-ui/icons/Warning'
import ErrorIcon from '@material-ui/icons/Error'
import InfoIcon from '@material-ui/icons/Info'
import colors from '@bit/littlebox.atd.colors'

export enum SnackbarTypes {
  SUCCESS = 'SUCCESS',
  INFO = 'INFO',
  ERROR = 'ERROR',
  WARNING = 'WARNING',
}

export interface SnackbarProps {
  type: SnackbarTypes
  //  message: string | ReactComponentElement<any, any>;
  message: any
  open: boolean
  onClose?: () => void
  icon?: ReactComponentElement<any, any> | null
  anchorOrigin?: {
    vertical?: 'bottom' | 'top'
    horizontal?: 'left' | 'right'
  }
}

export const snackbarIconVariant = {
  SUCCESS: CheckCircleIcon,
  WARNING: WarningIcon,
  ERROR: ErrorIcon,
  INFO: InfoIcon,
}

const useStyles = makeStyles((theme: Theme) => ({
  [SnackbarTypes.SUCCESS]: {
    backgroundColor: colors.statusSuccess,
  },
  [SnackbarTypes.ERROR]: {
    backgroundColor: colors.statusAlert,
  },
  [SnackbarTypes.INFO]: {
    backgroundColor: colors.white,
    color: colors.gray800,
  },
  [SnackbarTypes.WARNING]: {
    backgroundColor: colors.statusWarning,
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
}))

const SnackbarComponent = (props: SnackbarProps) => {
  /**
   * props
   */
  const { anchorOrigin, message, open, onClose, type, icon } = props

  const classes = useStyles()
  const Icon = snackbarIconVariant[type]

  /**
   *
   */
  const renderMsg = () => {
    return (
      <SnackbarContent
        className={clsx(classes[type])}
        message={
          <span id="client-snackbar" className={classes.message}>
            {!icon && <Icon className={clsx(classes.icon, classes.iconVariant)} />}
            {!!icon && (
              <div
                style={{
                  marginRight: '15px',
                  // marginLeft: '15px',
                }}
              >
                {icon}
              </div>
            )}
            {message}
          </span>
        }
        action={[
          <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
            <CloseIcon className={classes.icon} />
          </IconButton>,
        ]}
      />
    )
  }

  return (
    <MaterialSnackbar
      anchorOrigin={{
        vertical: (anchorOrigin && anchorOrigin.vertical) || 'bottom',
        horizontal: (anchorOrigin && anchorOrigin.horizontal) || 'right',
      }}
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
    >
      {renderMsg()}
    </MaterialSnackbar>
  )
}

export default SnackbarComponent
