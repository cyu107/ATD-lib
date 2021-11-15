import React, { ReactNode, ReactElement } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FormHelperText from '@material-ui/core/FormHelperText'
import colors from '@bit/littlebox.atd.colors'
import Icon from '@bit/littlebox.atd.icons'
import clsx from 'clsx'

const useStyles = makeStyles({
  text: {
    display: 'flex',
    marginTop: '4px',
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '16px',
    color: colors.textActive,
  },
  disabled: {
    color: colors.textDisabled,
  },
  error: {
    color: '#f44336',
  },
  icon: {
    display: 'inline-flex',
    alignItems: 'center',
    '& + span': {
      display: 'inline-flex',
      paddingLeft: '2px',
      fontWeight: '600',
    },
  },
})

type PropsType = {
  /**
   * Id of associated input element
   */
  idHelperText?: string
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
}

const InputHelperText = ({
  isError,
  isDisabled,
  idHelperText,
  children,
}: PropsType): ReactElement => {
  const classes = useStyles()

  return (
    <FormHelperText
      className={clsx({
        [classes.text]: true,
        [classes.disabled]: isDisabled,
        [classes.error]: isError,
      })}
      id={idHelperText}
    >
      {isError && (
        <span className={classes.icon}>
          <Icon glyph="alert" size={16} color={colors.statusAlert} />
        </span>
      )}
      <span>{children}</span>
    </FormHelperText>
  )
}

InputHelperText.defaultProps = {
  isError: false,
  isDisabled: false,
}

export default InputHelperText
