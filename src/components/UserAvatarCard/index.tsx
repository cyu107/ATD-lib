import React, { ReactElement } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@bit/littlebox.atd.button'
import Icon from '@bit/littlebox.atd.icons'
import Avatar from '@bit/littlebox.atd.avatar'
import colors from '@bit/littlebox.atd.colors'
import Box from '../Box'

const useStyles = makeStyles({
  root: ({ avatarSize = 80 }: Pick<PropsType, 'avatarSize'>) => ({
    width: '100%',
    position: 'relative',
    '& header': {
      paddingTop: `${avatarSize / 2 + 15}px`,
      paddingBottom: 0,
      '& > a': {
        position: 'absolute',
        top: '80px',
        right: '10px',
      },
    },
  }),
  btnEdit: {
    color: colors.ctaSecondary,
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '18px',
    marginLeft: '4px',
  },
  avatar: {
    position: 'absolute',
    top: '64px',
    left: '24px',
    transform: 'translateY(-50%)',
    border: `3px solid ${colors.white}`,
  },
  footerText: {
    fontSize: '16px',
    fontWeight: 600,
    marginRight: '8px',
  },
})

type PropsType = {
  /** React Node or text */
  children?: ReactElement[] | ReactElement | string
  /** ClassName */
  className?: string
  /** User's first name */
  userFirstname: string
  /** User's last name */
  userLastname: string
  /** Edit Link URL */
  href: string
  /** The pixel size of avatar */
  avatarSize?: number
  /** Image src url if an image avatar */
  avatarSrc?: string
}

const UserAvatarCard = ({
  children,
  className,
  userFirstname,
  userLastname,
  href,
  avatarSize,
  avatarSrc,
}: PropsType): ReactElement => {
  const classes = useStyles({ avatarSize })
  return (
    <Box
      variant="subModule"
      className={clsx({
        [classes.root]: true,
        [className || '']: className,
      })}
      header={{
        title: `${userFirstname} ${userLastname}`,
        actions: (
          <Button variant="tertiary" href={href}>
            <Icon glyph="edit" size={16} color={colors.ctaPrimary} />
            <span className={classes.btnEdit}>Edit</span>
          </Button>
        ),
      }}
      footer={
        <div>
          <span className={classes.footerText}>My Bookmarks</span>
          <Icon glyph="arrow-right" size={16} color={colors.ctaPrimary} />
        </div>
      }
      topBorderWidth={64}
    >
      <Avatar
        className={classes.avatar}
        size={avatarSize}
        alt={`${userFirstname} ${userLastname}`}
        src={avatarSrc}
      />
      {children}
    </Box>
  )
}

UserAvatarCard.defaultProps = {
  avatarSize: 80,
}

export default UserAvatarCard
