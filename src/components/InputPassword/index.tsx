import React, { ReactNode, ReactElement, useState } from 'react'
import { TextField, InputAdornment, IconButton, makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import colors from '@bit/littlebox.atd.colors'
import Icon from '@bit/littlebox.atd.icons'
import InputWrapper from '@bit/littlebox.atd.forms.input-wrapper'
import InputLabel from '@bit/littlebox.atd.forms.input-label'
import InputHelperText from '@bit/littlebox.atd.forms.input-helper-text'

const useStyles = makeStyles({
  root: {
    '& .MuiOutlinedInput-adornedEnd': {
      padding: '0',
    },
    '& .MuiInputBase-input': {
      fontWeight: 500,
    },
    '& .MuiInputLabel-outlined': {
      fontWeight: 500,
    },
  },
  disabled: {
    borderRadius: '4',
    backgroundColor: colors.inputBorderDisabled,
    borderColor: colors.inputBorderDisabled,
    '&.Mui-disabled': {
      boxShadow: 'none',
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
    },
    '& .MuiInputLabel-outlined': {
      color: '#8e8e8e',
      opacity: 1,
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
   * The id of the input element. Use this to allow for ARIA attributes.
   * (describedby, errormessage)
   */
  id?: string
  /**
   * If true, type attribute will use "text" instead of "password"
   * @default false
   */
  visible?: boolean
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

const InputPassword = ({
  name,
  label,
  placeholder,
  error,
  errorText,
  helperText,
  id,
  readOnly,
  disabled,
  required,
  smallWrapMargin,
  ...props
}: PropsType): ReactElement => {
  const classes = useStyles()
  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => setShowPassword(!showPassword)
  const helperID = id ? id.concat('-', 'helper-text') : undefined
  const errorID = id ? id.concat('-', 'error-text') : undefined

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
        type={showPassword ? 'text' : 'password'}
        aria-describedby={helperID}
        aria-errormessage={errorID}
        disabled={disabled}
        required={required}
        error={error}
        InputLabelProps={{ required: false }}
        InputProps={{
          readOnly: readOnly,
          endAdornment: (
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword}>
                {showPassword ? (
                  <Icon glyph="visibility-off" size={24} color={colors.ctaSecondary} />
                ) : (
                  <Icon glyph="visibility-on" size={24} color={colors.ctaSecondary} />
                )}
              </IconButton>
            </InputAdornment>
          ),
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

InputPassword.defaultProps = {
  autoFocus: false,
  readOnly: false,
  disabled: false,
  required: false,
  smallWrapMargin: false,
}

export default InputPassword
