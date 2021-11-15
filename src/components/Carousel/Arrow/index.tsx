import React, { ReactElement } from 'react'
import clsx from 'clsx'
import colors from '@bit/littlebox.atd.colors'
import { makeStyles } from '@material-ui/core/styles'
import Icons from '@bit/littlebox.atd.icons'

const useStyles = makeStyles({
  root: {
    padding: 0,
    width: 40,
    height: 40,
    border: `1px solid ${colors.ctaPrimary}`,
    borderRadius: '100%',
    background: colors.white,
    transition: 'all 0.3s ease-out',
    cursor: 'pointer',
    '&:hover': {
      background: colors.ctaPrimaryHover,
    },
    '&:focus': {
      outline: 'none',
    },
  },
  leftArrow: {
    position: 'absolute',
    right: '110px',
    bottom: '-40px',
    transform: 'translateY(50%)',
  },
  rightArrow: {
    position: 'absolute',
    right: '50px',
    bottom: '-40px',
    transform: 'translateY(50%)',
  },
})

type PropsType = {
  direction: 'left' | 'right'
  onClick?: (...args: any[]) => any
}

const Arrow = ({ direction, onClick }: PropsType): ReactElement => {
  const classes = useStyles()
  const glyphClass = direction === 'left' ? 'caret-left-small' : 'caret-right-small'
  return (
    <button
      className={clsx({
        [classes.root]: true,
        [classes.leftArrow]: direction === 'left',
        [classes.rightArrow]: direction === 'right',
      })}
      onClick={onClick}
    >
      <Icons glyph={glyphClass} color={colors.ctaPrimary} />
    </button>
  )
}

export default Arrow
