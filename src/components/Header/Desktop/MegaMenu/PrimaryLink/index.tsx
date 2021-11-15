import React, { ReactElement } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import colors from '@bit/littlebox.atd.colors'
import Button from '@bit/littlebox.atd.button'
import Icon from '@bit/littlebox.atd.icons'

const useStyles = makeStyles({
  btn: {
    position: 'relative',
    width: '100%',
    padding: 0,
    boxShadow: 'none',
    borderRadius: 0,
    opacity: 1,
    fontWeight: 500,
    textAlign: 'left',
    backgroundColor: colors.gray200,
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      width: '4px',
      backgroundColor: colors.ctaPrimary,
      opacity: 0,
      transition: 'opacity 0.3s ease',
    },
    '&:hover': {
      opacity: 1,
      boxShadow: 'none',
      color: 'currentColor',
      background: 'rgba(225, 48, 0, 0.06)',
    },
    '& .MuiButton-label': {
      display: 'flex',
      marginLeft: '24px',
      padding: '16px 24px 16px 0',
      width: '100%',
      alignItems: 'flex-start',
      flexDirection: 'column',
    },
    '&:not(:last-child) .MuiButton-label': {
      borderBottom: `1px solid ${colors.gray400}`,
    },
  },
  btnActive: {
    backgroundColor: colors.white,
    '&::before': {
      opacity: 1,
    },
    '&:hover': {
      backgroundColor: colors.white,
    },
  },
  title: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    fontWeight: 600,
    fontSize: '16px',
    '& span': {
      marginRight: '1.5em',
      flexGrow: 1,
    },
  },
  subtitle: {
    paddingTop: '7px',
    paddingBottom: '7px',
    fontSize: '14px',
    '&:empty': {
      padding: 0,
    },
  },
})

type PropsType = {
  title: string
  subtitle?: string
  active?: boolean
  onClick?: (...args: any[]) => any
}

const PrimaryLink = ({ title, subtitle, onClick, active }: PropsType): ReactElement => {
  const classes = useStyles()
  return (
    <Button
      variant="secondary"
      className={clsx({
        [classes.btn]: true,
        [classes.btnActive]: active,
      })}
      onClick={onClick}
    >
      <span className={classes.title}>
        <span>{title}</span>
        <Icon glyph="caret-right" size={24} color={colors.ctaPrimary} />
      </span>
      <span className={classes.subtitle}>{subtitle}</span>
    </Button>
  )
}

export default PrimaryLink
