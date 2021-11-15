```jsx padded
import { makeStyles } from '@material-ui/core/styles'
import Lozenge from '@bit/littlebox.atd.lozenge'
import colors from '@bit/littlebox.atd.colors'

const useStyles = makeStyles({
  title: {
    display: 'block',
    color: colors.ctaPrimary,
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '18px'
  },
  subtitle: {
    color: colors.textActive,
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '16px'
  },
  textBold: {
    fontWeight: 600,
    color: '#2E2D31',
  },
  textNormal: {
    color: colors.gray500,
    fontWeight: 500,
  },
})
const classes = useStyles()
  const tableRows = () => {
    return Array(10).fill().map((item, index) => {
      return [
        <div key={1}>
          <span className={classes.title}>Instructional Design Certificate</span>
          <span className={classes.subtitle}>Certificate Program</span>
        </div>,
        <Lozenge key={2} variant="outline" aria-label="In-Progress">
          In progress
        </Lozenge>,
        <div key={3}>
          <span className={classes.textBold}>On Demand</span><br />
          <span className={classes.textNormal}>Online</span>
        </div>,
        <div key={4}>
          <span className={classes.textBold}>CEU: </span>
          <span className={classes.textNormal}>0.0 / 0.1</span><br />
          <span className={classes.textBold}>SHRM: </span>
          <span className={classes.textNormal}>0.0 / 0.1</span><br />
          <span className={classes.textBold}>HRCI: </span>
          <span className={classes.textNormal}>0.0 / 0.1</span><br />
          <span className={classes.textBold}>CEU: </span>
          <span className={classes.textNormal}>0.0 / 0.1</span><br />
        </div>,
      ]
    })
  }

  <Table
    order='asc'
    orderBy='Title'
    header={[
      {
        label: 'Title',
      },
      {
        label: 'Status',
      },
      'Details',
      'Earned'
    ]}
    rows={{
      elementRows: tableRows(),
      originalRows: []
    }}
    placeholder={{
      title: 'You have not enrolled in any ATD courses yet.',
      description: 'Lifelong learning is a career differentiator. When you’re ready, browse the complete list of ATD courses. There are live online, on-demand, and face-to-face options to fit your needs.',
      action: 'See Courses',
      actionUrl: 'https://example.com'
    }}
  />
```
