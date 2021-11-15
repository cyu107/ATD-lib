```jsx padded
import { makeStyles, Box } from '@material-ui/core';

const useStyles = makeStyles({
  btnNav: {
    width: '220px',
    marginRight: '20px'
  },
});

const classes = useStyles();

<Box>
  <ButtonNav className={classes.btnNav} active label="Personal Information" />
  <ButtonNav className={classes.btnNav} href="https://www.google.rs" label="Enterprise Account Management" />
</Box>
```
