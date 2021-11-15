import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Loader from '../Base'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
}))

interface InjectProps {
  condition: boolean
  children: any
  size?: number
}

type PropsType = InjectProps

const ConditionalLoader = (props: PropsType) => {
  const classes = useStyles()
  const { size, condition } = props
  return (
    <>
      {condition ? (
        props.children
      ) : (
        <div className={classes.wrapper}>
          <Loader />
        </div>
      )}
    </>
  )
}

export default ConditionalLoader
