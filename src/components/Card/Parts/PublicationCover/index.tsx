import React, { ReactElement } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles({
  root: {
    display: 'block',
    width: '66px',
    height: '102px',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
  },
})

type PropsType = {
  alt?: string
  src?: string
  className?: string
}

const PublicationCover = ({ alt, src, className }: PropsType): ReactElement | null => {
  const classes = useStyles()
  if (!src) {
    return null
  }

  return (
    <span
      className={clsx({
        [classes.root]: true,
        [className || '']: className,
      })}
    >
      <img src={src} alt={alt} />
    </span>
  )
}

export default PublicationCover
