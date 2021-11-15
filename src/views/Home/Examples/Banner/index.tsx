import React, { ReactElement } from 'react'
import Container from '@bit/littlebox.atd.container'
import Banner from 'components/Banner'

const BannerExample = (): ReactElement => (
  <Container>
    <Banner icon="globe" header="This is the header/title text">
      Your public profile is <strong>on</strong>, which means all ATD members will see the following
      infomation:
    </Banner>

    <br />
    <br />

    <Banner icon="lock-off" variant="success" header="Title of the banner goes here" />

    <br />
    <br />

    <Banner icon="lock-on" variant="error">
      Your public profile is <strong>on</strong>
    </Banner>
  </Container>
)

export default BannerExample
