import React, { ReactNode, ReactElement } from 'react'
import clsx from 'clsx'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import colors from '@bit/littlebox.atd.colors'
import Icon, { PropsType as IconProps } from '@bit/littlebox.atd.icons'

const useStyles = makeStyles({
  wrap: {
    display: 'inline-flex',
    border: `1px solid ${colors.gray400}`,
    borderRadius: '4px',
    overflow: 'hidden',
  },
  iconWrap: {
    display: 'inline-flex',
    width: '60px',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    backgroundColor: colors.gray200,
    color: colors.textActive,
  },
  textWrap: {
    padding: '16px',
    color: colors.textActive,
  },
  header: {
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '20px',
    '&:not(:last-child)': {
      marginBottom: '4px',
    },
  },
  text: {
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '20px',
  },
  success: {
    borderColor: colors.statusSuccess,
    '& $iconWrap': {
      color: colors.statusSuccess,
      backgroundColor: colors.statusSuccessTint,
    },
  },
  error: {
    borderColor: colors.statusAlert,
    '& $iconWrap': {
      color: colors.statusAlert,
      backgroundColor: colors.statusAlertTint,
    },
  },
})

type PropsType = {
  variant?: 'success' | 'error'
  header?: string
  children?: ReactNode
  icon: IconProps['glyph']
}

const Banner = ({ variant, icon, header, children }: PropsType): ReactElement => {
  const classes = useStyles()
  return (
    <div
      className={clsx(classes.wrap, {
        [classes.success]: variant === 'success',
        [classes.error]: variant === 'error',
      })}
    >
      <span className={classes.iconWrap}>
        <Icon glyph={icon} size={20} />
      </span>
      <div className={classes.textWrap}>
        {header && <Typography className={classes.header}>{header}</Typography>}
        {children && <Typography className={classes.text}>{children}</Typography>}
      </div>
    </div>
  )
}

export default Banner
