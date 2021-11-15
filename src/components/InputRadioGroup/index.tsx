import React, { ReactNode, ReactElement } from 'react'
import { makeStyles } from '@material-ui/core'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import RadioGroup from '@material-ui/core/RadioGroup'
import InputRadio from '@bit/littlebox.atd.forms.input-radio'
import InputHelperText from '@bit/littlebox.atd.forms.input-helper-text'
import clsx from 'clsx'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    '& p.Mui-error:last-child': {
      color: '#424140',
    },
  },
  row: {
    '& $group': {
      flexDirection: 'column',
    },
    '& $group > div': {
      marginTop: '8px',
    },
    '& $group div:first-child': {
      marginTop: '0px',
    },
  },
  column: {
    '& $group': {
      flexDirection: 'row',
    },
    '& $group > div': {
      marginTop: '0px',
    },
  },
  group: {
    '& div': {
      paddingRight: '16px',
    },
    '& div:last-child': {
      paddingRight: '0',
    },
  },
  legend: {
    color: 'rgb(124, 124, 124)',
    fontFamily: 'Whitney, Arial',
    fontWeight: 500,
    display: 'block',
    fontSize: '14px',
    lineHeight: '16px',
    marginBottom: '12px',
    '&.Mui-focused': {
      color: 'rgb(124, 124, 124)',
    },
  },
}))

type PropsType = {
  /**
   * Name attribute of the input element.
   */
  name: string
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value?: string
  /**
   * The available options for each 'radio' element
   */
  options: {
    label: string
    value: string
    disabled?: boolean
    id: string
  }[]
  /**
   * The placement of each 'checkbox' element.
   * 'row' - Stacked eacg vertically
   * 'column' - Stacked eacg horizontally
   * @default 'default'
   */
  layout?: 'row' | 'column'
  /**
   * The legend content.
   */
  legend?: string | ReactNode
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
   * If true, additional top padding reduces down to (8px) from (40px).
   * @default false
   */
  smallWrapMargin?: boolean
  /**
   * Callback fired when the input is blurred.
   * (first argument (event) might be undefined)
   */
  onBlur?: () => void
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange?: (e: any) => void
}

const InputRadioGroup = ({
  name,
  legend,
  labelPlacement,
  layout,
  options,
  disabled,
  error,
  errorText,
  helperText,
  onChange,
  onBlur,
  value,
  ...props
}: PropsType): ReactElement => {
  const classes = useStyles()

  return (
    <>
      <FormControl
        className={clsx({
          [classes.root]: true,
          [classes.row]: layout === 'row',
          [classes.column]: layout === 'column',
        })}
        component="fieldset"
        error={error}
      >
        <FormLabel className={classes.legend} component="legend">
          {legend}
        </FormLabel>

        <RadioGroup className={classes.group} value={value} onChange={onChange} onBlur={onBlur}>
          {options.map((option, i) => {
            return (
              <InputRadio
                key={i}
                name={name}
                id={option.id}
                label={option.label}
                labelPlacement={labelPlacement}
                value={option.value}
                disabled={option.disabled}
                checked={value === option.value}
                {...props}
              />
            )
          })}
        </RadioGroup>

        {error && errorText && <InputHelperText isError={error}>{errorText}</InputHelperText>}

        {helperText && <InputHelperText isDisabled={disabled}>{helperText}</InputHelperText>}
      </FormControl>
    </>
  )
}

InputRadioGroup.defaultProps = {
  size: 'small',
  labelPlacement: 'default',
  layout: 'row',
  disabled: false,
  required: false,
  smallWrapMargin: false,
}

export default InputRadioGroup
