import React, { ReactElement } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@bit/littlebox.atd.container'
import Grid from '@bit/littlebox.atd.grid'
import TopLinks from './TopLinks'
import UserLinks from './UserLinks'
import atdLogo from '../../assets/logo.svg'

const useStyles = makeStyles({
  root: {
    position: 'relative',
    paddingTop: '8px',
    paddingBottom: '24px',
  },
})

const Top = (): ReactElement => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Container>
        <Grid container>
          <Grid item xs>
            <img src={atdLogo} alt="ATD" />
          </Grid>
          <Grid item>
            <TopLinks />
            <UserLinks />
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Top
