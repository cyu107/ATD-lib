import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from 'views/Home'
import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <Route path="/" component={Home} />
      </Router>
    </React.Fragment>
  )
}

export default App
