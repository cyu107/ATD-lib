import React, { ReactElement, ReactNode } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import colors from '@bit/littlebox.atd.colors'
import clsx from 'clsx'

const useStyles = makeStyles({
  label: {
    display: 'block',
    marginBottom: '8px',
    fontSize: '14px',
    lineHeight: '16px',
    '& span': {
      fontWeight: 600,
      color: 'rgb(124, 124, 124)',
    },
  },
  requiredLabel: {
    display: 'inline',
    fontSize: '12px',
    fontWeight: 500,
    paddingLeft: '4px',
  },
  disabled: {
    '& span': {
      color: colors.textDisabled,
    },
  },
  error: {
    '& span': {
      color: '#f44336',
    },
  },
})

type PropsType = {
  /**
   * ID of associated input element.
   */
  htmlFor?: string
  /**
   * If true, the input element will be disabled.
   * @default false
   */
  isDisabled?: boolean
  /**
   * If true, the label is displayed as required and the input element` will be required.
   * @default false
   */
  isRequired?: boolean
  /**
   * If true, displays errorText.
   * @default false
   */
  isError?: boolean
  /**
   * The label content.
   */
  children?: string | ReactNode
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onClick?: (...args: any[]) => any
}

const InputLabel = ({
  isDisabled,
  isRequired,
  isError,
  htmlFor,
  children,
  ...props
}: PropsType): ReactElement => {
  const classes = useStyles()

  return (
    <>
      <Typography
        className={clsx({
          [classes.label]: true,
          [classes.disabled]: isDisabled,
          [classes.error]: isError,
        })}
        component="label"
        variant="subtitle2"
        htmlFor={htmlFor}
        {...props}
      >
        <span>
          {children}
          {isRequired ? <span className={classes.requiredLabel}>(required)</span> : ''}
        </span>
      </Typography>
    </>
  )
}

InputLabel.defaultProps = {
  isError: false,
  isDisabled: false,
  isRequired: false,
}

export default InputLabel
