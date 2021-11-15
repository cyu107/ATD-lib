import React, { ReactElement } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Spacer from '@bit/littlebox.atd.spacer'
import Icon from '@bit/littlebox.atd.icons'
import { PropsType as CardProps } from '../..'

const useStyles = makeStyles({
  details: {
    '& > div': {
      display: 'flex',
      alignItems: 'center',
    },
  },
})

type PropsType = {
  details?: CardProps['details']
  baseTextStyle?: string
  className?: string
}

const Details = ({ details, baseTextStyle, className }: PropsType): ReactElement | null => {
  const classes = useStyles()
  if (!details) {
    return null
  }

  return (
    <div
      className={clsx({
        [classes.details]: true,
        [className || '']: className,
      })}
    >
      {details.location && (
        <div className={baseTextStyle}>
          <Icon size={16} glyph="globe" />
          <Spacer size={3} />
          <span>{details.location}</span>
        </div>
      )}

      {details.date && (
        <div className={baseTextStyle}>
          <Icon size={16} glyph="calendar" />
          <Spacer size={3} />
          <span>{details.date}</span>
        </div>
      )}

      {details.extra && (
        <div className={baseTextStyle}>
          <Icon size={16} glyph="placeholder" />
          <Spacer size={3} />
          <span>{details.extra}</span>
        </div>
      )}
    </div>
  )
}

export default Details
