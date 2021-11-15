import React, { ReactElement, ReactNode, useState } from 'react'
import { makeStyles, Select, SelectProps, MenuItem } from '@material-ui/core'
import clsx from 'clsx'
import Icon from '@bit/littlebox.atd.icons'
import colors from '@bit/littlebox.atd.colors'
import InputWrapper from '@bit/littlebox.atd.forms.input-wrapper'
import InputLabel from '@bit/littlebox.atd.forms.input-label'
import InputHelperText from '@bit/littlebox.atd.forms.input-helper-text'

const useStyles = makeStyles({
  root: {
    '& .icon--caret-down': {
      position: 'absolute',
      top: '50%',
      right: '16px',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
    },
    '& .MuiInputBase-input': {
      fontWeight: 500,
      color: colors.textPlaceholder,
    },
  },
  disabled: {
    backgroundColor: colors.inputBorderDisabled,
    borderColor: colors.inputBorderDisabled,
    '& .Mui-disabled': {
      color: colors.textDisabled,
    },
  },
  readOnly: {
    '& .MuiInputBase-input': {
      paddingLeft: 0,
      paddingRight: 0,
      background: 'none',
      border: 'none',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderRadius: 0,
      border: 'none',
      borderBottom: '2px solid #D8D9D6',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderBottom: '2px solid #D8D9D6',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderBottom: '2px solid #D8D9D6',
    },
  },
  error: {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#f44336',
    },
  },
})

type PropsType = {
  /**
   * Name attribute of the input element.
   */
  name: string
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
   * The helper text content. Use for assistive content.
   */
  helperText?: string | ReactNode
  /**
   * The id of the input element. Use this prop to make label and helperText accessible for screen readers.
   */
  id?: string
  /**
   * The input value. Providing an empty string will select no options. This prop is required when the native prop is false (default). Set to an empty string '' if you don't want any of the available options to be selected.
   If the value is an object it must have reference equality with the option in order to be selected. If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  options: {
    value: string | number
    label: string
  }[]
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
   * If true, additional padding (20px) is added vertically.
   * @default false
   */
  smallWrapMargin?: boolean
} & SelectProps

const InputSelect = ({
  name,
  smallWrapMargin,
  label,
  options,
  placeholder,
  helperText,
  readOnly,
  disabled,
  required,
  error,
  errorText,
  id,
  ...props
}: PropsType): ReactElement => {
  const classes = useStyles()
  const [isOpen, setIsOpen] = useState(false)
  const helperID = id ? id.concat('-', 'helper-text') : undefined
  const errorID = id ? id.concat('-', 'error-text') : undefined

  const handleLabelClick = () => {
    setIsOpen(true)
  }

  return (
    <InputWrapper smallWrapMargin={smallWrapMargin}>
      {label && (
        <InputLabel
          htmlFor={id}
          isRequired={required}
          isDisabled={disabled}
          isError={error}
          onClick={handleLabelClick}
        >
          {label}
        </InputLabel>
      )}

      <Select
        className={clsx({
          [classes.root]: true,
          [classes.disabled]: disabled,
          [classes.readOnly]: readOnly,
        })}
        autoFocus={isOpen}
        name={name}
        disabled={(disabled || readOnly) && true}
        fullWidth
        displayEmpty
        type="select"
        open={isOpen}
        onOpen={() => {
          setIsOpen(true)
        }}
        onClose={() => {
          setIsOpen(false)
        }}
        variant="outlined"
        error={error}
        IconComponent={() => (
          <Icon
            glyph="caret-down"
            color={readOnly || disabled ? colors.textDisabled : colors.ctaPrimary}
            size={24}
          />
        )}
        inputProps={{
          id: id,
          'aria-describedby': helperID || '',
          'aria-errormessage': errorID || '',
          readOnly: readOnly,
        }}
        renderValue={(selected) => {
          if (selected === 0 || !selected) {
            return <span>{placeholder}</span>
          }

          if (options) {
            const selectedOption = options.find((a) => a.value === selected)
            return <span>{selectedOption && selectedOption.label}</span>
          }

          return <span />
        }}
        {...props}
      >
        {placeholder && (
          <MenuItem value="" disabled>
            {placeholder}
          </MenuItem>
        )}

        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>

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

InputSelect.defaultProps = {
  placeholder: 'Select an option',
  error: false,
  readOnly: false,
  disabled: false,
  required: false,
  smallWrapMargin: false,
}

export default InputSelect
