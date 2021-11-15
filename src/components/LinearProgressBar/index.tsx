import React, { ReactElement } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import LinearProgress, { LinearProgressProps } from '@material-ui/core/LinearProgress'
import clsx from 'clsx'

const useStyles = makeStyles({
  root: {
    backgroundColor: '#DBD9D6',
    '& .MuiLinearProgress-barColorPrimary': {
      borderRadiusTopRight: '3px',
      borderTopRightRadius: '10px',
      borderBottomRightRadius: '10px',
      background: 'linear-gradient(90deg, #FFB700 0%, #FF4D00 52.98%, #C10013 98.75%)',
    },
  },
  small: {
    height: '4px',
  },
  medium: {
    height: '8px',
  },
  large: {
    height: '12px',
  },
})

type PropsType = {
  size?: 'small' | 'medium' | 'large'
} & LinearProgressProps

const LinearProgressBar = ({ value, size, ...props }: PropsType): ReactElement => {
  const classes = useStyles()

  return (
    <>
      <LinearProgress
        className={clsx({
          [classes.root]: true,
          [classes.small]: size === 'small',
          [classes.medium]: size === 'medium',
          [classes.large]: size === 'large',
        })}
        value={value}
        {...props}
      />
    </>
  )
}

LinearProgressBar.defaultProps = {
  size: 'medium',
  variant: 'determinate',
}

export default LinearProgressBar
