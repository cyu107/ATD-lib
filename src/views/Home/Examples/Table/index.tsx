import React, { ReactElement } from 'react'
import Container from '@bit/littlebox.atd.container'
import { makeStyles } from '@material-ui/core/styles'
import Lozenge from '@bit/littlebox.atd.lozenge'
import colors from '@bit/littlebox.atd.colors'
import Table from 'components/Table'

const useStyles = makeStyles({
  title: {
    display: 'block',
    fontWeight: 600,
  },
  subtitle: {
    color: colors.gray500,
    fontWeight: 600,
  },
  actionToggle: {
    display: 'inline-block',
    padding: '0.5em',
    borderRadius: '50%',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: colors.textLinkStandaloneHover,
    },
  },
  actionItem: {
    display: 'flex',
    alignItems: 'center',
  },
})

const Example = (): ReactElement => {
  const classes = useStyles()

  const sortHandler = (label: string) => {
    console.log(label)
  }

  return (
    <Table
      order="asc"
      orderBy="Title"
      header={[
        {
          label: 'Title',
          sort: sortHandler,
        },
        {
          label: 'Status',
          sort: sortHandler,
        },
        'Details',
        'Earned',
      ]}
      rows={{
        elementRows: [
          [
            <span key={1} aria-label="Adult Learning: Applying Learning in the Workplace">
              <strong className={classes.title}>
                Adult Learning: Applying Learning in the Workplace
              </strong>
              <strong className={classes.subtitle}>Individual Course</strong>
            </span>,
            <Lozenge key={2} variant="outline" aria-label="In-Progress">
              In-Progress
            </Lozenge>,
            <span key={3}>
              <strong className={classes.title}>On Demand</strong>
              <strong className={classes.subtitle}>Online</strong>
            </span>,
            <span key={4}>
              <strong>CEU:</strong> 0.0 / 0.1
            </span>,
          ],
          [
            <span key={2} aria-label="Adult Learning: Applying Learning in the Workplace">
              <strong className={classes.title}>
                Adult Learning: Applying Learning in the Workplace
              </strong>
              <strong className={classes.subtitle}>Individual Course</strong>
            </span>,
            <Lozenge key={2} variant="outline" aria-label="In-Progress">
              In-Progress
            </Lozenge>,
            <span key={3}>
              <strong className={classes.title}>On Demand</strong>
              <strong className={classes.subtitle}>Online</strong>
            </span>,
            <span key={4}>
              <strong>CEU:</strong> 0.0 / 0.1
            </span>,
          ],
          [
            <span key={2} aria-label="Adult Learning: Applying Learning in the Workplace">
              <strong className={classes.title}>
                Adult Learning: Applying Learning in the Workplace
              </strong>
              <strong className={classes.subtitle}>Individual Course</strong>
            </span>,
            <Lozenge key={2} variant="outline" aria-label="In-Progress">
              In-Progress
            </Lozenge>,
            <span key={3}>
              <strong className={classes.title}>On Demand</strong>
              <strong className={classes.subtitle}>Online</strong>
            </span>,
            <span key={4}>
              <strong>CEU:</strong> 0.0 / 0.1
            </span>,
          ],
        ],
        originalRows: [
          {
            // can be original row query data. This field is optional, if no raw row data, the rendered row will not have action CTAs
            certificationPDFUrl: 'example.com',
            url: 'example.com',
          },
          {},
          {
            url: 'example.com',
          },
        ],
      }}
      actions={{
        label: 'Actions',
        items: [
          {
            title: 'Download Certification (PDF)',
            property: 'certificationPDFUrl',
          },
          {
            title: 'Launch Course (external link)',
            property: 'url',
          },
        ],
      }}
    />
  )
}

export default Example
