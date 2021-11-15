import React, { ReactElement } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@bit/littlebox.atd.button'
import GroupTitle from '@bit/littlebox.atd.header-group-title'
import Link from '@bit/littlebox.atd.header-link'
import { MenuItem } from '../../../types'

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    '& ul': {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  group: {
    marginRight: '48px',
    marginBottom: '32px',
  },
  linkWrap: {
    marginBottom: '16px',
  },
})

type PropsType = {
  data: MenuItem[] | undefined
}

const SecondaryLinks = ({ data }: PropsType): ReactElement => {
  const classes = useStyles()

  // First child item is actually a Header menu item / type = DEFAULT
  // so we skip it?
  const items = data && data.slice(1)
  const groups =
    items &&
    items.map((group, idx) => {
      const groupLinks: ReactElement[] | undefined =
        group.children &&
        group.children.map((link, idy) => {
          switch (link.type) {
            case 'BUTTON':
              return (
                <li key={idy} className={classes.linkWrap}>
                  <Button href={link.url} variant="secondary" size="small">
                    {link.title}
                  </Button>
                </li>
              )
            default:
              return (
                <li key={idy} className={classes.linkWrap}>
                  <Link href={link.url || ''}>{link.title}</Link>
                </li>
              )
          }
        })

      return (
        <div key={idx} className={classes.group}>
          <GroupTitle>{group.title}</GroupTitle>
          <ul>{groupLinks}</ul>
        </div>
      )
    })

  return <div className={classes.wrapper}>{groups}</div>
}

export default SecondaryLinks
