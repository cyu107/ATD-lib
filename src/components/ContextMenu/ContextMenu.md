### Examples:

#### Default
```jsx padded
import { makeStyles, Box } from '@material-ui/core';
import ContextMenuItem from './Item';

const useStyles = makeStyles({
  menuWrapper: {
    marginRight: '20px'
  }
});

const classes = useStyles();

<Box>
  <ContextMenu
    className={classes.menuWrapper}
    toggle="Menu label"
    size="large"
    menu={
      <>
        <ContextMenuItem>Menu Item 1</ContextMenuItem>
        <ContextMenuItem>Menu Item 2</ContextMenuItem>
        <ContextMenuItem>Menu Item 3</ContextMenuItem>
      </>
    }
  />
  <ContextMenu
    className={classes.menuWrapper}
    toggle="Menu label"
    size="medium"
    menu={
      <>
        <ContextMenuItem>Menu Item 1</ContextMenuItem>
        <ContextMenuItem>Menu Item 2</ContextMenuItem>
        <ContextMenuItem>Menu Item 3</ContextMenuItem>
      </>
    }
  />
  <ContextMenu
    className={classes.menuWrapper}
    toggle="Menu label"
    size="small"
    menu={
      <>
        <ContextMenuItem>Menu Item 1</ContextMenuItem>
        <ContextMenuItem>Menu Item 2</ContextMenuItem>
        <ContextMenuItem>Menu Item 3</ContextMenuItem>
      </>
    }
  />
</Box>
```

#### Borderless
```jsx padded
import { makeStyles, Box } from '@material-ui/core';
import ContextMenuItem from './Item';

const useStyles = makeStyles({
  menuWrapper: {
    marginRight: '20px'
  }
});

const classes = useStyles();

<Box>
  <ContextMenu
    className={classes.menuWrapper}
    toggle="Menu label"
    size="large"
    menu={
      <>
        <ContextMenuItem>Menu Item 1</ContextMenuItem>
        <ContextMenuItem>Menu Item 2</ContextMenuItem>
        <ContextMenuItem>Menu Item 3</ContextMenuItem>
      </>
    }
    noBorder
  />
  <ContextMenu
    className={classes.menuWrapper}
    toggle="Menu label"
    size="medium"
    menu={
      <>
        <ContextMenuItem>Menu Item 1</ContextMenuItem>
        <ContextMenuItem>Menu Item 2</ContextMenuItem>
        <ContextMenuItem>Menu Item 3</ContextMenuItem>
      </>
    }
    noBorder
  />
  <ContextMenu
    className={classes.menuWrapper}
    toggle="Menu label"
    size="small"
    menu={
      <>
        <ContextMenuItem>Menu Item 1</ContextMenuItem>
        <ContextMenuItem>Menu Item 2</ContextMenuItem>
        <ContextMenuItem>Menu Item 3</ContextMenuItem>
      </>
    }
    noBorder
  />
</Box>
```
