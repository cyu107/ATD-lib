import React, { ReactElement } from 'react'
import { Theme, makeStyles, createStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Grid from '@bit/littlebox.atd.grid'
import Button from '@bit/littlebox.atd.button'
import Icon from '@bit/littlebox.atd.icons'
import colors from '@bit/littlebox.atd.colors'
import Container from '@bit/littlebox.atd.container'
import GroupTitle from '@bit/littlebox.atd.header-group-title'
import Link from '@bit/littlebox.atd.header-link'
import DesktopLinks from './DesktopLinks'
import MobileLinks from './MobileLinks'
import logoSmall from './assets/logo-small.svg'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      position: 'relative',
      marginTop: '2em',
      paddingTop: '32px',
      paddingBottom: '24px',
      backgroundColor: colors.gray200,
      '& ul': {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
      [theme.breakpoints.up('sm')]: {
        paddingTop: '56px',
        paddingBottom: '38px',
      },
    },
    border: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '1px',
      background: `linear-gradient(90deg, ${colors.brandYellow} 0%, ${colors.brandOrange} 52.98%, ${colors.brandRed} 98.75%)`,
    },
    logoWrap: {
      display: 'flex',
      maxWidth: '390px',
      marginBottom: '48px',
      alignItems: 'center',
      [theme.breakpoints.down(400)]: {
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
      '& img': {
        flexShrink: 0,
        marginRight: '16px',
      },
      '& p': {
        margin: 0,
        fontWeight: 500,
        fontSize: '14px',
        lineHeight: '18px',
        [theme.breakpoints.down(400)]: {
          marginTop: '8px',
        },
      },
    },
    mid: {
      [theme.breakpoints.up('sm')]: {
        flexWrap: 'nowrap',
      },
    },
    socialWrap: {
      [theme.breakpoints.up('sm')]: {
        marginLeft: '40px',
      },
    },
    socialIcons: {
      display: 'flex',
      marginBottom: '24px',
      '& a:not(:last-child)': {
        marginRight: '16px',
      },
    },
    btn: {
      backgroundColor: colors.white,
    },
    copyright: {
      marginTop: '30px',
      '& span': {
        fontSize: '12px',
        fontWeight: 500,
      },
      '& p': {
        marginTop: '9px',
        marginBottom: 0,
        fontSize: '10px',
        maxWidth: '327px',
      },
      '& ul': {
        display: 'flex',
      },
      '& li:not(:last-child)': {
        marginRight: '16px',
      },
      [theme.breakpoints.down('xs')]: {
        alignItems: 'flex-start',
        flexDirection: 'column',
        '& .MuiGrid-item:last-child': {
          order: -1,
          marginBottom: '14px',
        },
      },
    },
  }),
)

const Footer = (): ReactElement => {
  const classes = useStyles()
  const theme = useTheme()
  const desktop = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <footer className={classes.footer}>
      <span className={classes.border} />
      <Container>
        <div className={classes.logoWrap}>
          <img src={logoSmall} alt="ATD" />
          <p>Our Mission: Empower Professional to Develop Talent in the Workplace</p>
        </div>
        <Grid container className={classes.mid}>
          <Grid item xs={12} sm="auto">
            {desktop && <DesktopLinks />}
            {!desktop && <MobileLinks />}
          </Grid>
          <Grid item xs={12} sm="auto" className={classes.socialWrap}>
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
            <Button variant="secondary" className={classes.btn}>
              Become A Member
            </Button>
          </Grid>
        </Grid>

        <Grid container alignItems="center" justify="space-between" className={classes.copyright}>
          <Grid item>
            <span>© 2020 ATD | All Rights Reserved</span>
            <p>
              ASTD changed its name to ATD to meet the growing needs of a dynamic, global
              profession.
            </p>
          </Grid>
          <Grid item>
            <ul>
              <li>
                <Link href="https://www.google.com">Terms of Use</Link>
              </li>
              <li>
                <Link href="https://www.google.com">Privacy Policy</Link>
              </li>
              <li>
                <Link href="https://www.google.com">Cookies Policy</Link>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </footer>
  )
}

export default Footer
