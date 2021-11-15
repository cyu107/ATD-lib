import React, { ReactElement } from 'react'
import Container from '@bit/littlebox.atd.container'
import Stats from '@bit/littlebox.atd.stats'

const StatsExample = (): ReactElement => {
  return (
    <Container>
      <Stats
        stats={[
          {
            label: 'STAT LABEL',
            labelColor: '#7C7C7C',
            labelSize: 11,
            labelWeight: 600,
            count: '00+',
            countColor: '#2E2D31',
            countSize: 34,
            countWeight: 600,
            alignment: 'label-top',
          },
          {
            label: 'STAT LABEL',
            labelColor: '#7C7C7C',
            labelSize: 11,
            labelWeight: 600,
            count: '00+',
            countColor: '#2E2D31',
            countSize: 34,
            countWeight: 600,
            alignment: 'label-bottom',
          },
          {
            label: 'STAT LABEL',
            labelColor: '#7C7C7C',
            labelSize: 11,
            labelWeight: 600,
            labelWidth: 32,
            count: '00+',
            countColor: '#2E2D31',
            countSize: 34,
            countWeight: 600,
            alignment: 'label-right',
          },
          {
            label: 'STAT LABEL',
            labelColor: '#7C7C7C',
            labelSize: 11,
            labelWeight: 600,
            labelWidth: 32,
            count: '00+',
            countColor: '#2E2D31',
            countSize: 34,
            countWeight: 600,
            alignment: 'label-left',
          },
        ]}
      />
      <Stats
        stats={[
          {
            label: 'Following',
            labelColor: '#424140',
            labelSize: 12,
            labelWeight: 500,
            count: 250,
            countColor: '#E13000',
            countSize: 22,
            countWeight: 600,
            alignment: 'label-bottom',
          },
          {
            label: 'Followers',
            labelColor: '#424140',
            labelSize: 12,
            labelWeight: 500,
            count: 20,
            countColor: '#E13000',
            countSize: 22,
            countWeight: 600,
            alignment: 'label-bottom',
          },
          {
            label: 'Groups',
            labelColor: '#424140',
            labelSize: 12,
            labelWeight: 500,
            count: 14,
            countColor: '#E13000',
            countSize: 22,
            countWeight: 600,
            alignment: 'label-bottom',
          },
        ]}
        divider={{
          width: 1,
          color: '#DBD9D6',
        }}
      />
    </Container>
  )
}

export default StatsExample
