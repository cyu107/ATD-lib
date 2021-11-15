import React, { ReactElement } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import colors from '@bit/littlebox.atd.colors'

const useStyles = makeStyles({
  header: {
    position: 'relative',
    margin: '0 0 16px',
    paddingBottom: '8px',
    textTransform: 'uppercase',
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '16px',
    color: colors.black,
    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      top: '100%',
      width: '24px',
      height: '1px',
      backgroundColor: colors.gray400,
    },
  },
})

type PropsType = {
  children: string
}

const HeaderGroupTitle = ({ children }: PropsType): ReactElement => {
  const classes = useStyles()
  return <h4 className={classes.header}>{children}</h4>
}

export default HeaderGroupTitle
