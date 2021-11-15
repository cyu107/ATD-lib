import React, { ReactElement } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Icon from '@bit/littlebox.atd.icons'
import Spacer from '@bit/littlebox.atd.spacer'
import ContextMenuItem from '@bit/littlebox.atd.context-menu/dist/Item'
import Link from '@bit/littlebox.atd.header-link'
import ContextMenu from '../../../../ContextMenu'

const useStyles = makeStyles({
  link: {
    display: 'inline-block',
    padding: '3px 10px',
    '& svg': {
      position: 'relative',
      top: '-0.15em',
    },
  },
  menu: {
    fontWeight: 500,
  },
})

const TopLinks = (): ReactElement => {
  const classes = useStyles()
  return (
    <div>
      <Link href="https://www.google.com" className={classes.link}>
        Enterprise Home
      </Link>
      <ContextMenu
        className={classes.menu}
        toggle="Chapters"
        size="small"
        menu={
          <>
            <ContextMenuItem small>Chapters</ContextMenuItem>
            <ContextMenuItem small>Chapter Locator</ContextMenuItem>
            <ContextMenuItem small>Chapter Leader Community (CLC)</ContextMenuItem>
          </>
        }
        noBorder
      />
      <Link href="https://www.google.com" className={classes.link}>
        <Icon glyph="globe" size={16} />
        <Spacer size={4} />
        <span>ATD Global</span>
      </Link>
      <Link href="https://www.google.com" className={classes.link}>
        +1.800.628.2783
      </Link>
    </div>
  )
}

export default TopLinks
