import React, { ReactElement } from 'react'
import Grid from '@bit/littlebox.atd.grid'
import GroupTitle from '@bit/littlebox.atd.header-group-title'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@bit/littlebox.atd.header-link'

const useStyles = makeStyles({
  linkColumn: {
    marginRight: '41px',
  },
  linksWrap: {
    marginBottom: '2em',
  },
  linkWrap: {
    marginBottom: '16px',
  },
})

const DesktopLinks = (): ReactElement => {
  const classes = useStyles()
  return (
    <Grid container wrap="nowrap">
      <Grid item className={classes.linkColumn}>
        <GroupTitle>About</GroupTitle>
        <ul>
          <li className={classes.linkWrap}>
            <Link href="https://www.google.com">About Us</Link>
          </li>
          <li className={classes.linkWrap}>
            <Link href="https://www.google.com">FAQs</Link>
          </li>
          <li className={classes.linkWrap}>
            <Link href="https://www.google.com">Chapters</Link>
          </li>
          <li className={classes.linkWrap}>
            <Link href="https://www.google.com">ATD Global</Link>
          </li>
          <li className={classes.linkWrap}>
            <Link href="https://www.google.com">ATD Press Room</Link>
          </li>
          <li className={classes.linkWrap}>
            <Link href="https://www.google.com">Merchandise</Link>
          </li>
          <li className={classes.linkWrap}>
            <Link href="https://www.google.com">Advertise With Us</Link>
          </li>
        </ul>
      </Grid>
      <Grid item className={classes.linkColumn}>
        <GroupTitle>Careers</GroupTitle>
        <ul>
          <li className={classes.linkWrap}>
            <Link href="https://www.google.com">Careers at ATD</Link>
          </li>
          <li className={classes.linkWrap}>
            <Link href="https://www.google.com">ATD Job Bank</Link>
          </li>
        </ul>
      </Grid>
      <Grid item className={classes.linkColumn}>
        <div className={classes.linksWrap}>
          <GroupTitle>Email Us</GroupTitle>
          <ul>
            <li className={classes.linkWrap}>
              <Link href="mailto:customercare@td.org">customercare@td.org</Link>
            </li>
          </ul>
        </div>
        <div className={classes.linksWrap}>
          <GroupTitle>Fax</GroupTitle>
          <ul>
            <li className={classes.linkWrap}>
              <Link href="tel:17082998723">1.708.299.8723</Link>
            </li>
          </ul>
        </div>
        <div className={classes.linksWrap}>
          <GroupTitle>Call Us</GroupTitle>
          <ul>
            <li className={classes.linkWrap}>
              <Link href="tel:+18006282783">+1.800.628.2783</Link>
            </li>
            <li className={classes.linkWrap}>
              <Link href="tel:+17036838100">+1.703.683.8100</Link>
            </li>
          </ul>
        </div>
      </Grid>
    </Grid>
  )
}

export default DesktopLinks
