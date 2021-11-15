import React, { FocusEvent, MouseEvent, ReactNode, ReactElement } from 'react'
import { Switch, CheckboxProps, makeStyles } from '@material-ui/core'
import colors from '@bit/littlebox.atd.colors'
import InputWrapper from '@bit/littlebox.atd.forms.input-wrapper'
import InputLabelControl from '@bit/littlebox.atd.forms.input-label-control'
import clsx from 'clsx'

const useStyles = makeStyles({
  root: {
    width: '60px',
    height: '43px',
    marginLeft: '-12px',
    '& .MuiSwitch-switchBase': {
      left: '3px',
      color: colors.white,
    },
    '& .MuiSwitch-track': {
      marginTop: '-3px',
      width: '48px',
      height: '24px',
      flexShrink: 0,
      borderRadius: '3em',
      opacity: 1,
      backgroundColor: 'rgb(219, 217, 214)',
    },
    '& .MuiSwitch-thumb': {
      width: '24px',
      height: '24px',
      boxShadow: 'none',
      border: `2px solid ${colors.ctaSecondary}`,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: colors.white,
      transform: 'translateX(24px)',
    },
    '& .MuiSwitch-switchBase.Mui-checked .MuiSwitch-thumb': {
      borderColor: colors.ctaPrimary,
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: colors.ctaPrimary,
    },
    // Size - Small
    '&.MuiSwitch-sizeSmall': {
      width: '40px',
      height: '24px',
      marginLeft: '-8px',
    },
    '&.MuiSwitch-sizeSmall .MuiSwitch-thumb': {
      width: '16px',
      height: '16px',
    },
    '&.MuiSwitch-sizeSmall .MuiSwitch-track': {
      width: '32px',
      height: '16px',
    },
    '&.MuiSwitch-sizeSmall .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(16px)',
    },
    // State - Disabled
    '& .MuiSwitch-switchBase.Mui-disabled .MuiSwitch-thumb': {
      backgroundColor: colors.white,
      borderColor: 'rgb(179, 179, 179)',
    },
    '& .MuiSwitch-switchBase.Mui-disabled .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: 'rgb(235, 235, 235)',
    },
    '& .MuiSwitch-switchBase.Mui-disabled.Mui-checked .MuiSwitch-thumb': {
      borderColor: 'rgb(179, 179, 179)',
    },
    '& .MuiSwitch-switchBase.Mui-disabled.Mui-checked + .MuiSwitch-track': {
      backgroundColor: 'rgb(179, 179, 179)',
    },
  },
  wrap: {
    display: 'flex',
  },
  text: {
    fontSize: '0',
    marginLeft: '16px',
  },
  label: {
    display: 'block',
    marginTop: '10px',
    marginBottom: '8px',
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '20px',
    color: '#7c7c7c',
    cursor: 'pointer',
  },
  onOff: {
    color: colors.textActive,
    fontWeight: 500,
    fontSize: '16px',
    lineHeight: '20px',
    marginTop: '10px',
    marginBottom: '8px',
    cursor: 'default',
  },
  helper: {
    fontSize: '16px',
    lineHeight: '20px',
    color: '#424140',
  },
  small: {
    '& $text': {
      marginLeft: '8px',
    },
    '& $label': {
      marginTop: '4px',
      marginBottom: '4px',
      fontSize: '14px',
      lineHeight: '16px',
    },
    '& $helper': {
      fontSize: '12px',
      lineHeight: '16px',
    },
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
   * Input element is checked
   * @default true
   */
  checked: boolean
  /**
   * If true, additional top padding reduces down to (8px) from (40px).
   * @default false
   */
  smallWrapMargin?: boolean
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
   * If true, on and off labels will show next to toggle element.
   * @default false
   */
  onOff?: boolean
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange?: (event: any) => void
  onClick?: (event: MouseEvent) => void
  onFocus?: (event: FocusEvent) => void
} & CheckboxProps

const Toggle = ({
  smallWrapMargin,
  label,
  labelPlacement,
  name,
  id,
  disabled,
  required,
  readOnly,
  size,
  onOff,
  checked,
  error,
  errorText,
  helperText,
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
        onOff={onOff}
        checked={checked}
        as={
          <Switch
            className={clsx({
              [classes.root]: true,
            })}
            name={name}
            id={id}
            size={size}
            inputProps={{
              'aria-label': name && name,
              'aria-invalid': error,
              'aria-describedby': helperID || '',
              'aria-errormessage': errorID || '',
            }}
            checked={checked}
            disabled={disabled}
            {...props}
          />
        }
      />
    </InputWrapper>
  )
}

Toggle.defaultProps = {
  checked: false,
  labelPlacement: 'top',
  onOff: false,
  size: 'medium',
  disabled: false,
}

export default Toggle
