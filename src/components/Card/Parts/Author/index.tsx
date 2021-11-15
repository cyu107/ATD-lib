import React, { ReactElement } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Spacer from '@bit/littlebox.atd.spacer'
import Avatar from '@material-ui/core/Avatar'
import { PropsType as CardProps } from '../..'

const useStyles = makeStyles({
  author: {
    '&&': {
      display: 'flex',
      alignItems: 'center',
      marginTop: '16px',
    },
  },
  avatar: {
    width: '16px',
    height: '16px',
  },
})

type PropsType = {
  author?: CardProps['author']
  className?: string
}

const Author = ({ author, className }: PropsType): ReactElement | null => {
  const classes = useStyles()
  if (!author) {
    return null
  }

  return (
    <div
      className={clsx({
        [classes.author]: true,
        [className || '']: className,
      })}
    >
      <Avatar src={author.avatar} alt={author.name} className={classes.avatar} />
      <Spacer size={3} />
      <span>{author.name}</span>
    </div>
  )
}

export default Author
