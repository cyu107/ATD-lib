```jsx padded
import { makeStyles, Box } from '@material-ui/core';
import colors from '@bit/littlebox.atd.colors'

const useStyles = makeStyles({
  root: {
    width: '216px'
  },
});

const classes = useStyles();

<Box className={classes.root}>
  <ProgressBar
    count={12}
    total={25}
    label="Activities Completed"
  />
</Box>
```