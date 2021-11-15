import React, { ReactElement } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import SvgIcon from '@material-ui/core/SvgIcon'

import icons from './getIcons'

export type PropsType = {
  /** ClassName */
  className?: string
  /** Icon name, e.g. cart, instagram, etc */
  glyph: keyof typeof icons
  /** Icon size in pixels */
  size?: number
  /** Color of the icon */
  color?: string
  /** Custom viewbox sizing */
  viewBox?: string
}

const useStyles = makeStyles<{}, PropsType>({
  root: (props) => ({
    verticalAlign: 'middle',
    color: props.color,
    width: `${props.size}px`,
    height: `${props.size}px`,
  }),
})

const Icons = (props: PropsType): ReactElement => {
  const Icon = icons[props.glyph]
  const classes = useStyles(props)
  return (
    <SvgIcon
      className={clsx({
        [classes.root]: true,
        [`icon--${props.glyph}`]: props.glyph,
        [props.className || '']: props.className,
      })}
      viewBox={`0 0 ${props.viewBox}`}
    >
      <Icon />
    </SvgIcon>
  )
}

Icons.defaultProps = {
  size: 32,
  viewBox: '24 24',
}

export default Icons
