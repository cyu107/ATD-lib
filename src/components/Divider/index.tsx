import React, { ReactElement } from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: (props: DividerProps) => ({
    position: 'relative',
  }),
  divider: (props: DividerProps) => ({
    backgroundColor: props.color,
    width: props.width,
    height: props.height ? props.height : '100%',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
  }),
})

export type DividerProps = {
  width?: number | string
  height?: number | string
  color?: string
}

const Divider = (props: DividerProps): ReactElement => {
  const classes = useStyles(props)
  return (
    <div className={classes.root}>
      <div className={classes.divider}></div>
    </div>
  )
}

Divider.defaultProps = {
  width: 1,
}

export default Divider
