import React, { useContext, useState, ReactElement } from 'react'
import colors from '@bit/littlebox.atd.colors'
import Grid from '@bit/littlebox.atd.grid'
import Button from '@bit/littlebox.atd.button'
import Icon from '@bit/littlebox.atd.icons'
import { makeStyles } from '@material-ui/core/styles'
import PrimaryLink from './PrimaryLink'
import GroupTitle from '@bit/littlebox.atd.header-group-title'
import Link from '@bit/littlebox.atd.header-link'
import { MenuItem } from '../../../types'
import HeaderDataContext from '../../../context'

const useStyles = makeStyles({
  root: {
    position: 'relative',
    overflow: 'hidden',
    flexGrow: 1,
  },
  step: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflowX: 'hidden',
    overflowY: 'auto',
    transition: 'transform 0.3s ease',
    backgroundColor: colors.gray200,
    zIndex: 1,
  },
  header: {
    padding: '16px',
    backgroundColor: colors.white,
    '& h4': {
      margin: '10px 0 0',
      fontWeight: 600,
      fontSize: '20px',
      lineHeight: '28px',
    },
  },
  footer: {
    marginTop: '32px',
    padding: '16px',
  },
  socialIcons: {
    display: 'flex',
    marginBottom: '24px',
    '& a:not(:last-child)': {
      marginRight: '16px',
    },
  },
})

type PropsType = {
  level: number
  menu: MenuItem[] | undefined
  header?: ReactElement
  footer?: ReactElement
}

const SlideMenu = ({ level, header, footer, menu }: PropsType): ReactElement => {
  const classes = useStyles()
  const [active, setActive] = useState(-1)

  return (
    <div
      className={classes.step}
      style={{
        transform: `translateX(${level * 100}%)`,
      }}
    >
      {header}
      {menu && (
        <div>
          {menu.map((group, idx) => {
            return (
              <React.Fragment key={idx}>
                <PrimaryLink
                  hasSubMenu={group.children ? true : false}
                  onClick={() => setActive(idx)}
                >
                  {group.title}
                </PrimaryLink>
                {group.children && (
                  <SlideMenu
                    level={active === idx ? 0 : level + 1}
                    header={
                      <header className={classes.header}>
                        <span onClick={() => setActive(-1)}>
                          <Icon glyph="caret-left" size={24} color={colors.ctaPrimary} />
                          Back
                        </span>
                        <h4>{group.title}</h4>
                      </header>
                    }
                    menu={group.children}
                  />
                )}
              </React.Fragment>
            )
          })}
        </div>
      )}
      {footer}
    </div>
  )
}

const Wrap = (): ReactElement => {
  const headerContext = useContext(HeaderDataContext)
  const rootMenu = headerContext.data
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <SlideMenu
        level={0}
        menu={rootMenu}
        header={
          <header className={classes.header}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Button fullWidth size="small" variant="secondary">
                  Sign In
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button fullWidth size="small" variant="secondary">
                  Join Now
                </Button>
              </Grid>
            </Grid>
          </header>
        }
        footer={
          <footer className={classes.footer}>
            <GroupTitle>Stay Connected</GroupTitle>
            <div className={classes.socialIcons}>
              <Link href="https://www.google.com">
                <Icon glyph="facebook" />
              </Link>
              <Link href="https://www.google.com">
                <Icon glyph="twitter" />
              </Link>
              <Link href="https://www.google.com">
                <Icon glyph="linkedin" />
              </Link>
              <Link href="https://www.google.com">
                <Icon glyph="pinterest" />
              </Link>
              <Link href="https://www.google.com">
                <Icon glyph="instagram" />
              </Link>
            </div>
          </footer>
        }
      />
    </div>
  )
}

export default Wrap
