import React, { ReactElement } from 'react'
import Container from '@bit/littlebox.atd.container'
import Tag from 'components/Tag'

const TagsExample = (): ReactElement => (
  <Container>
    <Tag>Tag label</Tag>
    <Tag small>Tag label</Tag>
    <Tag disabled>Tag label</Tag>
  </Container>
)

export default TagsExample
