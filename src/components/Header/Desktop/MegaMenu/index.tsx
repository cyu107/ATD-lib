import React, { useContext, useState, ReactElement } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import colors from '@bit/littlebox.atd.colors'
import Button from '@bit/littlebox.atd.button'
import Icon from '@bit/littlebox.atd.icons'
import Container from '@bit/littlebox.atd.container'
import Header from './Header'
import SecondaryLinks from './SecondaryLinks'
import PrimaryLink from './PrimaryLink'
import HeaderDataContext from '../../context'

const useStyles = makeStyles({
  wrap: {
    position: 'relative',
    display: 'flex',
    backgroundColor: colors.white,
    boxShadow: '0px 2px 10px rgba(49, 49, 51, 0.25)',
  },
  sidebar: {
    width: '250px',
    flexShrink: 0,
  },
  content: {
    padding: '40px 60px 40px 40px',
    flexGrow: 1,
    borderLeft: `1px solid ${colors.gray400}`,
    overflow: 'auto',
  },
  closeBtn: {
    position: 'absolute',
    top: '16px',
    right: '16px',
    minWidth: 0,
    padding: 0,
    boxShadow: 'none',
    borderRadius: 0,
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '-1em',
      left: '-1em',
      right: '-1em',
      bottom: '-1em',
    },
    '&:hover': {
      boxShadow: 'none',
      backgroundColor: 'transparent',
    },
  },
})

type PropsType = {
  show: boolean
  setShow: (showMegaMenu: boolean) => void
}

const MegaMenu = ({ show, setShow }: PropsType): ReactElement | null => {
  const headerContext = useContext(HeaderDataContext)
  const rootMenu = headerContext.data
  const menuData = rootMenu && rootMenu[0] && rootMenu[0].children

  const [active, setActive] = useState(0)
  const classes = useStyles()

  if (!show) {
    return null
  }

  const activeMenu = (menuData && menuData[active]) || null
  const header = (activeMenu && activeMenu.children && activeMenu.children[0]) || null

  return (
    <Container>
      <div className={classes.wrap}>
        <div className={classes.sidebar}>
          {menuData &&
            menuData.map((item, idx) => (
              <PrimaryLink
                key={idx}
                title={item.title}
                subtitle={item.description}
                active={active === idx}
                onClick={() => {
                  setActive(idx)
                }}
              />
            ))}
        </div>
        <div className={classes.content}>
          {activeMenu && header && (
            <React.Fragment>
              <Button
                variant="secondary"
                className={classes.closeBtn}
                onClick={() => {
                  setShow(false)
                  setActive(0)
                }}
              >
                <Icon glyph="close" size={16} />
              </Button>
              <Header title={activeMenu.title} url={header.url} target={header.target} />
              <SecondaryLinks data={activeMenu.children} />
            </React.Fragment>
          )}
        </div>
      </div>
    </Container>
  )
}

export default MegaMenu
