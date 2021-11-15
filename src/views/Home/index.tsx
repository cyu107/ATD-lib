import React, { ReactElement } from 'react'
import { Typography } from '@material-ui/core'
import Container from '@bit/littlebox.atd.container'
import Header from 'components/Header'
import Footer from 'components/Footer'

// ATD components
import Carousel from 'views/Home/Examples/Carousel'

const Home = (): ReactElement => (
  <>
    <Header data={[]} />

    <Container>
      <Typography variant="h2" component="h1">
        ATD Web Components
        <Carousel />
      </Typography>
    </Container>

    <Footer />
  </>
)

export default Home
