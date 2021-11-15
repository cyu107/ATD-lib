import React, { ReactElement } from 'react'
import Container from '@bit/littlebox.atd.container'
import Pagination from 'components/Pagination'

const PaginationExample = (): ReactElement => {
  return (
    <Container>
      <Pagination count={10} />
      <Pagination count={10} disabled />
    </Container>
  )
}

export default PaginationExample
