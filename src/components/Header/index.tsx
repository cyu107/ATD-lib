import React, { ReactElement } from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import DesktopMenu from './Desktop'
import MobileMenu from './Mobile'

import { MenuItem } from './types'
import HeaderDataContext from './context'

type PropsType = {
  data: MenuItem[]
}

const Header = ({ data }: PropsType): ReactElement => {
  const theme = useTheme()
  const desktop = useMediaQuery(theme.breakpoints.up('sm'))
  return (
    <header>
      <HeaderDataContext.Provider value={{ data: data }}>
        {desktop ? <DesktopMenu /> : <MobileMenu />}
      </HeaderDataContext.Provider>
    </header>
  )
}

export default Header
