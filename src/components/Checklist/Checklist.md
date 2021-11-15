```jsx padded
import { makeStyles, Box } from '@material-ui/core';
import colors from '@bit/littlebox.atd.colors'

const useStyles = makeStyles({
  root: {
    width: '220px',
    padding: '10px',
    border: `1px solid ${colors.gray400}`,
  },
});

const classes = useStyles();

<Box className={classes.root}>
  <Checklist
    list={[
      {
        label: 'Building Personal Capability',
        checked: true
      },
      {
        label: 'Developing Professional Capability',
        checked: true
      },
      {
        label: 'Impacting Organizational Capability',
        checked: true
      },
    ]}
  />
</Box>
```