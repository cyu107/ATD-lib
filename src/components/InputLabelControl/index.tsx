import React, { ReactElement, ReactNode } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import colors from '@bit/littlebox.atd.colors'
import InputHelperText from '@bit/littlebox.atd.forms.input-helper-text'
import clsx from 'clsx'

const useStyles = makeStyles({
  root: {
    cursor: 'pointer',
  },
  sideContainer: {
    paddingTop: '12px',
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontSize: '14px',
    lineHeight: '16px',
    fontWeight: 600,
    color: 'rgb(124, 124, 124)',
  },
  requiredLabel: {
    display: 'inline',
    fontSize: '12px',
    fontWeight: 500,
    paddingLeft: '4px',
  },
  onOff: {
    fontWeight: 500,
    paddingLeft: '4px',
  },
  disabled: {
    '& $label': {
      color: colors.textDisabled,
    },
  },
  error: {
    '& $label': {
      color: '#f44336',
    },
  },
  default: {
    display: 'block',
  },
  left: {
    display: 'inline-flex',
    flexDirection: 'row-reverse',
    '& .MuiButtonBase-root': {
      alignSelf: 'flex-start',
    },
    '& .MuiSwitch-root': {
      marginLeft: '16px',
    },
  },
  right: {
    display: 'inline-flex',
    flexDirection: 'row',
    '& .MuiButtonBase-root': {
      alignSelf: 'flex-start',
    },
    '& .MuiSwitch-root': {
      marginRight: '16px',
    },
  },
  small: {
    '& $sideContainer': {
      paddingTop: '11px',
    },
    '& $label': {
      fontSize: '14px',
      lineHeight: '16px',
      marginBottom: '4px',
    },
    '& $onOff': {
      fontSize: '12px',
      lineHeight: '16px',
    },
    '&$right .MuiSwitch-root': {
      marginRight: '12px',
    },
    '&$left .MuiSwitch-root': {
      marginLeft: '12px',
    },
    '& .MuiSwitch-root + div': {
      paddingTop: '4px',
    },
  },
  medium: {
    '& $label': {
      marginBottom: '8px',
      fontSize: '18px',
      lineHeight: '20px',
    },
    '& $onOff': {
      fontSize: '16px',
      lineHeight: '20px',
    },
    '& .MuiFormHelperText-root': {
      fontSize: '14px',
      lineHeight: '18px',
    },
    '& p': {
      marginTop: '8px',
    },
  },
})

type PropsType = {
  /**
   * The id of the input element. Use this prop to make label and helperText accessible for screen readers.
   */
  id?: string
  as: ReactNode | null
  /**
   * The text to be used in an enclosing label element.
   */
  label?: string | ReactNode
  /**
   * The position of the label, error, and helper text.
   * 'default' - Traditional layout
   * 'left' - Label, errorText, and helperText are left aligned to element
   * 'right' - Label, errorText, and helperText are right aligned to element
   * @default 'default'
   */
  labelPlacement?: 'default' | 'left' | 'right'
  /**
   * The error text content. Use for error content.
   */
  errorText?: string | ReactNode
  /**
   * The helper text content. Usd either for error or assistive content.
   */
  helperText?: string | ReactNode
  /**
   * The size of the checkbox. small is equivalent to the dense checkbox styling.
   * @default 'medium'
   */
  size?: 'small' | 'medium'
  /**
   * The id of the linked input element.
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
  onOff?: boolean
  checked?: boolean
}

const InputLabelControl = ({
  id,
  label,
  labelPlacement,
  errorText,
  helperText,
  size,
  as,
  onOff,
  checked,
  isDisabled,
  isRequired,
  isError,
  htmlFor,
}: PropsType): ReactElement => {
  const classes = useStyles()
  const helperID = id ? id.concat('-', 'helper-text') : undefined
  const errorID = id ? id.concat('-', 'error-text') : undefined

  return (
    <>
      <Typography
        className={clsx({
          [classes.root]: true,
          [classes.disabled]: isDisabled,
          [classes.error]: isError,
          [classes.default]: labelPlacement === 'default',
          [classes.left]: labelPlacement === 'left',
          [classes.right]: labelPlacement === 'right',
          [classes.small]: size === 'small',
          [classes.medium]: size === 'medium',
        })}
        component="label"
        variant="subtitle2"
        htmlFor={htmlFor}
      >
        {labelPlacement === 'default' ? (
          <>
            <span className={classes.label}>
              {label}
              <span>{isRequired && <span className={classes.requiredLabel}>(required)</span>}</span>
            </span>

            <span>
              {as} {onOff && <span className={classes.onOff}>{checked ? 'On' : 'Off'}</span>}
            </span>

            {isError && errorText && (
              <InputHelperText idHelperText={errorID} isError={isError}>
                {errorText}
              </InputHelperText>
            )}

            {helperText && (
              <InputHelperText idHelperText={helperID} isDisabled={isDisabled}>
                {helperText}
              </InputHelperText>
            )}
          </>
        ) : (
          <>
            {as}

            <div className={classes.sideContainer}>
              <span className={classes.label}>
                {label}
                <span>
                  {isRequired && <span className={classes.requiredLabel}>(required)</span>}
                  {onOff && <span className={classes.onOff}>{checked ? '(On)' : '(Off)'}</span>}
                </span>
              </span>

              {isError && errorText && (
                <InputHelperText idHelperText={errorID} isError={isError}>
                  {errorText}
                </InputHelperText>
              )}

              {helperText && (
                <InputHelperText idHelperText={helperID} isDisabled={isDisabled}>
                  {helperText}
                </InputHelperText>
              )}
            </div>
          </>
        )}
      </Typography>
    </>
  )
}

export default InputLabelControl
