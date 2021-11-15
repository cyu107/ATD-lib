import React, { ReactNode, ReactElement } from 'react'
import { Checkbox, CheckboxProps, makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import InputWrapper from '@bit/littlebox.atd.forms.input-wrapper'
import InputLabelControl from '@bit/littlebox.atd.forms.input-label-control'

const useStyles = makeStyles({
  root: {
    color: '#67666A',
  },
})

type PropsType = {
  /**
   * Name attribute of the input element.
   */
  name: string
  /**
   * The text to be used in an enclosing label element.
   */
  label?: string | ReactNode
  /**
   * The placement of the label.
   * 'default' - Traditional layout
   * 'left' - Label, errorText, and helperText are left aligned to element
   * 'right' - Label, errorText, and helperText are right aligned to element
   * @default 'default'
   */
  labelPlacement?: 'default' | 'left' | 'right'
  /**
   * The id of the input element. Use this prop to make label and helperText accessible for screen readers.
   */
  id?: string
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
   * The size of the checkbox. small is equivalent to the dense checkbox styling.
   * @default 'medium'
   */
  size?: 'small' | 'medium'
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
} & CheckboxProps

const InputCheckbox = ({
  name,
  label,
  labelPlacement,
  id,
  error,
  size,
  errorText,
  helperText,
  required,
  disabled,
  onChange,
  checked,
  value,
  smallWrapMargin,
  ...props
}: PropsType): ReactElement => {
  const classes = useStyles()
  const helperID = id ? id.concat('-', 'helper-text') : undefined
  const errorID = id ? id.concat('-', 'error-text') : undefined

  return (
    <>
      <InputWrapper smallWrapMargin={smallWrapMargin}>
        <InputLabelControl
          label={label}
          labelPlacement={labelPlacement}
          htmlFor={id}
          id={id}
          size={size}
          isRequired={required}
          isDisabled={disabled}
          isError={error}
          errorText={errorText}
          helperText={helperText}
          as={
            <Checkbox
              className={clsx({
                [classes.root]: true,
              })}
              name={name}
              id={id}
              size={size}
              value={value}
              onChange={onChange}
              checked={checked}
              disabled={disabled}
              inputProps={{
                'aria-label': name && name,
                'aria-invalid': error,
                'aria-describedby': helperID || '',
                'aria-errormessage': errorID || '',
              }}
              {...props}
            />
          }
        />
      </InputWrapper>
    </>
  )
}

InputCheckbox.defaultProps = {
  size: 'small',
  labelPlacement: 'default',
  disabled: false,
  required: false,
  smallWrapMargin: false,
}

export default InputCheckbox
