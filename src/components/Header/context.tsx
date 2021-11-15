import React from 'react'

import { MenuItem } from './types'
const HeaderDataContext = React.createContext<Partial<{ data: MenuItem[] }>>({
  data: [],
})

export default HeaderDataContext
