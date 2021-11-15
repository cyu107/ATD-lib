import React, { ReactNode, ReactElement } from 'react'
import { TextField, makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import InputMask from 'react-input-mask'
import colors from '@bit/littlebox.atd.colors'
import InputWrapper from '@bit/littlebox.atd.forms.input-wrapper'
import InputLabel from '@bit/littlebox.atd.forms.input-label'
import InputHelperText from '@bit/littlebox.atd.forms.input-helper-text'

const useStyles = makeStyles({
  root: {
    '& .MuiInputBase-input': {
      fontWeight: 500,
    },
    '& .MuiInputLabel-outlined': {
      fontWeight: 500,
    },
  },
  disabled: {
    borderRadius: '4px',
    backgroundColor: colors.inputBorderDisabled,
    borderColor: colors.inputBorderDisabled,
    '&.Mui-disabled': {
      boxShadow: 'none',
      color: colors.textDisabled,
    },
    '& .Mui-disabled::placeholder': {
      color: colors.textDisabled,
    },
    '& .Mui-disabled': {
      color: colors.textDisabled,
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
  },
  readOnly: {
    '& .MuiInputBase-input': {
      paddingLeft: 0,
      paddingRight: 0,
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderRadius: 0,
      border: 'none',
      borderBottom: '2px solid #D8D9D6',
    },
    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#D8D9D6',
      borderWidth: '2px',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#D8D9D6',
      borderWidth: '2px',
    },
  },
})

type PropsType = {
  /**
   * Name attribute of the input element.
   */
  name?: string
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
   * The mask format. Can be either a string or array of characters and regular expressions.
   */
  mask?: string
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
   * The id of the input element. Use this to allow for ARIA attributes.
   * (describedby, errormessage)
   */
  id?: string
  /**
   * Type of the input element. It should be a valid HTML5 input type.
   * @default 'text'
   */
  type?:
    | 'color'
    | 'date'
    | 'email'
    | 'file'
    | 'image'
    | 'month'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week'
    | string
  /**
   * If true, a textarea element will be rendered instead of an input.
   * @default false
   */
  multiline?: boolean
  /**
   * If true, prevents the user from changing the value of the field.
   * (not from interacting with the field with no disable styling)
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
   * If true, input top padding reduces down to (8px) from (40px).
   * @default false
   */
  smallWrapMargin?: boolean
  /**
   * Callback fired when the input is blurred.
   * (first argument (event) might be undefined)
   */
  onBlur?: React.FocusEventHandler<HTMLInputElement>
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  onFocus?: React.FocusEventHandler<HTMLInputElement>
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>
}

function PhoneNumberMask(props: any) {
  return <InputMask mask={props.mask} {...props} />
}

const InputText = ({
  name,
  label,
  placeholder,
  mask,
  error,
  errorText,
  helperText,
  id,
  type,
  readOnly,
  disabled,
  required,
  smallWrapMargin,
  ...props
}: PropsType): ReactElement => {
  const classes = useStyles()
  const helperID = id ? id.concat('-', 'helper-text') : undefined
  const errorID = id ? id.concat('-', 'error-text') : undefined

  const handleMask = (mask: any) => {
    if (mask) {
      return PhoneNumberMask
    } else {
      return 'input'
    }
  }

  return (
    <InputWrapper smallWrapMargin={smallWrapMargin}>
      {label && (
        <InputLabel htmlFor={id} isRequired={required} isDisabled={disabled} isError={error}>
          {label}
        </InputLabel>
      )}

      <TextField
        className={clsx({
          [classes.root]: true,
          [classes.disabled]: disabled,
          [classes.readOnly]: readOnly,
        })}
        name={name}
        id={id}
        placeholder={placeholder}
        aria-describedby={helperID}
        aria-errormessage={errorID}
        disabled={disabled}
        required={required}
        error={error}
        type={type}
        InputProps={{
          readOnly: readOnly,
          inputComponent: handleMask(mask),
          inputProps: { mask: mask },
        }}
        variant="outlined"
        fullWidth
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

InputText.defaultProps = {
  multiline: false,
  type: 'text',
  readOnly: false,
  disabled: false,
  required: false,
  smallWrapMargin: false,
}

export default InputText
