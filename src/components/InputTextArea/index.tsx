import React, { ReactNode, ReactElement } from 'react'
import { TextareaAutosize, TextareaAutosizeProps, makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import colors from '@bit/littlebox.atd.colors'
import InputWrapper from '@bit/littlebox.atd.forms.input-wrapper'
import InputLabel from '@bit/littlebox.atd.forms.input-label'
import InputHelperText from '@bit/littlebox.atd.forms.input-helper-text'

const useStyles = makeStyles({
  root: {
    background: 'transparent',
    borderRadius: '4px',
    width: '100%',
    resize: 'vertical',
    borderColor: colors.inputBorder,
    transition: 'border-color 0.3s ease',
    fontWeight: 500,
    padding: '12.5px 16px',
    color: colors.textActive,
    fontFamily: 'Whitney, Arial',
    fontSize: '16px',
    '&:hover': {
      boxShadow: 'none',
      borderColor: colors.textActive,
    },
    '&:focus': {
      boxShadow: 'none',
      borderColor: colors.textActive,
      outline: '0px',
    },
    '&::placeholder': {
      color: colors.textPlaceholder,
    },
  },
  disabled: {
    backgroundColor: colors.inputBorderDisabled,
    borderColor: colors.inputBorderDisabled,
    color: colors.textDisabled,
    resize: 'none',
    '&:hover': {
      backgroundColor: colors.inputBorderDisabled,
      borderColor: colors.inputBorderDisabled,
    },
    '&::placeholder': {
      color: colors.textDisabled,
    },
  },
  readOnly: {
    borderRadius: 0,
    border: 'none',
    borderBottom: '2px solid #D8D9D6',
    resize: 'none',
    paddingLeft: 0,
    paddingRight: 0,
    '&:hover': {
      borderColor: '#D8D9D6',
      borderWidth: '2px',
    },
    '&:focus': {
      borderColor: '#D8D9D6',
      borderWidth: '2px',
    },
  },
  error: {
    borderColor: '#f44336',
  },
})

type PropsType = {
  /**
   * Name attribute of the input element.
   */
  name: string
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value?: unknown
  /**
   * The label content.
   */
  label?: string | ReactNode
  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder?: string
  /**
   * If true, displays errorText.
   * @default false
   */
  error?: boolean
  /**
   * The error text content. Use for error content.
   */
  errorText?: string | ReactNode
  /**
   * The helper text content. Usd either for error or assistive content.
   */
  helperText?: string | ReactNode
  /**
   * Minimum number of rows to display.
   * @default 3
   */
  rowsMin?: number | string
  /**
   * The id of the input element. Use this prop to make label and helperText accessible for screen readers.
   */
  id?: string
  /**
   * If true, add readonly attribute and disables element.
   * @default false
   */
  readOnly?: boolean
  /**
   * If true, the input element will be disabled.
   * @default false
   */
  disabled?: boolean
  /**
   * If true, the label is displayed as required and the input element` will be required.
   * @default false
   */
  required?: boolean
  /**
   * If true, additional top padding reduces down to (8px) from (40px).
   * @default false
   */
  smallWrapMargin?: boolean
} & TextareaAutosizeProps

const InputTextArea = ({
  name,
  label,
  placeholder,
  error,
  errorText,
  helperText,
  id,
  rowsMin,
  readOnly,
  disabled,
  required,
  smallWrapMargin,
  ...props
}: PropsType): ReactElement => {
  const classes = useStyles()
  const helperID = id ? id.concat('-', 'helper-text') : undefined
  const errorID = id ? id.concat('-', 'error-text') : undefined

  return (
    <InputWrapper smallWrapMargin={smallWrapMargin}>
      {label && (
        <InputLabel htmlFor={id} isError={error} isRequired={required} isDisabled={disabled}>
          {label}
        </InputLabel>
      )}

      <TextareaAutosize
        className={clsx({
          [classes.root]: true,
          [classes.disabled]: disabled,
          [classes.readOnly]: readOnly,
          [classes.error]: error,
        })}
        name={name}
        id={id}
        rowsMin={readOnly ? 0 : rowsMin}
        placeholder={placeholder}
        aria-describedby={helperID}
        aria-errormessage={errorID}
        aria-invalid={!!error}
        disabled={disabled}
        required={required}
        readOnly={readOnly}
        {...props}
      />

      {error && errorText && (
        <InputHelperText idHelperText={errorID} isError={error}>
          {errorText}
        </InputHelperText>
      )}

      {helperText && (
        <InputHelperText idHelperText={helperID} isDisabled={disabled}>
          {helperText}
        </InputHelperText>
      )}
    </InputWrapper>
  )
}

InputTextArea.defaultProps = {
  rowsMin: 3,
  readOnly: false,
  disabled: false,
  required: false,
  smallWrapMargin: false,
}

export default InputTextArea
