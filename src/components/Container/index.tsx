import React, { ReactElement } from 'react'
import clsx from 'clsx'
import MuiContainer from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    maxWidth: '1188px',
  },
})

type PropsType = {
  children: ReactElement | ReactElement[] | string
  className?: string
}

const Container = ({ children, className }: PropsType): ReactElement => {
  const classes = useStyles()
  return (
    <MuiContainer
      className={clsx({
        [classes.root]: true,
        [className || '']: className,
      })}
    >
      {children}
    </MuiContainer>
  )
}

export default Container
