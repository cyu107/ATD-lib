import React, { ReactNode, ReactElement } from 'react'
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrap: {
      marginTop: '1em',
      [theme.breakpoints.up('sm')]: {
        marginTop: '1.5em',
      },
    },
    smallMargin: {
      [theme.breakpoints.up('sm')]: {
        marginTop: '5px',
      },
    },
  }),
)

type PropsType = {
  children: ReactNode
  smallWrapMargin?: boolean
}

const InputWrapper = ({ children, smallWrapMargin }: PropsType): ReactElement => {
  const classes = useStyles()
  return (
    <div className={clsx(classes.wrap, { [classes.smallMargin]: smallWrapMargin })}>{children}</div>
  )
}

InputWrapper.defaultProps = {
  smallWrapMargin: false,
}

export default InputWrapper
