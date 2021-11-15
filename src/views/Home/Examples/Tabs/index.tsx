import React, { useState, ReactElement } from 'react'
import { Tab, Tabs } from '@material-ui/core'
import Container from '@bit/littlebox.atd.container'

const TabsExample = (): ReactElement => {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Container>
      <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
        <Tab label="Following" />
        <Tab label="Followers" />
        <Tab label="Groups" />
        <Tab label="Suggested for you" />
      </Tabs>
    </Container>
  )
}

export default TabsExample
