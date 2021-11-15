import React from 'react'
import Loader from '../Base'
import Grid from '@bit/littlebox.atd.grid'

type PropsType = {
  size?: number
}

const SuspenseLoader = (props: PropsType) => {
  return (
    <Grid container spacing={0} direction="column" alignItems="center" justify="center">
      <Grid item xs={12}>
        <Loader />
      </Grid>
    </Grid>
  )
}

export default SuspenseLoader
