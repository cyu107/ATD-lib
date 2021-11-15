import React, { ReactElement } from 'react'
import Divider, { DividerProps } from '@bit/littlebox.atd.divider'
import Stat, { StatProps } from '@bit/littlebox.atd.stat'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
})

type PropsType = {
  stats: StatProps[]
  divider?: DividerProps
}

const children = ({ stats, divider }: PropsType) => {
  const children: ReactElement[] = []
  stats.forEach((stat, index) => {
    children.push(<Stat key={index * 2} {...stat} />)
    if (divider && index !== stats.length - 1) {
      children.push(<Divider key={index * 2 + 1} {...divider} />)
    }
  })
  return children
}

const Stats = (props: PropsType): ReactElement => {
  const classes = useStyles()
  return <div className={classes.root}>{children(props)}</div>
}

Stats.defaultProps = {
  debug: false,
  noHeight: false,
  matchText: false,
  fullWidth: false,
}

export default Stats
