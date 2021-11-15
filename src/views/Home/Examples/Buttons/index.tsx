import React, { ReactElement } from 'react'
import Container from '@bit/littlebox.atd.container'
import Button from 'components/Button'

const ButtonsExample = (): ReactElement => (
  <Container>
    <Button size="small">Primary</Button>
    <Button size="medium">Primary</Button>
    <Button size="large">Primary</Button>
    <br />
    <Button disabled size="small">
      Primary
    </Button>
    <Button disabled size="medium">
      Primary
    </Button>
    <Button disabled size="large">
      Primary
    </Button>
    <br />
    <br />
    <Button variant="secondary" size="small">
      Secondary
    </Button>
    <Button variant="secondary" size="medium">
      Secondary
    </Button>
    <Button variant="secondary" size="large">
      Secondary
    </Button>
    <br />
    <Button variant="secondary" disabled size="small">
      Secondary
    </Button>
    <Button variant="secondary" disabled size="medium">
      Secondary
    </Button>
    <Button variant="secondary" disabled size="large">
      Secondary
    </Button>
    <br />
    <br />
    <Button variant="tertiary" size="small">
      Tertiary
    </Button>
    <Button variant="tertiary" size="medium">
      Tertiary
    </Button>
    <Button variant="tertiary" size="large">
      Tertiary
    </Button>
    <br />
    <Button variant="tertiary" disabled size="small">
      Tertiary
    </Button>
    <Button variant="tertiary" disabled size="medium">
      Tertiary
    </Button>
    <Button variant="tertiary" disabled size="large">
      Tertiary
    </Button>
  </Container>
)

export default ButtonsExample
