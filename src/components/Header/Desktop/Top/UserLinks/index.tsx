import React, { useState, ReactElement } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Icon from '@bit/littlebox.atd.icons'
import colors from '@bit/littlebox.atd.colors'
import Spacer from '@bit/littlebox.atd.spacer'
import Button from '@bit/littlebox.atd.button'
import Grid from '@bit/littlebox.atd.grid'
import TextLink from '@bit/littlebox.atd.text-link'
import ContextMenu from '@bit/littlebox.atd.context-menu'
import ContextMenuItem from '@bit/littlebox.atd.context-menu/dist/Item'
import UserLink from '@bit/littlebox.atd.header-nav-link'

const useStyles = makeStyles({
  root: {
    paddingTop: '15px',
  },
  separator: {
    display: 'inline-block',
    verticalAlign: 'middle',
    width: '1px',
    height: '42px',
    backgroundColor: colors.gray400,
  },
  btn: {
    padding: 0,
    boxShadow: 'none',
    borderRadius: 0,
    fontWeight: 500,
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: 'transparent',
    },
  },
  profileMenu: {
    paddingLeft: '16px',
    paddingRight: '16px',
  },
  profileMenuInfo: {
    marginLeft: '8px',
    marginBottom: '8px',
    '& span': {
      textTransform: 'uppercase',
      lineHeight: '15px',
      fontWeight: 500,
      fontSize: '12px',
    },
    '& strong': {
      fontSize: '16px',
      fontWeight: 600,
    },
    '& a': {
      fontSize: '12px',
      fontWeight: 600,
      border: 0,
    },
  },
})

const TopLinks = (): ReactElement => {
  const [loggedIn, setLoggedIn] = useState(false)
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Button variant="secondary" className={classes.btn}>
        <Icon glyph="magnify" size={24} />
        <Spacer size={8} noHeight />
        <span>Search</span>
      </Button>

      <Spacer size={24} noHeight />

      <Button variant="secondary" className={classes.btn}>
        <Icon glyph="cart" size={24} />
        <Spacer size={8} noHeight />
        <span>Cart</span>
      </Button>

      <Spacer size={24} noHeight />

      <span className={classes.separator} />
      <Spacer size={24} noHeight />

      {!loggedIn && <Button variant="secondary">Become A Member</Button>}
      {loggedIn && <Button variant="secondary">My ATD</Button>}

      <Spacer size={16} noHeight />
      {!loggedIn && (
        <TextLink
          href="#"
          variant="standalone"
          onClick={(e): void => {
            e.preventDefault()
            setLoggedIn(!loggedIn)
          }}
        >
          Sign In
        </TextLink>
      )}
      {loggedIn && (
        <ContextMenu
          toggle={
            <span>
              <UserLink>John</UserLink>
              <Icon glyph="placeholder" color={colors.black} />
            </span>
          }
          menu={
            <>
              <Grid container className={classes.profileMenu}>
                <Grid item>
                  <Icon glyph="account" size={40} />
                </Grid>
                <Grid item>
                  <Grid container direction="column" className={classes.profileMenuInfo}>
                    <span>Professional Plus</span>
                    <strong>John Smith</strong>
                    <TextLink variant="secondary" href="#">
                      Edit Profile
                    </TextLink>
                  </Grid>
                </Grid>
              </Grid>
              <ContextMenuItem>My Bookmarks</ContextMenuItem>
              <ContextMenuItem>Account</ContextMenuItem>
              <ContextMenuItem>Help</ContextMenuItem>
              <ContextMenuItem separator />
              <ContextMenuItem
                onClick={() => {
                  setLoggedIn(!loggedIn)
                }}
              >
                Sign Out
              </ContextMenuItem>
            </>
          }
        />
      )}
    </div>
  )
}

export default TopLinks
