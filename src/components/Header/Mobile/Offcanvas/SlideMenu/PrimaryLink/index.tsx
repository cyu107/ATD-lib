import React, { ReactElement } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Icon from '@bit/littlebox.atd.icons'
import colors from '@bit/littlebox.atd.colors'

const useStyles = makeStyles({
  root: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px',
    '&:not(:last-child)::before': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: '16px',
      width: '100%',
      height: '1px',
      backgroundColor: colors.gray400,
    },
  },
  label: {
    fontWeight: 600,
    fontSize: '16px',
    lineHeight: '18px',
    color: colors.ctaSecondary,
  },
})

type PropsType = {
  hasSubMenu: boolean
  children: string
  onClick?: (...args: any[]) => any
}

const PrimaryLink = ({ onClick, children, hasSubMenu }: PropsType): ReactElement => {
  const classes = useStyles()

  return (
    <div onClick={onClick} className={classes.root}>
      <span className={classes.label}>{children}</span>
      {hasSubMenu && <Icon glyph="caret-right" size={24} color={colors.ctaPrimary} />}
    </div>
  )
}

export default PrimaryLink
