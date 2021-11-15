import React, { ReactElement } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@bit/littlebox.atd.header-link'
import Accordion from '@bit/littlebox.atd.accordion'

const useStyles = makeStyles({
  root: {
    marginBottom: '40px',
  },
  linkWrap: {
    marginBottom: '16px',
    '&:last-child': {
      marginBottom: '8px',
    },
  },
})

const MobileLinks = (): ReactElement => {
  const classes = useStyles()
  return (
    <Accordion
      className={classes.root}
      panels={[
        {
          title: 'About',
          content: (
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
          ),
        },
        {
          title: 'Careers',
          content: (
            <ul>
              <li className={classes.linkWrap}>
                <Link href="https://www.google.com">Careers at ATD</Link>
              </li>
              <li className={classes.linkWrap}>
                <Link href="https://www.google.com">ATD Job Bank</Link>
              </li>
            </ul>
          ),
        },
        {
          title: 'Contact Us',
          content: (
            <ul>
              <li className={classes.linkWrap}>
                <Link href="mailto:customercare@td.org">customercare@td.org</Link>
              </li>
              <li className={classes.linkWrap}>
                <Link href="tel:+18006282783">+1.800.628.2783</Link>
              </li>
              <li className={classes.linkWrap}>
                <Link href="tel:+17036838100">+1.703.683.8100</Link>
              </li>
            </ul>
          ),
        },
      ]}
    />
  )
}

export default MobileLinks
