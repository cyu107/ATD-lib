import React, { ReactElement } from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: (props: StatProps) => ({
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: getFlexDirection(props.alignment),
    padding: '0 20px',
  }),
  label: (props: StatProps) => ({
    fontSize: props.labelSize,
    fontWeight: props.labelWeight,
    color: props.labelColor,
    width: props.labelWidth,
    padding: '0 4px',
  }),
  count: (props: StatProps) => ({
    fontSize: props.countSize,
    fontWeight: props.countWeight,
    color: props.countColor,
    padding: '0 4px',
  }),
})

type AlignmentType = 'label-top' | 'label-bottom' | 'label-right' | 'label-left'

const getFlexDirection = (alignment?: AlignmentType) => {
  if (alignment === 'label-bottom') {
    return 'column-reverse'
  }
  if (alignment === 'label-left') {
    return 'row'
  }
  if (alignment === 'label-right') {
    return 'row-reverse'
  }
  return 'column'
}

export type StatProps = {
  label?: string
  labelColor?: string
  labelSize?: number
  labelWeight?: number
  labelWidth?: number
  count?: string | number
  countColor?: string
  countSize?: number
  countWeight?: number
  alignment?: AlignmentType
}

const Stat = (props: StatProps): ReactElement => {
  const classes = useStyles(props)
  return (
    <div className={classes.root}>
      <div className={classes.label}>{props.label}</div>
      <div className={classes.count}>{props.count}</div>
    </div>
  )
}

Stat.defaultProps = {
  width: 1,
  alignment: 'label-top',
}

export default Stat
