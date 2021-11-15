### Examples:

#### Primary
```jsx padded
<Button size="large" href="https://www.google.rs">Button label</Button>
<Button size="medium">Button label</Button>
<Button size="small">Button label</Button>
<Button size="small" disabled>Button label</Button>
```

#### Secondary
```jsx padded
<Button variant="secondary" size="large">Button label</Button>
<Button variant="secondary" size="medium">Button label</Button>
<Button variant="secondary" size="small">Button label</Button>
<Button variant="secondary" size="small" disabled>Button label</Button>
```

#### Tertiary
```jsx padded
<Button variant="tertiary" size="large">Button label</Button>
<Button variant="tertiary" size="medium">Button label</Button>
<Button variant="tertiary" size="small">Button label</Button>
<Button variant="tertiary" size="small" disabled>Button label</Button>
```

#### Arrow
```jsx padded
import { makeStyles, Box } from '@material-ui/core';
import Grid from '@bit/littlebox.atd.grid'
import colors from '@bit/littlebox.atd.colors'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  wrapper: {
    width: '240px',
    height: '50px',
    marginRight: '20px',
    border: `1px solid ${colors.gray400}`
  },
});

const classes = useStyles();

<Grid className={classes.root}>
  <Box className={classes.wrapper}>
    <Button variant="arrow" size="large">Button label</Button>
  </Box>
  <Box className={classes.wrapper}>
    <Button variant="arrow" size="medium">Button label</Button>
  </Box>
  <Box className={classes.wrapper}>
    <Button variant="arrow" size="small">Button label</Button>
  </Box>
  <Box className={classes.wrapper}>
    <Button variant="arrow" size="small" disabled>Button label</Button>
  </Box>
</Grid>
```

#### Full Width
```jsx padded
import { makeStyles, createStyles, Box } from '@material-ui/core'
import Grid from '@bit/littlebox.atd.grid';

const useStyles = makeStyles({
  root: {
    width: '100%',
    paddingRight: '16px'
  }
});

const classes = useStyles();

<Grid className={classes.root} container spacing={1}>
  <Grid item xs={12}>
    <Button variant="primary" size="large" fullWidth>Full Width Button</Button>
  </Grid>
  <Grid item xs={12}>
    <Button variant="secondary" size="large" fullWidth>Full Width Button</Button>
  </Grid>
  <Grid item xs={12}>
    <Button variant="tertiary" size="large" fullWidth>Full Width Button</Button>
  </Grid>
</Grid>
```
