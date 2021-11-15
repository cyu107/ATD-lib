import React, { ReactElement } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import MuiAvatar from '@material-ui/core/Avatar'
import colors from '@bit/littlebox.atd.colors'

interface StyleProps {
  size: number | undefined
  bgColor: string | undefined
  color: string | undefined
}

interface IFontSize {
  [key: number]: number
}

const defaultFontSizes: IFontSize = {
  24: 14,
  32: 16,
  48: 20,
  80: 38,
}

const useStyles = makeStyles({
  root: (props: StyleProps) => ({
    width: props.size,
    height: props.size,
    backgroundColor: props.bgColor,
    color: props.color,
    fontWeight: 'bold',
    fontSize: props.size && defaultFontSizes[props.size] ? defaultFontSizes[props.size] : 20,
  }),
})

type PropsType = {
  /** React Node or text */
  children?: ReactElement[] | ReactElement | string
  /** The pixel size of avatar */
  size?: number
  /** ClassName */
  className?: string
  /** Avatar background color */
  bgColor?: string
  /** Avatar text color */
  color?: string
  /** Image src url if an image avatar */
  src?: string
  /** Image alt attribute */
  alt?: string
}

const Avatar = ({
  size,
  bgColor,
  color,
  children,
  className,
  alt,
  src,
}: PropsType): ReactElement => {
  const classes = useStyles({
    size,
    bgColor,
    color,
  })
  return (
    <MuiAvatar
      className={clsx({
        [classes.root]: true,
        [className || '']: className,
      })}
      alt={alt}
      src={src}
    >
      {children}
    </MuiAvatar>
  )
}

Avatar.defaultProps = {
  size: 24,
  bgColor: colors.profileAvatarAmberYellow,
  color: colors.white,
}

export default Avatar
