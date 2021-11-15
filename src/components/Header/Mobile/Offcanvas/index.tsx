import React, { Dispatch, SetStateAction, ReactElement } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import colors from '@bit/littlebox.atd.colors'
import SlideMenu from './SlideMenu'

const useStyles = makeStyles({
  wrap: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0,
    visibility: 'hidden',
    transition: 'all 0.3s ease',
    overflow: 'hidden',
    zIndex: 5,
  },
  overlay: {
    display: 'block',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
  },
  offcanvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '320px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: colors.white,
    transition: 'transform 0.3s ease',
    transform: 'translateX(-100%)',
  },
  show: {
    opacity: 1,
    visibility: 'visible',
    '& $offcanvas': {
      transform: 'none',
      transitionDelay: '0.2s',
    },
  },
})

type PropsType = {
  children?: ReactElement
  show?: boolean
  setShow: Dispatch<SetStateAction<boolean>>
}

const Offcanvas = ({ show, setShow, children }: PropsType): ReactElement => {
  const classes = useStyles()
  return (
    <div
      className={clsx({
        [classes.wrap]: true,
        [classes.show]: show,
      })}
    >
      <span className={classes.overlay} onClick={() => setShow(false)} />
      <div className={classes.offcanvas}>
        {children}
        <SlideMenu />
      </div>
    </div>
  )
}

export default Offcanvas
