import React, { ReactElement } from 'react'
import { Typography } from '@material-ui/core'
import Container from '@bit/littlebox.atd.container'
import TextLink from 'components/TextLink'

const TagsExample = (): ReactElement => (
  <Container>
    <Typography variant="h4" component="h3">
      TextLink
    </Typography>

    <TextLink variant="primary" href="#">
      TextLink text
    </TextLink>
    <br />
    <TextLink variant="secondary" href="#">
      TextLink text
    </TextLink>
    <br />
    <TextLink variant="standalone" href="#">
      TextLink text
    </TextLink>
  </Container>
)

export default TagsExample
