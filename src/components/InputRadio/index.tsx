import React, { ReactNode, ReactElement } from 'react'
import { Radio, RadioProps, makeStyles } from '@material-ui/core'
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
   * The label content.
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
   * If true, additional top padding reduces down to (8px) from (40px).
   * @default false
   */
  smallWrapMargin?: boolean
} & RadioProps

const InputRadio = ({
  label,
  labelPlacement,
  helperText,
  disabled,
  size,
  error,
  errorText,
  required,
  smallWrapMargin,
  onChange,
  name,
  id,
  value,
  checked,
  ...props
}: PropsType): ReactElement => {
  const classes = useStyles()
  const helperID = id ? id.concat('-', 'helper-text') : undefined
  const errorID = id ? id.concat('-', 'error-text') : undefined

  return (
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
          <Radio
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
              'aria-describedby': helperID || '',
              'aria-errormessage': errorID || '',
            }}
            {...props}
          />
        }
      />
    </InputWrapper>
  )
}

InputRadio.defaultProps = {
  checked: false,
}

export default InputRadio
