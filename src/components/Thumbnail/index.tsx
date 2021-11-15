import React, { ReactElement } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Icon, { PropsType as IconProps } from '@bit/littlebox.atd.icons'
import colors from '@bit/littlebox.atd.colors'

const useStyles = makeStyles({
  root: {
    position: 'relative',
    display: 'block',
    '& img': {
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    '& img ~ *': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 2,
    },
  },
  r16x9: {
    paddingBottom: '56.25%',
  },
  r3x2: {
    paddingBottom: '66.6667%',
  },
  r1x1: {
    paddingBottom: '100%',
  },
})

export interface PropsType {
  /** Icon name, e.g. cart, instagram, etc */
  icon?: IconProps['glyph']
  /** Image ratio, one of '16:9' | '3:2' | '1:1' */
  ratio: '16:9' | '3:2' | '1:1'
  /** Image src. If none is provided, we use the grayscale/blurred random placeholder image */
  src?: string | null
  /** Image alt text */
  alt?: string
  /** ClassName */
  className?: string
}

const Thumbnail = ({ ratio, icon, src, alt, className }: PropsType): ReactElement => {
  const classes = useStyles()
  if (!src) {
    return <></>
  }

  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.r16x9]: ratio === '16:9',
        [classes.r3x2]: ratio === '3:2',
        [classes.r1x1]: ratio === '1:1',
        [className || '']: className,
      })}
    >
      <img src={src} alt={alt} />
      {icon && <Icon glyph={icon} color={colors.white} />}
    </div>
  )
}

Thumbnail.defaultProps = {
  ratio: '16:9',
}

export default Thumbnail
