```jsx padded
import { makeStyles, createStyles, Box } from '@material-ui/core'
import colors from '@bit/littlebox.atd.colors'

const useStyles = makeStyles({
  root: {
    width: '320px',
    padding: '0 10px',
    border: `1px solid ${colors.gray300}`
  }
});

const classes = useStyles();

<Box className={classes.root}>
  <IconCTA
    glyph="articles"
    href="#"
    label="Case Studies"
    count={82}
  />
</Box>
```
