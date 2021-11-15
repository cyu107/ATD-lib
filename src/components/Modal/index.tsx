import React, { useEffect, useRef, ReactNode, ReactElement } from 'react'
import clsx from 'clsx'
import Typography from '@material-ui/core/Typography'
import Dialog from '@material-ui/core/Dialog'
import { makeStyles } from '@material-ui/core/styles'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import Button from '@bit/littlebox.atd.button'
import Icons from '@bit/littlebox.atd.icons'
import colors from '@bit/littlebox.atd.colors'

const useStyles = makeStyles({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 0,
    flex: '0 0 auto',
    padding: '24px',
    borderBottom: `1px solid ${colors.gray400}`,
  },
  footer: {
    display: 'flex',
    borderTop: `1px solid ${colors.gray400}`,
    justifyContent: 'flex-end',
    padding: '24px',
  },
  content: {
    padding: '24px',
  },
  title: {
    margin: 0,
    fontSize: '24px',
    lineHeight: '28px',
    fontWeight: 600,
    color: colors.black,
  },
  close: {
    minWidth: 'auto',
    padding: '0.5em',
    flexShrink: 0,
    marginLeft: '16px',
  },

  paper: {},
  sizeLarge: {
    '& $paper': {
      maxWidth: '840px',
    },
  },
  sizeMedium: {
    '& $paper': {
      maxWidth: '540px',
    },
  },
  sizeSmall: {
    '& $paper': {
      maxWidth: '380px',
    },
  },

  headerNoSeparator: {
    '& $header': {
      paddingBottom: 0,
      borderBottom: 0,
    },
  },
  footerNoSeparator: {
    '& $footer': {
      paddingTop: 0,
      borderTop: 0,
    },
  },

  footerAlignCenter: {
    '& $footer': {
      justifyContent: 'center',
    },
  },
  footerAlignLeft: {
    '& $footer': {
      justifyContent: 'flex-start',
    },
  },
})

type PropsType = {
  /** Header / Title */
  title?: string
  /** Modal actions - displayed in the bottom */
  actions?: ReactNode
  /** One of the following: 'small' | 'medium' | 'large' */
  size?: 'small' | 'medium' | 'large'
  /** Modal content */
  children: ReactNode
  /** Modal open/close state */
  open: boolean
  /** No Header separator */
  headerNoSeparator?: boolean
  /** No Footer separator */
  footerNoSeparator?: boolean
  /** One of the following: 'left' | 'center' | 'right' */
  footerAlign?: 'left' | 'center' | 'right'
  /** Force user action response, modal closes only after clicking action */
  forceAction?: boolean
  /** onClose callback */
  onClose?: () => void
}

const Modal = ({
  title,
  children,
  open,
  onClose,
  actions,
  size,
  footerNoSeparator,
  headerNoSeparator,
  footerAlign,
  forceAction,
}: PropsType): ReactElement => {
  const classes = useStyles()

  const descriptionElementRef = useRef<HTMLElement>(null)
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef
      if (descriptionElement !== null) {
        descriptionElement.focus()
      }
    }
  }, [open])

  return (
    <Dialog
      className={clsx({
        [classes.sizeLarge]: size === 'large',
        [classes.sizeMedium]: size === 'medium',
        [classes.sizeSmall]: size === 'small',
        [classes.headerNoSeparator]: headerNoSeparator,
        [classes.footerNoSeparator]: footerNoSeparator,
        [classes.footerAlignCenter]: footerAlign === 'center',
        [classes.footerAlignLeft]: footerAlign === 'left',
      })}
      classes={{
        paperScrollPaper: classes.paper,
      }}
      open={open}
      onClose={forceAction ? undefined : onClose}
      scroll="paper"
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <header id="scroll-dialog-title" className={classes.header}>
        <Typography variant="h4" className={classes.title}>
          {title}
        </Typography>
        {!forceAction && (
          <Button className={classes.close} variant="tertiary" onClick={onClose}>
            <Icons glyph="close" color={colors.ctaPrimary} size={24} />
          </Button>
        )}
      </header>
      <DialogContent className={classes.content}>
        <DialogContentText id="scroll-dialog-description" ref={descriptionElementRef}>
          {children}
        </DialogContentText>
      </DialogContent>
      {actions && <DialogActions className={classes.footer}>{actions}</DialogActions>}
    </Dialog>
  )
}

Modal.defaultProps = {
  open: false,
  footerNoSeparator: false,
  headerNoSeparator: false,
  footerAlign: 'right',
  size: 'large',
}

export default Modal
