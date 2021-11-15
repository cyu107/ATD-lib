import React, { useContext, ReactElement } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Grid from '@bit/littlebox.atd.grid'
import colors from '@bit/littlebox.atd.colors'
import Container from '@bit/littlebox.atd.container'
import ContextMenuItem from '@bit/littlebox.atd.context-menu/dist/Item'
import NavLink from '@bit/littlebox.atd.header-nav-link'
import HeaderDataContext from '../../context'
import ContextMenu from '../../../ContextMenu'

const useStyles = makeStyles({
  root: {
    position: 'relative',
    padding: '11px 0',
    borderTop: `1px solid ${colors.gray400}`,
  },
  empty: {
    padding: 0,
  },
  border: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '2px',
    background: `linear-gradient(90deg, ${colors.brandYellow} 0%, ${colors.brandOrange} 52.98%, ${colors.brandRed} 98.75%)`,
  },
  menu: {
    // marginLeft: '24px',
  },
})

type PropsType = {
  toggleMegaMenu: () => void
}

const Bottom = ({ toggleMegaMenu }: PropsType): ReactElement => {
  const classes = useStyles()
  const headerContext = useContext(HeaderDataContext)
  const rootMenu = headerContext.data

  const leftMenuItems = rootMenu && rootMenu[0]
  const rightMenuItems = rootMenu && rootMenu.slice(1)

  const emptyMenu = !leftMenuItems && rightMenuItems && !rightMenuItems.length

  return (
    <div className={clsx(classes.root, { [classes.empty]: emptyMenu })}>
      <Container>
        <Grid container>
          {leftMenuItems && (
            <Grid item xs>
              <NavLink
                big
                onClick={() => {
                  toggleMegaMenu()
                }}
              >
                {leftMenuItems.title}
              </NavLink>
            </Grid>
          )}

          {rightMenuItems && (
            <Grid item>
              {rightMenuItems.map((menu, idx) => {
                const menuItems = menu.children
                  ? menu.children.map((item, idx) => (
                      <ContextMenuItem key={idx} href={item.url} external={item.target === 'BLANK'}>
                        {item.title}
                      </ContextMenuItem>
                    ))
                  : null
                return (
                  <ContextMenu
                    className={classes.menu}
                    key={idx}
                    toggle={menu.title}
                    menu={<>{menuItems}</>}
                    noBorder
                  />
                )
              })}
            </Grid>
          )}
        </Grid>
      </Container>
      <span className={classes.border} />
    </div>
  )
}

export default Bottom
