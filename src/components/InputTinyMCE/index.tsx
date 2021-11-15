import React, { ReactNode, ReactElement, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { makeStyles, Box } from '@material-ui/core'
import clsx from 'clsx'
import InputWrapper from '@bit/littlebox.atd.forms.input-wrapper'
import InputLabel from '@bit/littlebox.atd.forms.input-label'
import InputHelperText from '@bit/littlebox.atd.forms.input-helper-text'
import LinearProgressBar from '@bit/littlebox.atd.linear-progress-bar'

const useStyles = makeStyles({
  root: {
    '& .tox-tinymce': {
      borderRadius: '4px',
    },
  },
  error: {
    '& .tox-tinymce': {
      borderColor: '#f44336',
    },
    '& .tox-tinymce .tox-editor-container .tox-editor-header .tox-toolbar-overlord .tox-toolbar__primary': {
      borderColor: '#f44336',
      background: `url("data:image/svg+xml;charset=utf8,%3Csvg height='39px' viewBox='0 0 40 39px' width='40' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0' y='38px' width='100' height='1' fill='%23f44336'/%3E%3C/svg%3E") left 0 top 0 #fff`,
    },
    '& .tox-tinymce .tox-editor-container .tox-editor-header .tox-toolbar-overlord .tox-toolbar__primary div': {
      borderColor: '#f44336',
    },
    '& .tox-tinymce .tox-editor-container .tox-editor-header .tox-menubar': {
      background: `url("data:image/svg+xml;charset=utf8,%3Csvg height='39px' viewBox='0 0 40 39px' width='40' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0' y='38px' width='100' height='1' fill='%23f44336'/%3E%3C/svg%3E") left 0 top 0 #fff`,
    },
    '& .tox-tinymce .tox-statusbar': {
      borderColor: '#f44336',
    },
  },
  focus: {
    '& .tox-tinymce': {
      borderColor: '#424140',
    },
    '& .tox-tinymce .tox-editor-container .tox-editor-header .tox-toolbar-overlord .tox-toolbar__primary': {
      borderColor: '#424140',
      background: `url("data:image/svg+xml;charset=utf8,%3Csvg height='39px' viewBox='0 0 40 39px' width='40' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0' y='38px' width='100' height='1' fill='%23424140'/%3E%3C/svg%3E") left 0 top 0 #fff`,
    },
    '& .tox-tinymce .tox-editor-container .tox-editor-header .tox-toolbar-overlord .tox-toolbar__primary div': {
      borderColor: '#424140',
    },
    '& .tox-tinymce .tox-editor-container .tox-editor-header .tox-menubar': {
      background: `url("data:image/svg+xml;charset=utf8,%3Csvg height='39px' viewBox='0 0 40 39px' width='40' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0' y='38px' width='100' height='1' fill='%23424140'/%3E%3C/svg%3E") left 0 top 0 #fff`,
    },
    '& .tox-tinymce .tox-statusbar': {
      borderColor: '#424140',
    },
  },
  progressBar: {
    marginTop: '8px',
  },
  progressBarLabel: {
    color: '#424140',
    marginTop: '4px',
    marginBottom: '0px',
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
  value?: string
  /**
   * Initial content of the editor when the editor is initialized.
   */
  initialValue?: string
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
   * The id of the input element. Use this prop to make label and helperText accessible for screen readers.
   */
  id?: string
  /**
   * Limits the character count that the user can enter.
   */
  maxChar?: number
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
  /**
   * Callback fired when the input is blurred.
   * (first argument (event) might be undefined)
   */
  onBlur?: () => void
  /**
   * Callback fired when the value is changed.
   *
   * @param {string} content The current state of the editor.
   */
  onChange?: (content: string) => void
  onFocus?: () => void
}

const normalise = (value: number, MIN: number, MAX: number) => ((value - MIN) * 100) / (MAX - MIN)

const InputTinyMCE = ({
  name,
  label,
  placeholder,
  error,
  errorText,
  helperText,
  id,
  maxChar,
  readOnly,
  onChange,
  onFocus,
  onBlur,
  disabled,
  required,
  smallWrapMargin,
  ...props
}: PropsType): ReactElement => {
  const classes = useStyles()
  const [tinyEditor, setTinyEditor] = useState<Record<any, any> | null>(null)
  const [focus, setFocus] = useState(false)
  const [charCount, setCharCount] = useState(0)
  const helperID = id ? id.concat('-', 'helper-text') : undefined
  const errorID = id ? id.concat('-', 'error-text') : undefined

  const handleEditorChange = (content: string, editor: any): void => {
    const wordCount = editor.plugins.wordcount
    const contentCount = wordCount.body.getCharacterCount()
    setCharCount(contentCount)
    if (onChange) onChange(content)
  }

  const handleLabelOnClick = () => {
    if (null !== tinyEditor) {
      tinyEditor.execCommand('mceFocus')
      return setFocus(true)
    }
  }

  return (
    <InputWrapper smallWrapMargin={smallWrapMargin}>
      {label && (
        <InputLabel
          htmlFor={id}
          isError={error}
          isRequired={required}
          isDisabled={disabled}
          onClick={handleLabelOnClick}
        >
          {label}
        </InputLabel>
      )}
      <div
        className={clsx({
          [classes.root]: true,
          [classes.focus]: focus,
          [classes.error]: error,
        })}
      >
        <Editor
          textareaName={name}
          disabled={disabled || readOnly}
          init={{
            height: 300,
            branding: false,
            placeholder: placeholder,
            readonly: readOnly,
            auto_focus: false,
          }}
          plugins="wordcount paste"
          onInit={(event: any, editor: any) => {
            setTinyEditor(editor)
          }}
          onEditorChange={handleEditorChange}
          onKeyPress={(event: any, editor: any) => {
            if (maxChar) {
              if (charCount >= maxChar) return false
            }
          }}
          onFocus={(event) => {
            setFocus(true)
            if (onFocus) onFocus()
          }}
          onBlur={(event) => {
            setFocus(false)
            if (onBlur) onBlur()
          }}
          {...props}
        />
      </div>
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
      {maxChar && (
        <div className={classes.progressBar}>
          <Box display="flex" alignItems="center" width="100%">
            <Box width="100%" mr={1}>
              <LinearProgressBar size="small" value={normalise(charCount, 0, maxChar)} />
            </Box>
          </Box>
          <p className={classes.progressBarLabel}>
            <span>{charCount}</span> / <span>{maxChar}</span>
          </p>
        </div>
      )}
    </InputWrapper>
  )
}

InputTinyMCE.defaultProps = {
  smallWrapMargin: false,
}

export default InputTinyMCE
