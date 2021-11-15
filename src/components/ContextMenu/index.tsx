import React, { ReactElement } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MuiPopover from '@material-ui/core/Popover'
import colors from '@bit/littlebox.atd.colors'
import ButtonDropdown from '../ButtonDropdown'
import ContextMenuContext from './context'

const useStyles = makeStyles({
  popover: {
    '& .MuiPopover-paper': {
      boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.2)',
    },
  },
  menu: {
    paddingTop: '8px',
    paddingBottom: '8px',
    background: colors.gray200,
  },
})

type PropsType = {
  /** Text / node for the menu toggle */
  toggle: ReactElement | string
  /** className */
  className?: string
  /** Menu items - best used with ContextMenuItem component */
  menu: null | ReactElement | ReactElement[]
  /** Dropdown Menu anchor point */
  menuAnchor: 'left' | 'center' | 'right'
  /** One of the following: 'small' | 'medium' | 'large' */
  size?: 'small' | 'medium' | 'large'
  /** Disable button border */
  noBorder?: boolean
}

const ContextMenu = ({
  menu,
  menuAnchor,
  toggle,
  size,
  noBorder,
  className,
}: PropsType): ReactElement => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
    return null
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <ContextMenuContext.Provider value={{ close: handleClose }}>
      <ButtonDropdown
        className={className}
        open={open}
        size={size}
        noBorder={noBorder}
        onClick={handleClick}
      >
        {toggle}
      </ButtonDropdown>
      <MuiPopover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        className={classes.popover}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: menuAnchor,
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <div className={classes.menu}>{menu}</div>
      </MuiPopover>
    </ContextMenuContext.Provider>
  )
}

ContextMenu.defaultProps = {
  size: 'medium',
  noBorder: false,
  menuAnchor: 'left',
}

export default ContextMenu
