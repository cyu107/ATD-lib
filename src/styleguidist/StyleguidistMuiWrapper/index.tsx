import React, { ReactElement } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import atdTheme from '@bit/littlebox.atd.theme'
import CssBaseline from '@material-ui/core/CssBaseline'

const SectionsRenderer = ({ children, ...rest }: { children: ReactElement; rest: any }) => {
  return (
    <MuiThemeProvider theme={atdTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}

export default SectionsRenderer
